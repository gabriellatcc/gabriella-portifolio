import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TbBrandLaravel } from "react-icons/tb";
import type { IconType } from "react-icons";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { SiTanstack, SiTailwindcss, SiVite, SiSwagger, SiPhp, SiDocker, SiHtml5 } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavaLine, RiNextjsFill, RiReactjsLine } from "react-icons/ri";

import { TbBrandMysql } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";

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
        { name: "PHP", category: "backend", icon: SiPhp, color: "text-indigo-400 bg-indigo-400/15" },
        { name: "Laravel", category: "backend", icon: TbBrandLaravel, color: "text-red-400 bg-red-400/15" },
        { name: "Java", category: "backend", icon: RiJavaLine, color: "text-orange-400 bg-orange-400/15" },
        { name: "TypeScript", category: "frontend", icon: BiLogoTypescript, color: "text-blue-400 bg-blue-400/15" },
        { name: "React", category: "frontend", icon: RiReactjsLine, color: "text-cyan-400 bg-cyan-400/15" },
        { name: "Next.js", category: "frontend", icon: RiNextjsFill, color: "text-slate-200 bg-slate-200/15" },
        { name: "JavaScript", category: "frontend", icon: BiLogoJavascript, color: "text-yellow-400 bg-yellow-400/15" },
        { name: "MySQL", category: "backend", icon: TbBrandMysql, color: "text-blue-500 bg-blue-500/15" },
        { name: "PostgreSQL", category: "backend", icon: BiLogoPostgresql, color: "text-cyan-500 bg-cyan-500/15" },
        { name: "Docker", category: "tools", icon: SiDocker, color: "text-sky-400 bg-sky-400/15" },
        { name: "Linux", category: "tools", icon: FcLinux, color: "text-emerald-400 bg-emerald-400/15" },
        { name: "Git", category: "tools", icon: FaGitAlt, color: "text-orange-500 bg-orange-500/15" },
        { name: "TanStack (Router/Query)", category: "frontend", icon: SiTanstack, color: "text-amber-400 bg-amber-400/15" },
        { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "text-teal-400 bg-teal-400/15" },
        { name: "HTML", category: "frontend", icon: SiHtml5, color: "text-orange-600 bg-orange-600/15" },
        { name: "Vite", category: "frontend", icon: SiVite, color: "text-purple-400 bg-purple-400/15" },
        { name: "OpenAPI / Swagger", category: "tools", icon: SiSwagger, color: "text-emerald-300 bg-emerald-300/15" },
        { name: "Visual Studio Code", category: "tools", icon: DiVisualstudio, color: "text-blue-400 bg-blue-400/15" },
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
            role: "Freelance Web Developer & Technical Support",
            company: "Doctive",
            period: "Mar 2026 – Present",
            location: "Remote",
            responsibilities: [
                "Provide end-to-end technical support and operational guidance to the business owner, troubleshooting daily platform workflows, payment methods, and NF-e (Webmania) tax emission issues.",
                "Manage account recovery, credential restructuring, and Two-Factor Authentication (2FA) across critical platforms (Hostinger, Microsoft, WordPress, Correios, Instagram).",
                "Configure transactional email infrastructure (SMTP) and audit DNS records (SPF, DKIM, DMARC) to resolve email deliverability issues.",
                "Develop custom PHP/JS scripts and third-party API integrations to extend WooCommerce functionality, resolving checkout, caching (WP Rocket), and theme layout inconsistencies.",
                "Perform scheduled backups, log audits, and compatibility-tested updates for WordPress core, themes, and plugins, documenting all interventions for full traceability.",
            ],
            technologies: ["PHP", "WordPress", "WooCommerce", "DNS / SMTP", "REST APIs", "Technical Support"],
        },
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