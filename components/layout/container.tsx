import * as React from "react"

import { cn } from "@/lib/utils"

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full"

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
}

type ContainerProps = React.ComponentProps<"div"> & {
  size?: ContainerSize
  as?: React.ElementType
}

export function Container({
  className,
  size = "lg",
  as: Comp = "div",
  ...props
}: ContainerProps) {
  return (
    <Comp
      data-slot="container"
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
}
