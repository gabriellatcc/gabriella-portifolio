import { FloatingNav } from "@/components/aceternity-ui/floating-navbar";
import {
  IconHome,
  IconHomeFilled,
  IconBriefcase,
  IconBriefcaseFilled,
  IconFolder,
  IconFolderFilled
} from "@tabler/icons-react";
import { IoLayersOutline, IoLayers } from "react-icons/io5";

export default function FloatingNavDemo() {
  const navigationstyle = "h-4 w-4 text-foreground";
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className={navigationstyle} />,
      activeIcon: <IconHomeFilled className={navigationstyle} />,
    },
    {
      name: "Tech Stack",
      link: "#tech-stack",
      icon: <IoLayersOutline className={navigationstyle} />,
      activeIcon: <IoLayers className={navigationstyle} />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconFolder className={navigationstyle} />,
      activeIcon: <IconFolderFilled className={navigationstyle} />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBriefcase className={navigationstyle} />,
      activeIcon: <IconBriefcaseFilled className={navigationstyle} />,
    },
  ];

  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}