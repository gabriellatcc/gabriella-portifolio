import { createFileRoute } from '@tanstack/react-router'
import { ProjectsSection } from "@/components/home/projects-section"
import { ExperienceSection } from "@/components/home/experience-section"
// import { EducationSection } from "@/components/home/education-section"
// import { AboutSection } from "@/components/home/about-section"
import { SkillsSection } from "@/components/home/tech-section"
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-2 p-3 pt-24">
      {/* <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section> */}

      <section id="tech-stack" className="scroll-mt-24">
        <SkillsSection />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>

      <section id="experience" className="scroll-mt-24">
        <ExperienceSection />
      </section>
      {/*
      <section id="education" className="scroll-mt-24">
        <EducationSection />
      </section> */}
    </div>
  )
}