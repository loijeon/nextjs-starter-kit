import {
  Boxes,
  Component,
  Gauge,
  Moon,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: "Next.js 16 App Router",
    description:
      "React 19 + Turbopack 기반. Server Components 우선, 비동기 API 규약에 맞춘 안정적인 기반.",
    icon: Boxes,
  },
  {
    title: "shadcn/ui · Radix Nova",
    description:
      "검증된 접근성 컴포넌트. 라이브러리가 아닌 코드로 들어와 자유롭게 커스터마이즈.",
    icon: Component,
  },
  {
    title: "Tailwind CSS v4",
    description:
      "OKLCH 기반 컬러 토큰과 @theme 변수로 다크/라이트 테마를 즉시 전환.",
    icon: Moon,
  },
  {
    title: "Type-safe Forms",
    description:
      "react-hook-form + zod 조합과 shadcn Form 으로 타입 안전한 폼을 바로 시작.",
    icon: ShieldCheck,
  },
  {
    title: "Useful Hooks",
    description:
      "usehooks-ts 로 useMediaQuery, useDebounce, useLocalStorage 등 검증된 훅을 활용.",
    icon: Workflow,
  },
  {
    title: "Production-ready",
    description:
      "SEO 메타데이터 헬퍼, 라우트 그룹 분리, 반응형 레이아웃까지 처음부터 준비.",
    icon: Gauge,
  },
]

export function Features() {
  return (
    <Section className="border-t bg-muted/30">
      <Container size="xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            처음부터 잘 설계된 기반
          </h2>
          <p className="mt-4 text-muted-foreground">
            새 프로젝트를 시작할 때 필요한 의사결정과 보일러플레이트를 미리 끝내두었습니다.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="h-full">
                <CardHeader>
                  <span className="mb-2 grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="hidden" />
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
