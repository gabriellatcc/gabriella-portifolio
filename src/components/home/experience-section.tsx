import { Timeline } from "@/components/aceternity-ui/timeline";
import { Badge } from "@/components/spell-ui/badge";
import { portfolioData } from "@/lib/site-content";
import { FaBriefcase } from "react-icons/fa";

export function ExperienceSection() {
    const data = portfolioData.experiences.map((exp) => ({
        title: exp.period,
        content: (
        <div>
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="mb-3 text-sm text-muted-foreground">
            {exp.company} · {exp.location}
            </p>

            <ul className="mb-3 list-disc space-y-1 pl-5 text-sm">
            {exp.responsibilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            {exp.technologies && (
            <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                <Badge
                key={tech}
                variant="secondary"
                className="bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:text-emerald-400 border-emerald-500/20"
                >
                {tech}
                </Badge>
            ))}
            </div>
            )}
        </div>
        ),
    }));

    return (
        <section id="experience">
        <div className="border-b border-foreground/20 pb-3">
            <div className="flex items-center gap-3">
            <FaBriefcase className="size-10 shrink-0 text-chart-2" />
            <h2 className="text-3xl font-bold tracking-tight"> Work Experience</h2>
            </div>
            <p className="text-muted-foreground">
                Practical industry software engineering and technical support experience.
            </p>
        </div>
        <Timeline data={data} />
        </section>
    );
}