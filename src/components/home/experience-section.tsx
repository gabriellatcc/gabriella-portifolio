import { Timeline } from "@/components/aceternity-ui/timeline";
import { Badge } from "@/components/spell-ui/badge";
import { portfolioData } from "@/lib/site-content";
import { IconBriefcase } from "@tabler/icons-react";
export function ExperienceSection() {
    const data = portfolioData.experiences.map((exp) => ({
        title: exp.period,
        content: (
        <div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                {exp.period}
            </span>
            </div>

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
                    variant="green"
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
            <IconBriefcase className="size-10 shrink-0 text-chart-2" />
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            </div>
            <p className="text-muted-foreground">
            Practical industry software engineering and technical support experience.
            </p>
        </div>
        <Timeline data={data} />
        </section>
    );
}