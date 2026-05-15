import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-3">
        <p className="font-mono text-sm tracking-widest text-muted-foreground">
          404
        </p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mx-auto max-w-md text-muted-foreground">
          요청하신 페이지가 이동되었거나 더 이상 존재하지 않습니다. 주소를 다시 확인해주세요.
        </p>
      </div>
      <Button asChild>
        <Link href="/">
          <ArrowLeft data-icon="inline-start" />
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}
