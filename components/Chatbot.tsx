"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: "Hi there! I'm Ganesh's virtual assistant. Feel free to ask me about his projects, skills, or experience!",
            role: 'assistant',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message to chat
        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            role: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            // Send message to API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputValue,
                    history: messages.map(msg => ({
                        role: msg.role,
                        content: msg.content
                    }))
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();

            // Add AI response to chat
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: data.reply,
                role: 'assistant',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            // Add error message
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    content: "Sorry, I'm having trouble connecting right now. Please try again later.",
                    role: 'assistant',
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-90 sm:w-96 h-[600px] bg-gray-900 border border-gray-700 rounded-lg shadow-2xl overflow-hidden z-50 flex flex-col"
                    >
                        {/* Chat Header */}
                        <div className="bg-gray-800 border-b border-gray-700 p-4 ">
                            <div className="flex items-center space-x-3">
                                <div className="bg-emerald-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">Chat with Ganesh</h3>
                                    <p className="text-xs text-gray-400">AI assistant powered by Gemini</p>
                                </div>
                            </div>
                        <p className="text-xs text-amber-400 mt-2">
                            <strong>Note:</strong> This is an AI assistant that acts like Ganesh, but is not actually him.
                        </p>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user'
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-gray-800 text-gray-200'
                                            }`}
                                    >
                                        <div className="prose prose-invert max-w-none">
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={({
                                                    p: ({ node, ...props }: any) => <p className="text-sm" {...props} />,
                                                    a: ({ node, ...props }: any) => <a className="text-emerald-300 underline" {...props} />,
                                                    li: ({ node, ...props }: any) => <li className="text-sm" {...props} />,
                                                    code: ({ node, inline, className, children, ...props }: any) => (
                                                        <code className={`px-1 py-0.5 rounded ${inline ? 'bg-gray-800' : 'bg-gray-900'} text-sm`} {...props}>
                                                            {children}
                                                        </code>
                                                    ),
                                                } as any)}
                                            >
                                                {message.content}
                                            </ReactMarkdown>
                                        </div>
                                        <p className="text-xs opacity-70 mt-1 text-right">
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-800 text-white p-3 rounded-lg">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                            <div className="flex rounded-lg overflow-hidden">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-grow px-4 py-2 bg-gray-700 text-white border-none outline-none"
                                    disabled={isTyping}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 disabled:opacity-50"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;