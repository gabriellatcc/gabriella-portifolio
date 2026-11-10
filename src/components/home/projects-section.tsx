import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import { portfolioData } from "@/lib/site-content";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>

      <Tabs defaultValue={projects[0].id}>
        <TabsList className="h-auto w-full justify-start overflow-x-auto">
          {projects.map((p) => (
            <TabsTrigger key={p.id} value={p.id}>
              {p.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {projects.map((p) => (
          <TabsContent key={p.id} value={p.id} className="space-y-4">
            <div>
              <Badge>{p.badge}</Badge>
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
                <Badge key={t} variant="outline">{t}</Badge>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}