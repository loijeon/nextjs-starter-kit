"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import type { NavItem } from "@/config/nav"

type MainNavProps = {
  items: NavItem[]
  className?: string
}

export function MainNav({ items, className }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground",
              active ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
