import * as React from "react"

import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section"> & {
  spacing?: "sm" | "md" | "lg"
}

const spacingClasses = {
  sm: "py-10 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
} as const

export function Section({
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(spacingClasses[spacing], className)}
      {...props}
    />
  )
}
