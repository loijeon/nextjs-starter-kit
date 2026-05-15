import Link from "next/link"
import { Sparkles } from "lucide-react"

import { footerNav } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { GithubIcon, TwitterIcon } from "@/components/icons"
import { Container } from "@/components/layout/container"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <Container size="xl" className="py-12">
        <div className="grid gap-10 md:grid-cols-[2fr_repeat(2,1fr)]">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-base font-medium"
            >
              <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </span>
              {siteConfig.shortName}
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
                className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <TwitterIcon className="size-4" />
              </Link>
            </div>
          </div>
          {footerNav.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js · React · Tailwind · shadcn/ui</p>
        </div>
      </Container>
    </footer>
  )
}
