import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { portfolioData } from "@/lib/site-content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLayerGroup } from "react-icons/fa";

const categories = [
  { value: "all", label: "All" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "tools", label: "Tools" },
] as const;

export function SkillsSection() {
  const iconBoxClasses = `h-8 w-8 rounded border border-border p-1`;

  return (
    <section id="skills" className="py-20">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <FaLayerGroup className="size-10 shrink-0 text-chart-1" />
              <h2 className="text-3xl font-bold tracking-tight">
                Technical Stack & Skills
              </h2>
            </div>
            <p className="text-muted-foreground">
              Technologies, frameworks, databases, and tooling used in projects.
            </p>
          </div>

          <TabsList className="w-fit">
            {categories.map((c) => (
              <TabsTrigger
                key={c.value}
                value={c.value}
                className="transition-all duration-300"
              >
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((c) => (
          <TabsContent
            key={c.value}
            value={c.value}
            className="mt-6 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-2 data-[state=active]:duration-300"
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {portfolioData.skills
                .filter((s) => c.value === "all" || s.category === c.value)
                .map((s, i) => {
                  const Icon = s.icon;

                  return (
                    <div
                      key={s.name}
                      style={{ animationDelay: `${i * 40}ms` }}
                      className="flex items-center gap-3 rounded-lg border bg-card p-3 animate-in fade-in-0 zoom-in-95 duration-300 fill-mode-both transition-transform hover:scale-105 hover:border-primary"
                    >
                      {typeof Icon === "function" ? (
                        <Icon className={`${iconBoxClasses} ${s.color}`} />
                      ) : (
                        <FontAwesomeIcon
                          icon={Icon}
                          className={`${iconBoxClasses} ${s.color}`}
                        />
                      )}
                      <span>{s.name}</span>
                    </div>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}