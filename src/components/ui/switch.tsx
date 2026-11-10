import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

function Switch({
  className,
  size = "default",
  thumbChildren,
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg"
  thumbChildren?: React.ReactNode
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-1 border-char-3 dark:border-sidebar-foreground/10 transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-checked:bg-foreground/20 data-unchecked:bg-border/40 dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",
        "data-[size=default]:h-[18.4px] data-[size=default]:w-[32px]",
        "data-[size=lg]:h-8 data-[size=lg]:w-14",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none flex items-center justify-center rounded-full bg-background ring-0 transition-transform border border-border shadow-md will-change-transform",
          "group-data-[size=sm]/switch:size-3",
          "group-data-[size=default]/switch:size-4",
          "group-data-[size=lg]/switch:size-7",
          "data-unchecked:translate-x-0.5",
          "group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=lg]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground"
        )}
      >
        {thumbChildren}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }