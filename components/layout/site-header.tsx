"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

import { mainNav } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/layout/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container size="xl">
        <div className="flex h-14 items-center gap-2">
          <MobileNav />
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-base font-medium"
          >
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            {siteConfig.shortName}
          </Link>
          <MainNav items={mainNav} className="ml-6 hidden md:flex" />
          <div className="ml-auto flex items-center gap-1">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
