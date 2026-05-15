import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GithubIcon } from "@/components/icons"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function Hero() {
  return (
    <Section spacing="lg" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-muted)_0%,transparent_70%)]"
      />
      <Container size="md" className="flex flex-col items-center text-center">
        <Badge variant="secondary" className="mb-6">
          v0.1 · Next.js 16 Ready
        </Badge>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          빠르게 시작하는
          <br className="hidden sm:block" /> 모던 웹 스타터킷
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/dashboard">
              Dashboard 보기
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon data-icon="inline-start" className="size-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
