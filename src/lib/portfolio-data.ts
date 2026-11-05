export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  context: string;
  role: string;
  description: string;
  longDescription: string[];
  keyFeatures: string[];
  architecture: string[];
  technologies: string[];
  image: string;
  status: string;
  githubUrl?: string;
}

export interface Capability {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  linkTarget: string;
}

export interface Highlight {
  id: string;
  title: string;
  tagline: string;
  statement: string;
  details: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year?: string;
  badge: string;
  type: 'competition' | 'certification';
  description?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Sathurjan Vijithakumarasena',
    shortName: 'Sathurjan',
    wordmark: 'Sathurjan.',
    roles: [
      'Information Technology Undergraduate',
      'Software Engineer',
      'Full Stack Developer',
    ],
    eyebrow: 'SOFTWARE ENGINEER · FULL-STACK DEVELOPER',
    headline: "Hi, I'm Sathurjan.",
    summary:
      "Information Technology undergraduate at the University of Moratuwa with hands-on experience in full-stack web development, REST API development, database systems, secure authentication, and enterprise application development.",
    extendedSummary:
      'Experienced in building scalable applications using Spring Boot, Next.js, React, TypeScript, MongoDB, FastAPI, Docker, and modern software engineering practices. Strong interest in Software Engineering, Full Stack Development, Backend Development, and building reliable, user-focused technology solutions.',
    location: 'Sri Lanka',
    email: 'sathurjanv.dev@gmail.com',
    github: 'https://github.com/Sathurjanv23',
    linkedin: 'https://www.linkedin.com/in/vijithakumarasena-sathurjan/',
    phone: '+94 752650480',
    cvUrl: '/cv.pdf',
    education: {
      degree: 'BSc (Hons) in Information Technology',
      institution: 'University of Moratuwa',
      period: '2024 – Present',
      location: 'Sri Lanka',
      focusAreas: [
        'Software Engineering',
        'Full Stack Development',
        'Database Systems',
        'Artificial Intelligence',
      ],
      coursework: [
        'Data Structures and Algorithms',
        'Database Systems',
        'Computer Networks',
        'Software Engineering',
        'Statistical Inference',
        'Computer Graphics',
      ],
      note: 'Developing real-world software systems using modern full-stack technologies and software engineering practices.',
    },
    spokenLanguages: [
      { language: 'Tamil', level: 'Native' },
      { language: 'English', level: 'Professional' },
      { language: 'Sinhala', level: 'Basic' },
    ],
  },

  technologies: [
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Redis', category: 'Cache' },
    { name: 'AWS S3', category: 'Cloud' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'MySQL', category: 'Database' },
  ],

  capabilities: [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      summary:
        'Next.js, React and TypeScript frontends integrated with reliable backends and databases.',
      highlights: [
        'Responsive & accessible interfaces with Tailwind CSS and Next.js',
        'Type-safe end-to-end client-server API integration',
        'Component architecture and asynchronous data workflows',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
      linkTarget: '#projects',
    },
    {
      id: 'backend',
      title: 'Backend & API Engineering',
      summary:
        'Spring Boot, FastAPI, REST APIs, secure authentication, role-based authorization and database modeling.',
      highlights: [
        'JWT & Spring Security multi-role authorization (RBAC)',
        'Relational & Document DB design (MySQL, MongoDB, Redis)',
        'Modular RESTful microservices and WebSocket communications',
      ],
      technologies: ['Spring Boot', 'FastAPI', 'JWT', 'MongoDB', 'Redis', 'REST APIs'],
      linkTarget: '#projects',
    },
    {
      id: 'ai-solutions',
      title: 'AI-Powered Applications',
      summary:
        'Practical Python/ML tools, data-driven dashboards and AI-enhanced product workflows.',
      highlights: [
        'Student performance analytics & early academic risk prediction',
        'Applied machine learning pipelines with Scikit-learn, Pandas, NumPy',
        'RAG architecture, Ollama local inference & OCR integrations',
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Ollama', 'FastAPI'],
      linkTarget: '#projects',
    },
  ] as Capability[],

  projects: [
    {
      id: 'crms',
      title: 'CRMS',
      subtitle: 'Change Request Management System',
      period: '2025 – 2026',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      category: 'Enterprise Full-Stack',
      context: 'Cognitx Company / University Software Engineering Project (Sri Lanka)',
      role: 'Full-Stack Software Engineer',
      githubUrl: 'https://github.com/Sathurjanv23/VisionForge-UOM23',
      description:
        'A full-stack enterprise application for managing software project change requests, requirements, tasks, and role-based approvals.',
      longDescription: [
        'Developed as part of a formal University of Moratuwa software engineering project in collaboration with Cognitx Company.',
        'Engineered enterprise-oriented workflows specifically tailored for Client, Company, and Admin users with JWT-based authentication and granular Role-Based Access Control (RBAC).',
        'Built comprehensive PRD management, an interactive Kanban board for agile task tracking, and structured project workflow functionality.',
        'Integrated MongoDB for persistent, scalable data storage and established secure RESTful API communication between the Next.js/React frontend and Spring Boot backend.',
      ],
      keyFeatures: [
        'Multi-role access control (Client, Company, and Admin workflows)',
        'JWT-based secure authentication and session validation',
        'Automated PRD (Product Requirement Document) management',
        'Interactive Kanban board with sprint & task tracking',
        'Persistent MongoDB storage with optimized document schemas',
      ],
      architecture: [
        'Spring Boot backend providing REST APIs & security filters',
        'Next.js & React frontend with responsive TypeScript components',
        'MongoDB document store with audit trail and change logging',
        'JWT token authentication guarding all administrative routes',
      ],
      technologies: [
        'Spring Boot',
        'Next.js',
        'React',
        'TypeScript',
        'MongoDB',
        'JWT',
        'REST APIs',
        'Tailwind CSS',
      ],
    },
    {
      id: 'medassist',
      title: 'MedAssist AI X',
      subtitle: 'AI-Powered Healthcare Operating System',
      period: '2025 – 2026',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      category: 'Healthcare & Systems',
      context: 'Independent Engineering Project',
      role: 'Backend & Systems Architect',
      githubUrl: 'https://github.com/Sathurjanv23/MedAssist-AI-X',
      description:
        'A multi-portal healthcare platform orchestrating Patient, Doctor, and Admin workflows with real-time communications and cloud storage.',
      longDescription: [
        'Architected to eliminate fragmented clinical scheduling, medical documentation, and real-time appointment updates across dedicated portals for Patients, Doctors, and Admins.',
        'Implemented rigorous secure authentication and authorization using JWT and Spring Security.',
        'Integrated Redis for low-latency session caching, WebSocket channels for live event notifications, AWS S3 for secure clinical asset storage, and Docker for scalable containerization.',
        'Designed modular backend microservices using Spring Boot combined with a modern web interface built on Next.js.',
      ],
      keyFeatures: [
        'Multi-portal architecture for Patient, Doctor, and Hospital Admin roles',
        'Secure authentication and authorization using JWT and Spring Security',
        'Live real-time messaging and status updates via WebSockets',
        'High-performance Redis caching layer for rapid data access',
        'AWS S3 integration for encrypted medical records & document uploads',
        'Containerized multi-service deployment with Docker',
      ],
      architecture: [
        'Modular Spring Boot backend services with REST APIs',
        'Next.js interface with real-time WebSocket client',
        'Redis in-memory caching and doctor queue management',
        'AWS S3 bucket storage with secure signed URLs',
        'Docker container orchestration for scalable deployments',
      ],
      technologies: [
        'Spring Boot',
        'Next.js',
        'JWT',
        'Spring Security',
        'Redis',
        'WebSocket',
        'AWS S3',
        'Docker',
        'REST APIs',
      ],
    },
    {
      id: 'edusmart',
      title: 'EduSmart AI',
      subtitle: 'Student Performance Analytics Platform',
      period: '2025 – 2026',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      category: 'AI & Academic Analytics',
      context: 'Academic Research & Applied AI Project',
      role: 'AI / Backend Engineer',
      githubUrl: 'https://github.com/Sathurjanv23/School-Management-System',
      description:
        'A full-stack platform for student performance analytics and academic risk prediction, featuring data-driven dashboards and backend APIs.',
      longDescription: [
        'Engineered to identify at-risk students proactively through statistical inference and predictive analytics models before semester evaluations.',
        'Integrated FastAPI, Spring Boot, Next.js, MongoDB, and Docker into a cohesive modular application architecture.',
        'Implemented data-driven dashboards and backend APIs to support intuitive faculty academic analytics workflows.',
        'Established automated development and deployment workflows powered by GitHub Actions CI/CD pipelines.',
      ],
      keyFeatures: [
        'Early academic risk prediction models using Scikit-learn',
        'Interactive data-driven dashboards for faculty performance tracking',
        'Dual-service backend: FastAPI for ML inference, Spring Boot for records',
        'Automated CI/CD build, test, and release via GitHub Actions',
        'MongoDB persistent database storing student historical evaluations',
      ],
      architecture: [
        'FastAPI Python microservice serving risk prediction models',
        'Spring Boot service managing core student records and metrics',
        'Next.js analytics dashboard with dynamic visual metrics',
        'Dockerized services with automated GitHub Actions CI/CD',
      ],
      technologies: [
        'FastAPI',
        'Spring Boot',
        'Next.js',
        'Python',
        'MongoDB',
        'Docker',
        'GitHub Actions',
        'Scikit-learn',
      ],
    },
  ] as Project[],

  highlights: [
    {
      id: 'highlight-1',
      title: 'Enterprise Workflows',
      tagline: 'Multi-Role Lifecycle & Kanban',
      statement:
        'Built multi-role change-request workflows with PRD management, Kanban tracking, and role-based access control in CRMS.',
      details:
        'Designed enterprise-oriented flows for Client, Company, and Admin users with JWT authentication, RESTful Spring Boot services, and MongoDB.',
      iconName: 'Workflow',
    },
    {
      id: 'highlight-2',
      title: 'Secure & Connected Systems',
      tagline: 'Microservices & Real-Time Data',
      statement:
        'Worked with JWT, Spring Security, REST APIs, WebSockets, Redis, and containerized application infrastructure.',
      details:
        'Engineered distributed healthcare portals and analytics platforms with Docker containers, Redis caching, and AWS S3 cloud storage.',
      iconName: 'ShieldCheck',
    },
  ] as Highlight[],

  skills: [
    {
      category: 'Programming Languages',
      description: 'Core languages for systems, logic, and scripting',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C', 'C++'],
    },
    {
      category: 'Frontend',
      description: 'Modern component-driven web interfaces',
      skills: ['Next.js', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      description: 'Robust server frameworks and RESTful architectures',
      skills: ['Spring Boot', 'Java', 'FastAPI', 'Node.js', 'REST APIs'],
    },
    {
      category: 'Database',
      description: 'Document, relational, and in-memory data stores',
      skills: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'Redis'],
    },
    {
      category: 'Security',
      description: 'Application hardening and authorization controls',
      skills: [
        'JWT',
        'Spring Security',
        'Role-Based Access Control',
        'API Authorization',
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      description: 'Cloud storage and container environments',
      skills: ['AWS S3', 'Docker', 'Docker Compose'],
    },
    {
      category: 'DevOps & Real-Time',
      description: 'Automation pipelines and live communication',
      skills: ['GitHub Actions', 'CI/CD', 'WebSocket', 'REST APIs'],
    },
    {
      category: 'AI / ML & Tools',
      description: 'Applied machine learning and development toolchain',
      skills: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Ollama',
        'RAG',
        'OCR',
        'Git',
        'GitHub',
        'Postman',
        'Figma',
        'VS Code',
        'IntelliJ IDEA',
      ],
    },
  ] as SkillCategory[],

  achievements: [
    {
      title: 'Top Performer at CryptX 2.0',
      organization: 'University of Sri Jayewardenepura',
      year: '2026',
      badge: 'Top 20 Participant',
      type: 'competition',
      description: 'Ranked in the Top 20 participants in competitive algorithmic and cybersecurity challenges.',
    },
    {
      title: 'Innovate with Ballerina Coding Challenge',
      organization: 'WSO2',
      year: '2026',
      badge: 'Coding Challenge',
      type: 'competition',
      description: 'Engineered cloud-native integration solutions using the Ballerina programming language.',
    },
    {
      title: 'CodeRally 7.0',
      organization: 'HackerRank',
      year: '2025',
      badge: 'Finalist',
      type: 'competition',
      description: 'Finalist standing in competitive algorithmic programming and problem-solving.',
    },
    {
      title: 'JPura Xtreme 3.0',
      organization: 'HackerRank',
      year: '2025',
      badge: 'Finalist',
      type: 'competition',
      description: 'Finalist standing in university-level algorithmic programming marathon.',
    },
  ] as AchievementItem[],

  certifications: [
    {
      title: 'Postman API Fundamentals Student Expert',
      organization: 'Postman',
      year: '2025',
      badge: 'Student Expert',
      type: 'certification',
      description: 'Demonstrated proficiency in REST APIs, automated request testing, and Postman collections.',
    },
    {
      title: 'Go Programming (Intermediate)',
      organization: 'HackerRank',
      year: '2025',
      badge: 'Intermediate Certified',
      type: 'certification',
      description: 'Validated skills in concurrent Go routines, error handling, channels, and data structures.',
    },
    {
      title: 'Java Programming (Basic)',
      organization: 'HackerRank',
      year: '2025',
      badge: 'Basic Certified',
      type: 'certification',
      description: 'Validated skills in core Java, object-oriented principles, control flow, and data collections.',
    },
    {
      title: 'Intermediate SQL',
      organization: 'DataCamp',
      badge: 'Course Certified',
      type: 'certification',
      description: 'Mastered complex joins, aggregate filters, subqueries, and database query optimizations.',
    },
    {
      title: 'Front-End Web Development',
      organization: 'University of Moratuwa',
      badge: 'University Certified',
      type: 'certification',
      description: 'Certified in semantic HTML5, modern CSS3 layouts, JavaScript, and responsive UX design.',
    },
  ] as AchievementItem[],
};
