import { createFileRoute } from '@tanstack/react-router'
import { ProjectsSection } from "@/components/home/projects-section"
// import { ExperienceSection } from "@/components/home/experience-section"
// import { EducationSection } from "@/components/home/education-section"
// import { AboutSection } from "@/components/home/about-section"
// import { TechSection } from "@/components/home/tech-section"

export const Route = createFileRoute('/home')({
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