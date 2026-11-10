import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/providers/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Switch
      size="lg"
      checked={isDark}
      onCheckedChange={toggleTheme}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      thumbChildren={
        isDark ? (
          <Moon className="size-3 text-primary" />
        ) : (
          <Sun className="size-3 text-chart-3" />
        )
      }
    />
  );
  // removed: "fixed bottom-6 right-6 z-50" in 25th line
  // <Button
  //   type="button"
  //   variant="outline"
  //   size="icon-lg"
  //   onClick={handleToggle}
  //   aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
  //   className={cn(
  //     "size-11 rounded-full shadow-md",
  //     "border-border bg-background text-foreground hover:bg-muted",
  //   )}
  // >
  //   <span
  //     aria-hidden
  //     className="inline-flex transition-transform duration-300 ease-in-out"
  //     style={{ transform: `rotate(${rotation}deg)` }}
  //   >
  //     {theme === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />}
  //   </span>
  // </Button>
}