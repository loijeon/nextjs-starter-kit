"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import {
  useCopyToClipboard,
  useDebounceValue,
  useIsClient,
  useLocalStorage,
  useMediaQuery,
} from "usehooks-ts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function HooksExamplePage() {
  const isClient = useIsClient()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [input, setInput] = React.useState("")
  const [debounced, setDebounced] = useDebounceValue(input, 400)
  React.useEffect(() => {
    setDebounced(input)
  }, [input, setDebounced])

  const [count, setCount, removeCount] = useLocalStorage("starter-counter", 0)

  const [copied, copy] = useCopyToClipboard()
  const sampleText = "Hello from the starter kit!"

  return (
    <Section>
      <Container size="lg" className="space-y-6">
        <header className="space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Useful Hooks
          </h1>
          <p className="text-muted-foreground">
            usehooks-ts 의 자주 쓰는 훅 4가지를 화면에서 직접 확인해보세요.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>useMediaQuery</CardTitle>
              <CardDescription>
                현재 뷰포트가 768px 이상인지 실시간으로 감지합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">현재:</span>
                <Badge variant={isDesktop ? "default" : "secondary"}>
                  {isClient ? (isDesktop ? "Desktop ≥ 768px" : "Mobile < 768px") : "..."}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>useDebounceValue</CardTitle>
              <CardDescription>
                400ms 디바운스된 값을 화면에 표시합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Input
                placeholder="아무거나 빠르게 타이핑해보세요"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="text-sm">
                <span className="text-muted-foreground">debounced: </span>
                <span className="font-mono">{debounced || "(empty)"}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>useLocalStorage</CardTitle>
              <CardDescription>
                새로고침 후에도 값이 유지됩니다 (key: <code>starter-counter</code>).
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="text-base">
                {isClient ? count : 0}
              </Badge>
              <Button size="sm" onClick={() => setCount(count + 1)}>
                +1
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCount(count - 1)}
              >
                -1
              </Button>
              <Button size="sm" variant="ghost" onClick={() => removeCount()}>
                리셋
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>useCopyToClipboard</CardTitle>
              <CardDescription>
                클립보드에 텍스트를 복사하고 결과를 확인합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <pre className="rounded-md bg-muted px-3 py-2 text-sm">
                {sampleText}
              </pre>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copy(sampleText)}
              >
                {copied ? (
                  <>
                    <Check data-icon="inline-start" /> 복사됨
                  </>
                ) : (
                  <>
                    <Copy data-icon="inline-start" /> 클립보드에 복사
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
