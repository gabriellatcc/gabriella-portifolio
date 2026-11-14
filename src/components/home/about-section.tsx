import { portfolioData } from "@/lib/site-content";
import {
    FaArrowDown,
    FaFileDownload,
} from "react-icons/fa";

export function AboutSection() {
    return (
        <section
            id="about"
            className="grid grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16"
        >
            <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-ring via-chart-1 to-primary bg-clip-text text-transparent">
                        Gabriella
                        <br />
                        Corrêa
                    </span>
                </h1>

                <p className="mb-5 text-lg font-medium text-foreground/90 sm:text-xl">
                    {portfolioData.title}
                </p>

                <p className="mb-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Specialized in building robust RESTful APIs and modern responsive web
                    interfaces. Experienced with modern stacks such as{" "}
                    <span className="font-medium text-chart-2">
                        Laravel (PHP 8.3)
                    </span>
                    ,{" "}
                    <span className="font-medium text-chart-1">
                        React / Next.js
                    </span>
                    ,{" "}
                    <span className="font-medium text-chart-4">
                        TypeScript
                    </span>
                    , and containerized deployments with{" "}
                    <span className="font-semibold text-foreground">Docker</span>.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_color-mix(in_oklch,var(--primary)_35%,transparent)] transition-all hover:bg-primary/90"
                    >
                        View Projects
                        <FaArrowDown className="text-xs" />
                    </a>

                    <a
                        href="#experience"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-card"
                    >
                        <FaFileDownload className="text-ring" />
                        Resume Info
                    </a>
                </div>
            </div>

            {/* Terminal Card */}
            <div>
                terminal
            </div>
        </section>
    );
}