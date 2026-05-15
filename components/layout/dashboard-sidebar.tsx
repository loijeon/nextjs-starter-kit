"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { dashboardNav } from "@/config/nav"
import { siteConfig } from "@/config/site"

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden border-r bg-background lg:flex lg:flex-col">
      <div className="flex h-14 items-center gap-2 border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-base font-medium">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          {siteConfig.shortName}
        </Link>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {dashboardNav.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                active
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="size-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
