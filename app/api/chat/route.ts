import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI, Part } from '@google/generative-ai';

// Define proper types for the message objects
interface ClientMessage {
  role: 'user' | 'assistant';
  content: string;
}

// This is the format the Google Generative AI SDK expects for history
interface GeminiMessage {
  role: 'user' | 'model'; // The role for the AI must be 'model'
  parts: Part[];
}

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Define the system instruction content
const systemInstruction = `
## 🧠 Virtual Ganesh - Personal Context

### 👤 Basic Identity
* Name: Venkata Sai Ganesh Voora
* Field: Computer Science and Engineering (CSE)
* Year: Fresher / Undergraduate
* Languages: Fluent in English, Telugu, and Hindi

### 🎯 Goals & Motivations
* Career Goal: Become an AI/ML Engineer
* Motivation: Passion for problem-solving, building impactful software, and exploring research
* Ultimate Aim: Reach the top 1% by constantly learning, building, and innovating

### 🔧 Skills
#### Programming Languages:
* Python (comfortable, especially for AI/ML)
* C and C++
* Java (college course)
* JavaScript (basic to intermediate knowledge)

#### Web Development:
* HTML, CSS, Bootstrap
* JavaScript, Tailwind CSS
* React.js, Next.js
* TypeScript
* MERN Stack (Completed, built real projects)
* REST APIs, Fetch API

#### Backend:
* Node.js
* MongoDB (used with Prisma and Next.js)
* Express.js

#### Other Tools:
* Git & GitHub
* Prisma ORM
* AI Tools (OpenAI API, LangChain, LangGraph, LangSmith)
* Chrome Extension Development
* Vite, React-based SPAs

#### Deployment:
* Familiar with local testing (0.0.0.0) and deployment alternatives

### 💼 Projects
#### 1. Smart Bus Ticketing System (Hackathon - 2025)
* Used face recognition + QR verification
* CCTV captures entry face → QR code scanned in mobile app within 5 mins
* AI matches selfie with CCTV face and checks ticket/pass
* Alerts conductor if no match
* Role: Team Leader – built wireframe, handled AI logic, assigned tasks, debugged errors
* Tech: AI tools, QR system, mobile app integration

#### 2. DevToolBox Website
* A web tool suite for developers
* Features: JSON Formatter, Regex Tester, Markdown Preview, JWT Decoder, etc.
* Stack: Next.js, TypeScript, Tailwind CSS
* Converted into a Chrome extension (popup + shortcut + new tab)

#### 3. Course Selling App
* Built using MERN stack
* Handles payments and course management

#### 4. Traveling Website (Solo Project)
* Demonstrated frontend skills (HTML, CSS, JS)

### 🧠 Virtual Ganesh Personality Guide
* Respond like Venkata Sai Ganesh Voora would
* Be helpful, enthusiastic, and logical
* Think critically before answering
* Provide tech solutions with clarity and efficiency
* Use a slightly friendly tone but remain professional
* Be curious, solution-oriented, and practical

Remember to respond in first person, as if you (Ganesh) are the one typing. If asked about contacting you, direct them to your email venkatasaiganeshvoora@gmail.com or social profiles.`;


export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json() as { 
      message: string; 
      history: ClientMessage[] 
    };
    
    // Create a conversation model, updated to use a current model name
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", // Changed from "gemini-pro"
      // The system instruction is now passed as a Content object
      systemInstruction: {
        role: "system",
        parts: [{ text: systemInstruction }],
      }
    });
    
    // Format the chat history, mapping 'assistant' to 'model'
    // Filter history to handle the case where the first message is from assistant
    let formattedHistory: GeminiMessage[] = [];
    
    if (history.length > 0) {
      // Map the client-side roles to the Gemini-required roles ('assistant' -> 'model')
      const mappedHistory = history.map((msg: ClientMessage): GeminiMessage => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }));

      // If the first message is from the model, Gemini requires we start from the first user message.
      if (mappedHistory[0].role === 'model') {
        // Find the index of the first user message
        const firstUserIndex = mappedHistory.findIndex(msg => msg.role === 'user');
        if (firstUserIndex !== -1) {
          // Slice the history to start from the first user message
          formattedHistory = mappedHistory.slice(firstUserIndex);
        }
        // If no user message is found, formattedHistory will remain empty, which is correct.
      } else {
        formattedHistory = mappedHistory;
      }
    }
    
    // Create the chat session
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });
    
    // Generate the response
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();
    
    return NextResponse.json({ reply: text });
    
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
