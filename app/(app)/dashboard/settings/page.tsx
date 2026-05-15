import { buildMetadata } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export const metadata = buildMetadata({
  title: "Settings",
  description: "프로필 및 계정 설정.",
  path: "/dashboard/settings",
})

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <header className="space-y-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">
          기본 프로필 정보를 관리합니다. 실제 폼 라이브러리 예제는 /examples/form 참고.
        </p>
      </header>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>표시 이름과 자기소개를 입력하세요.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="display-name">표시 이름</Label>
            <Input id="display-name" placeholder="홍길동" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">자기소개</Label>
            <Textarea id="bio" rows={4} placeholder="간단한 자기소개를 적어주세요." />
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">취소</Button>
          <Button>저장</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
