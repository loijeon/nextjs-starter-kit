import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function CTA() {
  return (
    <Section>
      <Container size="md">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-primary-foreground sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            클론 후 <code className="rounded bg-primary-foreground/10 px-1.5 py-0.5 text-sm">npm run dev</code>{" "}
            한 줄로 바로 작업을 시작할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/examples">
                예제 살펴보기
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/dashboard">대시보드 보기</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
