import { Badge } from "@/components/spell-ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import { portfolioData } from "@/lib/site-content";
import { IconFolder } from "@tabler/icons-react";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <Tabs defaultValue={projects[0].id}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b-1 border-foreground/20 pb-3">
          <div className="space">
            <div className="flex items-center gap-3">
              <IconFolder className="size-10 shrink-0 text-chart-1" />
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
            </div>
            <p className="text-muted-foreground">
              Full-stack web applications, REST APIs, and integrated architectures.
            </p>
          </div>
          <TabsList className="h-auto w-full justify-start overflow-x-auto">
            {projects.map((p) => (
              <TabsTrigger key={p.id} value={p.id} className="transition-all duration-300">
                {p.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {projects.map((p) => (
          <TabsContent key={p.id} value={p.id} className="space-y-4">
            <div>
              <Badge variant="purple">{p.badge}</Badge>
              <h3 className="mt-2 text-2xl font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground">
                {p.subtitle} · {p.period}
              </p>
            </div>

            <p>{p.description}</p>

            <ul className="list-disc space-y-1 pl-5">
              {p.fullDetails.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <Badge key={t} variant="blue">{t}</Badge>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}