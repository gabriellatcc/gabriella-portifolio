import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faPhp,
    faLaravel,
    faJava,
    faReact,
    faJs,
    faDocker,
    faLinux,
    faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faN,
    faDatabase,
    faServer,
    faNetworkWired,
    faRoute,
    faWind,
    faBolt,
    faFileContract,
    faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import type { IconType } from "react-icons"; // <-- Adicione esse import
import { DiVisualstudio } from "react-icons/di";

export interface Skill {
    name: string;
    category: "backend" | "frontend" | "tools";
    icon: IconDefinition | IconType;
    color: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
    fullDetails: string[];
    tools: string[];
    techStack: string[];
    badge: string;
}

export interface WorkExperience {
    role: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
    technologies?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    gpa: string;
    relevantCoursework: string[];
}

export interface Language {
    name: string;
    level: string;
    percentage: number;
}

export interface DeveloperProfile {
    title: string;
    tagline: string;
    availability: string;
    bio: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    terminalOverview: {
        status: string;
        coreStack: string[];
        devops: string[];
        education: string;
        gpa: string;
    };
    skills: Skill[];
    projects: Project[];
    experiences: WorkExperience[];
    education: Education;
    languages: Language[];
}

export const portfolioData: DeveloperProfile = {
    title: "Full-Stack Software Developer & Systems Analysis Student",
    tagline: "Gabriella Tavares | Full-Stack Developer",
    availability: "Available for Full-Stack Opportunities",
    bio: "Specialized in building robust RESTful APIs and modern responsive web interfaces. Experienced with modern stacks such as Laravel (PHP 8.3), React / Next.js, TypeScript, and containerized deployments with Docker.",
    location: "Cruzeiro/SP - Brazil",
    email: "gabriellatccorrea@gmail.com",
    linkedin: "https://linkedin.com/in/gabriellatccorrea",
    github: "https://github.com/gabriellatccorrea",
    terminalOverview: {
        status: "Building clean, scalable backend & frontend systems",
        coreStack: ["PHP/Laravel", "React", "TypeScript", "MySQL"],
        devops: ["Docker", "Linux Mint", "Git"],
        education: "FATEC Systems Analysis & Dev (2024-2026)",
        gpa: "8.21 / 10",
    },
    skills: [
        { name: "PHP", category: "backend", icon: faPhp, color: "text-indigo-400" },
        { name: "Laravel", category: "backend", icon: faLaravel, color: "text-red-400" },
        { name: "Java", category: "backend", icon: faJava, color: "text-orange-400" },
        { name: "TypeScript", category: "frontend", icon: faCode, color: "text-blue-400" },
        { name: "React", category: "frontend", icon: faReact, color: "text-cyan-400" },
        { name: "Next.js", category: "frontend", icon: faN, color: "text-slate-200" },
        { name: "JavaScript", category: "frontend", icon: faJs, color: "text-yellow-400" },
        { name: "MySQL", category: "backend", icon: faDatabase, color: "text-blue-500" },
        { name: "PostgreSQL", category: "backend", icon: faServer, color: "text-cyan-500" },
        { name: "Docker", category: "tools", icon: faDocker, color: "text-sky-400" },
        { name: "Linux (Mint)", category: "tools", icon: faLinux, color: "text-emerald-400" },
        { name: "Git", category: "tools", icon: faGitAlt, color: "text-orange-500" },
        { name: "TanStack Query", category: "frontend", icon: faNetworkWired, color: "text-rose-400" },
        { name: "TanStack Router", category: "frontend", icon: faRoute, color: "text-amber-400" },
        { name: "Tailwind CSS", category: "frontend", icon: faWind, color: "text-teal-400" },
        { name: "Vite", category: "frontend", icon: faBolt, color: "text-purple-400" },
        { name: "OpenAPI / Swagger", category: "tools", icon: faFileContract, color: "text-emerald-300" },
        { name: "Visual Studio Code", category: "tools", icon: DiVisualstudio, color: "text-blue-400" },
    ],
    projects: [
    {
        id: "metricnotes",
        title: "MetricNotes",
        subtitle: "Capstone Project (TCC)",
        period: "Aug 2025 – May 2026",
        description: "Full-stack web platform for productivity management and performance metrics designed for independent contractors.",
        fullDetails: [
            "Designed and built a REST API in Laravel (PHP 8.3) with JWT authentication, clear service layers, custom Form Requests, and access authorization policies.",
            "Implemented frontend using React and TypeScript (Vite, TanStack Router and Query, Tailwind, Radix UI, Recharts).",
            "Configured isolated Docker containers for backend (Laravel/PHP) and frontend (React/nginx).",
            "Generated typed HTTP client code automatically via Orval based on OpenAPI specifications.",
        ],
        tools: ["VS Code", "Docker", "Apidog", "Figma", "Git"],
        techStack: ["Laravel", "PHP 8.3", "React", "TypeScript", "JWT", "Tailwind", "Recharts", "Docker"],
        badge: "TCC Capstone",
    },
    {
        id: "casamento",
        title: "Casamento Bruna & Alexandre",
        subtitle: "Wedding & RSVP Platform",
        period: "Jun – Jul 2026",
        description: "Complete custom web application with administrative control for guest management and gift registry.",
        fullDetails: [
        "REST API built with Laravel 11 and MySQL with JWT authentication and role-based authorization.",
        "Interactive guest search, RSVP validation, and gift registry (physical item reservation & symbolic contributions).",
        "Dedicated administrative dashboard detailing guest attendance stats and gift contributions.",
        ],
        tools: ["VS Code", "Apidog", "Docker"],
        techStack: ["Laravel 11", "MySQL", "JWT", "REST API", "Admin Panel"],
        badge: "Full Stack",
    },
    {
        id: "drechsler",
        title: "Drechsler Platform",
        subtitle: "Institutional Platform",
        period: "May – Jun 2026",
        description: "Modern web architecture with Fastify API, Prisma ORM, and automated API contracts via OpenAPI.",
        fullDetails: [
            "Full-stack institutional web solution featuring a TypeScript REST API built with Fastify and Prisma ORM.",
        "PostgreSQL database integration with precise schema migrations.",
        "JWT authentication for admin workflows and complete Swagger/OpenAPI interactive documentation.",
        ],
        tools: ["VS Code", "Swagger", "PostgreSQL"],
        techStack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "React", "OpenAPI"],
        badge: "TypeScript / Node",
    },
    {
        id: "poketeam",
        title: "PokeTeam Up",
        subtitle: "Pokémon Team Manager",
        period: "Nov – Dec 2025",
        description: "Interactive team creation system with PokeAPI integration, drag-and-drop slots, and live state.",
        fullDetails: [
            "Backend REST API written in Laravel (PHP 8.3), MySQL database, Sanctum authentication, and item ownership policies.",
            "Frontend created with Next.js 15, TypeScript, and Tailwind CSS v4.",
            "Features drag-and-drop interface for team slot reordering, Radix primitives for accessibility, and TanStack Query for cache & state management.",
        ],
        tools: ["VS Code", "Figma", "Postman", "Git"],
        techStack: ["Next.js 15", "TypeScript", "Tailwind 4", "Laravel", "PokeAPI", "TanStack Query"],
        badge: "Next.js & API",
        },
    ],
    experiences: [
    {
        role: "Full-Stack Development Intern",
        company: "Next Tecnologia",
        period: "Jan 2026 – Apr 2026",
        location: "Cruzeiro, SP",
        responsibilities: [
            "Developed and refactored RESTful APIs in Laravel for decoupled module architecture, establishing Cron Jobs for automated synchronization.",
            "Designed and implemented responsive client metrics dashboards in React and TypeScript within scheduled delivery timelines.",
            "Applied Git best practices for commits, pipelines, and code reviews; configured Docker containers on Linux environments for seamless deployments.",
        ],
        technologies: ["PHP / Laravel", "React", "TypeScript", "Docker", "Linux"],
    },
    {
        role: "Technical Support Assistant",
        company: "Liliane Tavares FOTOGRAFIA",
        period: "Apr 2019 – Dec 2024",
        location: "Itanhandu, MG",
        responsibilities: [
            "Configured workstation hardware/software infrastructure for event operations under tight deadlines.",
            "Managed service documentation, scheduling, and process traceability using Microsoft Word & Excel.",
            "Gathered public feedback to redesign equipment signage and workflow, significantly reducing operational support tickets.",
        ],
    },
    ],
    education: {
        degree: "Systems Analysis & Development",
        institution: "Fatec Cruzeiro Prof. Waldomiro May",
        period: "Feb 2024 – Dec 2026",
        gpa: "8.21 / 10",
        relevantCoursework: [
        "Databases",
        "Data Structures",
        "Object-Oriented Programming",
        "Software Engineering (I, II & III)",
        "Computer Networks",
        "Information Security",
        "Distributed Systems",
        "Web Programming",
        ],
    },
    languages: [
        { name: "English", level: "Intermediate", percentage: 65 },
        { name: "Spanish", level: "Basic", percentage: 35 },
        { name: "Portuguese", level: "Native", percentage: 100 },
    ],
};