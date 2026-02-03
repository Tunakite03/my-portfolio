# ✨ Modern Portfolio Template

> A sleek, responsive portfolio website built with **Astro**, **React**, and **Tailwind CSS**, featuring modern animations and stunning glassmorphism effects.

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
- [CI/CD & Code Quality](#-cicd--code-quality)
- [Customization](#-customizing-the-portfolio)
- [Build & Deploy](#-build-for-production)
- [Tech Stack](#-tech-stack)
- [License](#-license)

## ✨ Features

- 🎨 **Modern Design** – Clean, professional layout with elegant glassmorphism
- ⚡ **Smooth Animations** – Interactive UI powered by Framer Motion
- 🌓 **Dark/Light Mode** – Automatic theme switching with system preference detection
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop
- 🚀 **Blazing Fast** – Powered by Astro for superior performance
- 🧩 **Modular Structure** – Built for easy customization and scalability
- 🔍 **SEO Friendly** – Structured content and meta tags for better visibility
- ♿ **Accessible** – WCAG compliant with proper ARIA labels
- 🔧 **CI/CD Ready** – GitHub Actions workflow with automated testing & deployment
- ✅ **Pre-commit Hooks** – Automatic code formatting and linting before commit
- 📝 **Code Quality** – ESLint + Prettier configured and ready to use

## 🚀 Demo

👉 **[Live Demo](https://tunakite-portfolio.netlify.app/)**

## 🛠 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** / **yarn** / **pnpm** / **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tunakite03/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Visit `http://localhost:4321` to see your portfolio in action! 🎉

## 🔧 CI/CD & Code Quality

This template comes with a complete CI/CD pipeline and code quality tools pre-configured.

### ✨ What's Included

- 🔄 **GitHub Actions** – Automated CI/CD pipeline
- 🪝 **Pre-commit Hooks** – Code quality checks before every commit
- 🎨 **Prettier** – Automatic code formatting
- ✅ **ESLint** – Code linting for TypeScript, React, and Astro
- 🚀 **Auto-deploy** – Automatic deployment to Netlify on push

### 🚀 Quick Start

After installation, the pre-commit hooks are automatically set up. Every time you commit:

```bash
git commit -m "your message"
```

The following will run automatically:

1. ✅ ESLint fixes issues
2. 🎨 Prettier formats your code
3. 🚫 Blocks commit if there are unfixable errors

### 📝 Available Scripts

```bash
# Code quality
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
npm run lint         # Lint code with ESLint
npm run lint:fix     # Fix linting issues automatically
npm run type-check   # Check TypeScript types

# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### 🔄 GitHub Actions Workflow

The CI/CD pipeline runs on every push and pull request:

**Quality Stage:**

- Type checking (Astro Check)
- Prettier format validation
- ESLint validation

**Build Stage:**

- Production build
- Upload artifacts

**Deploy Stage** (main/master branch only):

- Automatic deployment to Netlify
- Preview deployment for PRs

### ⚙️ Setup Netlify Deployment

1. Add these secrets in **GitHub Repository Settings → Secrets**:
   - `NETLIFY_AUTH_TOKEN` – From Netlify User Settings → Applications
   - `NETLIFY_SITE_ID` – From Site Settings → Site details

2. Push to `main` branch – deployment happens automatically! 🎉

For detailed setup instructions, see [CI-CD-SETUP.md](CI-CD-SETUP.md).

## 🎨 Customizing the Portfolio

All your content lives inside [`src/lib/data.ts`](src/lib/data.ts). Update the following sections to make it yours:

### 1. 👤 Personal Information

```typescript
export const personalInfo = {
   name: 'Your Name',
   location: 'Your City, Country',
   email: 'your.email@example.com',
   github: 'https://github.com/yourusername',
   linkedin: 'https://www.linkedin.com/in/yourusername/',
};
```

### 2. 💼 Work Experience

```typescript
export const workExperience = [
   {
      company: 'Company Name',
      location: 'City, Country',
      position: 'Your Position',
      period: 'Jan 2023 - Present',
      achievements: [
         'Achievement or responsibility 1',
         'Achievement or responsibility 2',
         'Achievement or responsibility 3',
      ],
   },
   // Add more experiences...
];
```

### 3. 🎓 Education

```typescript
export const education = [
   {
      institution: 'University Name',
      location: 'City, Country',
      degree: 'Bachelor of Science in Computer Science',
      period: '2019 - 2023',
      achievements: ['GPA: 3.8/4.0', "Dean's List", 'Relevant coursework or honors'],
   },
   // Add more education entries...
];
```

### 4. 🛠️ Skills

```typescript
export const skills = {
   programmingLanguages: ['TypeScript', 'Python', 'JavaScript', 'Java'],
   frontendDevelopment: ['React', 'Next.js', 'Vue.js', 'Astro'],
   backendDevelopment: ['Node.js', 'Express', 'Django', 'FastAPI'],
   databasesSystems: ['PostgreSQL', 'MongoDB', 'Redis'],
   devOpsCloud: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions'],
   toolsOther: ['Git', 'Figma', 'Postman'],
};
```

### 5. 🚀 Projects

```typescript
export const projects = [
   {
      title: 'Project Name',
      github: 'https://github.com/yourusername/project',
      live: 'https://project-demo.com', // optional
      description: [
         'Brief description of what the project does',
         'Key technologies: React, TypeScript, Tailwind CSS',
         'Notable features or achievements',
      ],
   },
   // Add more projects...
];
```

### 6. 🏆 Awards & Achievements

```typescript
export const awards = [
   {
      name: 'Award or Competition Name',
      issuer: 'Issuing Organization',
      date: 'Month Year',
      type: 'Hackathon / Competition / Certification',
      position: '1st Place / Winner / Recipient',
   },
   // Add more awards...
];
```

---

### 🎨 Styling & Theme

- **Colors**: Edit theme colors in [`src/styles/global.css`](src/styles/global.css)
- **Components**: Customize UI components in [`src/components/`](src/components/)
- **Layout**: Modify the main layout in [`src/layouts/Layout.astro`](src/layouts/Layout.astro)

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build
```

This generates a production-ready build in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🚀 Deployment

This portfolio can be deployed to any static hosting platform:

### Recommended Platforms

| Platform             | Deployment Guide                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Vercel**           | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)                     |
| **Netlify**          | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start) |
| **GitHub Pages**     | [Astro Docs - GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)                       |
| **Cloudflare Pages** | [Astro Docs - Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)                     |

### Quick Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 🛠 Tech Stack

<div align="center">

| Category      | Technologies                                                                                                                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework** | ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)                                                                                                                   |
| **Frontend**  | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| **Styling**   | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)                                                                                              |
| **Animation** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)                                                                                                  |
| **Icons**     | ![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white)                                                                                                                |

</div>

### Key Dependencies

- **[@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)** - React integration for Astro
- **[framer-motion](https://www.framer.com/motion/)** - Animation library
- **[tailwindcss](https://tailwindcss.com/)** - Utility-first CSS framework
- **[lucide-react](https://lucide.dev/)** - Beautiful & consistent icons
- **[class-variance-authority](https://cva.style/)** - CSS-in-TS variants

### Dev Tools & CI/CD

- **[husky](https://typicode.github.io/husky/)** - Git hooks made easy
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files
- **[prettier](https://prettier.io/)** - Code formatter
- **[eslint](https://eslint.org/)** - JavaScript/TypeScript linter
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

## � Project Structure

```
my-portfolio-template/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD pipeline
├── .husky/
│   └── pre-commit          # Pre-commit hook script
├── public/                 # Static assets
├── src/
│   ├── components/         # React & Astro components
│   │   ├── ui/            # Reusable UI components
│   │   ├── HeroSection.astro
│   │   ├── ExperienceSection.astro
│   │   ├── ProjectsSection.astro
│   │   └── ...
│   ├── layouts/           # Astro layouts
│   │   └── Layout.astro
│   ├── lib/               # Utilities & data
│   │   ├── data.ts        # 📝 Your content here!
│   │   └── utils.ts
│   ├── pages/             # Astro pages
│   │   └── index.astro
│   └── styles/            # Global styles
│       └── global.css
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
├── CI-CD-SETUP.md         # Detailed CI/CD setup guide
└── package.json
```

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## ©️ Copyright

© 2025 **TunaKite03** All rights reserved.

You’re welcome to use this template for your own portfolio — just update `data.ts` and tweak the design as needed. Please keep attribution to the original author.

---

## 🌟 Like it?

If you found this helpful or inspiring, **please consider leaving a star** ⭐ on the repo — it helps others discover it too!

---

## 🙏 Acknowledgments

- **[Astro](https://astro.build/)** - The web framework for content-driven websites
- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide Icons](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI

---

<div align="center">

**Made with ❤️ using Astro + React + Tailwind CSS**

**[⬆ Back to Top](#-modern-portfolio-template)**

</div>
