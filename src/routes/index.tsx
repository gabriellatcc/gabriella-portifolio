import { createFileRoute } from '@tanstack/react-router'
import { ProjectsSection } from "@/components/home/projects-section"
// import { ExperienceSection } from "@/components//experience-section"
// import { EducationSection } from "@/components//education-section"
// import { AboutSection } from "@/components//about-section"
// import { TechSection } from "@/components//tech-section"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-16">
      {/* <section id="about">
        <AboutSection />
      </section>

      <section id="tech-stack">
        <TechSection />
      </section> */}

      <section id="projects">
        <ProjectsSection />
      </section>

      {/* <section id="experience">
        <ExperienceSection />
      </section>

      <section id="education">
        <EducationSection />
      </section> */}
    </div>
  )
}