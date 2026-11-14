import { FloatingNav } from "@/components/aceternity-ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";

export default function FloatingNavDemo() {
  const navigationstyle = "h-4 w-4 text-foreground"
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className={`${navigationstyle}`} />,
    },
    {
      name: "Tech Stack",
      link: "#tech-stack",
      icon: <IconHome className={`${navigationstyle}`} />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconHome className={`${navigationstyle}`} />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconHome className={`${navigationstyle}`} />,
    },
  ];

  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}