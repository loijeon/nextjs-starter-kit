import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
  type LucideIcon,
} from "lucide-react"

import { buildMetadata } from "@/lib/seo"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata = buildMetadata({
  title: "Dashboard",
  description: "주요 지표 한눈에 확인하기.",
  path: "/dashboard",
})

type Metric = {
  label: string
  value: string
  delta: string
  icon: LucideIcon
}

const metrics: Metric[] = [
  { label: "총 매출", value: "₩45,231,890", delta: "+20.1% MoM", icon: DollarSign },
  { label: "신규 가입자", value: "+2,350", delta: "+180.1% MoM", icon: Users },
  { label: "활성 사용자", value: "+12,234", delta: "+19% MoM", icon: Activity },
  { label: "결제 건수", value: "+573", delta: "+201 since last hour", icon: CreditCard },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <header className="space-y-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-sm text-muted-foreground">
          오늘의 주요 지표와 최근 동향을 확인하세요.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label} size="sm">
              <CardHeader>
                <CardDescription className="flex items-center justify-between">
                  {metric.label}
                  <Icon className="size-4 text-muted-foreground" />
                </CardDescription>
                <CardTitle className="text-2xl font-semibold tracking-tight">
                  {metric.value}
                </CardTitle>
                <CardDescription className="text-xs">{metric.delta}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>안내</CardTitle>
          <CardDescription>
            이 페이지는 대시보드 스켈레톤 예시입니다. 실제 차트, 테이블, 데이터 fetch
            는 프로젝트 요구에 맞춰 추가해 사용하세요.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
