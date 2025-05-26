interface Interest {
  id: number;
  title: string;
  description: string;
  icon: string; // SVG path or icon description
}

const interests: Interest[] = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    description: "Fascinated by the potential of AI/ML to solve complex problems. Currently exploring neural networks, NLP, and computer vision applications while building projects that leverage these technologies.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Deeply interested in cybersecurity principles and practices. Continuously learning about network security, ethical hacking, and secure coding practices to build robust and protected applications.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Passionate about creating responsive, accessible, and performant web applications using modern frameworks and technologies like React, Next.js, and TypeScript.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    id: 4,
    title: "Open Source Contribution",
    description: "Actively contributing to open-source projects and communities to collaborate with developers worldwide and improve software for everyone.",
    icon: "M6 6L14 10L6 14V6Z M20 12H14"
  }
];

export default interests;