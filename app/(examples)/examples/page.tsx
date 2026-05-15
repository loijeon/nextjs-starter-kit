import Link from "next/link"
import { ArrowRight, FormInput, Workflow } from "lucide-react"

import { buildMetadata } from "@/lib/seo"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const metadata = buildMetadata({
  title: "Examples",
  description: "스타터킷에 포함된 라이브러리 사용 예제.",
  path: "/examples",
})

const items = [
  {
    title: "Type-safe Form",
    description:
      "react-hook-form + zod + shadcn Form 컴포넌트 조합으로 타입 안전한 폼 만들기.",
    href: "/examples/form",
    icon: FormInput,
  },
  {
    title: "Useful Hooks",
    description:
      "usehooks-ts 의 useMediaQuery, useDebounceValue, useLocalStorage, useCopyToClipboard 데모.",
    href: "/examples/hooks",
    icon: Workflow,
  },
]

export default function ExamplesIndexPage() {
  return (
    <Section>
      <Container size="lg">
        <header className="mb-10 space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Examples
          </h1>
          <p className="text-muted-foreground">
            스타터킷에 미리 통합된 라이브러리를 어떻게 사용하는지 보여주는 예제입니다.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-xl"
              >
                <Card className="h-full transition-colors group-hover:bg-muted/40">
                  <CardHeader>
                    <span className="mb-3 grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="flex items-center justify-between gap-2">
                      {item.title}
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
