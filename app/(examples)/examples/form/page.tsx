"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const schema = z.object({
  name: z
    .string()
    .min(2, "이름은 2자 이상이어야 합니다.")
    .max(40, "이름은 40자 이하여야 합니다."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  topic: z.string().min(1, "주제를 선택해주세요."),
  message: z
    .string()
    .min(10, "메시지는 10자 이상 입력해주세요.")
    .max(500, "메시지는 500자 이하로 입력해주세요."),
})

type FormValues = z.infer<typeof schema>

export default function FormExamplePage() {
  const [submitted, setSubmitted] = React.useState<FormValues | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
  })

  function onSubmit(values: FormValues) {
    setSubmitted(values)
  }

  return (
    <Section>
      <Container size="sm" className="space-y-6">
        <header className="space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Type-safe Form
          </h1>
          <p className="text-muted-foreground">
            react-hook-form + zod + shadcn Form 컴포넌트 조합 예제입니다. 비어 있는
            상태로 제출하면 zod 의 검증 메시지가 표시됩니다.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>문의하기</CardTitle>
            <CardDescription>모든 항목은 필수입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        답변이 갈 이메일 주소를 입력하세요.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>주제</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="주제를 선택하세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">일반 문의</SelectItem>
                          <SelectItem value="bug">버그 신고</SelectItem>
                          <SelectItem value="feature">기능 제안</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>메시지</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="문의 내용을 자세히 적어주세요."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      form.reset()
                      setSubmitted(null)
                    }}
                  >
                    초기화
                  </Button>
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    제출
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {submitted && (
          <Card>
            <CardHeader>
              <CardTitle>제출 결과</CardTitle>
              <CardDescription>
                실제 API 호출은 자유롭게 연동하세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
                {JSON.stringify(submitted, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </Container>
    </Section>
  )
}
