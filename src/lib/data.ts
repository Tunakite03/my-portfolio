export const personalInfo = {
   name: 'Tunn',
   location: 'Vietnam',
   email: 'kietpro210603@gmail.com',
   github: 'https://github.com/tunakite03',
   linkedin: 'https://linkedin.com/in/tunn',
   profilePicture: '/profile.jpg',
   heroDescription:
      'Frontend-focused Software Engineer specializing in ReactJS and TypeScript. Experienced in building scalable, maintainable user interfaces with modern tools and frameworks. Strong backend knowledge with NodeJS and database expertise using Prisma ORM. Passionate about creating full-stack solutions with clean architecture and optimal performance.',
};

export const workExperience = [
   {
      company: 'Seedlint',
      location: 'Vietnam',
      position: 'Fresher - Game 2D & FullStack Developer',
      period: 'Jun 2024 – Apr 2025',
      achievements: [
         'Developed and deployed 2D web-based game projects using the Construct engine.',
         "Designed gameplay flows and implemented core game mechanics utilizing Construct's event-based programming model.",
         'Collaborated with cross-functional teams to brainstorm game concepts, define feature sets, and contribute to Game Design Documents (GDD).',
         'Integrated visual assets (sprites, backgrounds, UI elements) and enhanced visual engagement through Spine animations.',
         'Iterated on post-release improvements based on user feedback to enhance playability and user retention.',
         'Built and maintained interactive, responsive web applications using HTML, CSS, JavaScript, and modern frameworks (React.js, Next.js).',
         'Engineered RESTful APIs for data interaction, authentication, and CRUD operations using Express.js and NestJS.',
         'Managed and manipulated PostgreSQL databases to ensure efficient data storage and retrieval.',
         'Seamlessly integrated frontend interfaces with backend services to deliver end-to-end product features.',
      ],
   },
   {
      company: 'Vinateks',
      location: 'Vietnam',
      position: 'Intern - Frontend Developer',
      period: 'Aug 2023 – Jan 2024',
      achievements: [
         'Contributed to the research and planning phases of small-scale software projects.',
         'Developed new UI features and resolved technical bugs in existing production applications.',
         'Partnered with Senior Developers to optimize system performance and maintain high-quality, scalable code.',
         'Gained hands-on experience with professional software development workflows, version control, and industry-standard tools.',
      ],
   },
];

export const education = [
   {
      institution: 'University of Information Technology',
      location: 'Vietnam',
      degree: "Information Technology Bachelor's Degree",
      period: '2021 - 2025',
      achievements: [
         'Built a solid foundation in programming and computer science fundamentals.',
         'Focused career path on web and software development.',
         'Continuously expanded skills through additional courses, diplomas, and specialized training programs.',
         'Actively practiced self-learning to stay up to date with new technologies and modern approaches in software development.',
      ],
   },
];
export const skills = {
   programmingLanguages: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
   frontendDevelopment: ['ReactJS', 'TailwindCSS', 'Redux', 'TanStack Query', 'Zustand', 'Next.js', 'Vite'],
   backendDevelopment: ['NodeJS', 'ExpressJS', 'NestJS'],
   databaseAndStorage: ['MySQL', 'PostgreSQL', 'Prisma ORM'],
   cloudAndDevOps: ['Git', 'Docker', 'CI/CD'],
   toolsAndServices: ['RESTful APIs', 'Webpack', 'ESLint', 'Prettier', 'Jest', 'React Testing Library'],
};

export const projects = [
   {
      title: 'Social Media Platform',
      github: 'https://github.com/Tunakite03/SocialMedia_FE',
      description: [
         'Full-stack social media application built with ReactJS, TypeScript, and NodeJS.',
         'Implemented product catalog, shopping cart, and checkout flow with Redux for state management.',
         'Designed and built RESTful API using ExpressJS with PostgreSQL and Prisma ORM.',
         'Integrated payment processing and order management systems.',
         'Styled with TailwindCSS for responsive, modern UI design.',
      ],
   },
   {
      title: 'Optimized Images Tool',
      github: 'https://github.com/Tunakite03/Optisnap',
      description: [
         'Web application for image optimization and compression using ReactJS and Tauri.',
         'Implemented drag-and-drop file upload and real-time image preview features.',
         'Utilized client-side libraries to perform image compression and format conversion.',
         'Provided options for users to customize compression settings and download optimized images.',
         'Styled with TailwindCSS for a clean, user-friendly interface.',
      ],
   },
   {
      title: 'Portfolio Template',
      github: 'https://github.com/tunn/portfolio-template',
      description: [
         'Modern portfolio website built with Astro, ReactJS, and TailwindCSS.',
         'Responsive design with smooth animations and dark mode support.',
         'Component-based architecture for easy customization and maintenance.',
         'Optimized for performance with static site generation.',
      ],
   },
];

export const awards = [
   {
      name: 'Dean’s List',
      issuer: 'University of Information Technology',
      date: 'Dec 2023',
      position: 'Top 5%',
      type: 'Academic',
   },
];
