// Projects data - Real projects from GitHub
export const projects = [
    {
        id: 1,
        title: 'TNAai',
        type: 'AI SaaS Platform (Production)',
        description: [
            'Built AI SaaS platform enabling document-based chat using RAG architecture',
            'Implemented real-time messaging system with analytics dashboards and feedback tracking',
            'Designed multi-tenant architecture with export features (PDF/CSV) for enterprise users',
        ],
        techStack: ['React.js', 'NestJS', 'RAG', 'Azure OpenAI'],
        liveUrl: null,
        githubUrl: null,
    },
    {
        id: 2,
        title: 'FAB Pakistan',
        type: 'Government Portal (Production)',
        description: [
            'Developed backend for national frequency allocation system used by regulatory authorities',
            'Implemented complex approval workflows and role-based access control mechanisms',
        ],
        techStack: ['NestJS', 'PostgreSQL', 'Prisma'],
        liveUrl: null,
        githubUrl: null,
    },
    {
        id: 3,
        title: 'Prop-Log',
        type: 'Property Management Platform (Production)',
        description: [
            'Built property management modules with secure authentication and role-based access',
            'Implemented CI/CD pipelines to automate deployment and improve release cycles',
        ],
        techStack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: null,
        githubUrl: null,
    },
    {
        id: 4,
        title: 'Auto Business Builder',
        type: 'AI Startup Kit Generator (Personal)',
        description: [
            'AI-driven platform to generate complete business plans, marketing strategies, and landing pages from user input',
            'Designed modular 3-tier architecture with dedicated AI service for structured output generation',
            'Integrated Groq (Llama 3.3) for high-performance AI content generation',
        ],
        techStack: ['React.js', 'NestJS', 'MongoDB', 'Groq AI'],
        liveUrl: null,
        githubUrl: 'https://github.com/waqasjafri512/Auto-Business-Builder',
    },
    {
        id: 5,
        title: 'AutoDev AI',
        type: 'AI Infrastructure Builder (Personal)',
        description: [
            'Developed AI platform to generate backend architectures, APIs, and database schemas from prompts',
            'Implemented tier-based access system with Stripe integration for subscription management',
            'Built real-time generation pipeline using WebSockets for live AI progress streaming',
        ],
        techStack: ['React.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe', 'WebSockets'],
        liveUrl: null,
        githubUrl: 'https://github.com/waqasjafri512/AutoDev-AI',
    },
    {
        id: 6,
        title: 'FinOps Auditor',
        type: 'Cloud Cost Optimization (Personal)',
        description: [
            'Built cloud cost optimization platform to identify and eliminate unused AWS resources',
            'Implemented dual-mode scanning (Live AWS APIs + Cost & Usage Reports)',
            'Developed AI-powered recommendation engine for cost-saving insights',
        ],
        techStack: ['Next.js 15', 'TypeScript', 'Prisma', 'AWS SDK'],
        liveUrl: null,
        githubUrl: 'https://github.com/waqasjafri512/FinOps-Auditor',
    },
    {
        id: 7,
        title: 'Fitness Tracker',
        type: 'Web Application (Personal)',
        description: [
            'Premium MERN stack fitness tracking web application',
            'Secure user authentication using JWT and bcrypt',
            'Track workouts including cardio, exercises, supplements, and weight lifting',
            'Modern glassmorphism UI with smooth animations',
        ],
        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
        liveUrl: null,
        githubUrl: 'https://github.com/waqasjafri512/Fitness-tracker.git',
    },
];

export default projects;
