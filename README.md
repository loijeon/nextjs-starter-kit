# Next.js Starter Kit

Next.js 16 · React 19 · Tailwind v4 · shadcn/ui · TypeScript 로 빠르게 시작하는 모던 웹 스타터킷입니다.

랜딩 페이지, 대시보드 스켈레톤, 라이브러리 예제까지 미리 통합되어 있어 클론 후 바로 작업을 시작할 수 있습니다.

---

## 🛠 기술 스택

| 영역 | 라이브러리 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router · Turbopack) |
| 언어 | TypeScript 5 |
| UI | React 19 · Tailwind CSS v4 · shadcn/ui (`radix-nova`) |
| 아이콘 | lucide-react |
| 테마 | next-themes (light / dark / system) |
| 폼 | react-hook-form + zod + @hookform/resolvers |
| 훅 | usehooks-ts |

---

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm run start

# 린트
npm run lint
```

Node.js 20.9 이상이 필요합니다 (Next.js 16 요구사항).

---

## 📁 프로젝트 구조

```
app/
├── (marketing)/          # 마케팅 라우트 그룹 — SiteHeader + SiteFooter
│   ├── layout.tsx
│   └── page.tsx          # / — Hero + Features + CTA
├── (app)/                # 인증 후 영역 — DashboardSidebar + AppHeader
│   ├── layout.tsx
│   └── dashboard/
│       ├── page.tsx              # /dashboard
│       └── settings/page.tsx     # /dashboard/settings
├── (examples)/           # 라이브러리 데모
│   ├── layout.tsx
│   └── examples/
│       ├── page.tsx              # /examples — 인덱스
│       ├── form/page.tsx         # /examples/form — rhf + zod
│       └── hooks/page.tsx        # /examples/hooks — usehooks-ts
├── layout.tsx            # 루트 — ThemeProvider, 폰트, 메타데이터
├── globals.css           # Tailwind v4 + shadcn 디자인 토큰
└── not-found.tsx         # 404

components/
├── ui/                   # shadcn 컴포넌트 (CLI로 추가)
├── layout/               # Container, Section, Header, Footer, Sidebar
├── marketing/            # Hero, Features, CTA
├── theme-provider.tsx    # next-themes 래퍼
├── theme-toggle.tsx      # 라이트/다크/시스템 토글
└── icons.tsx             # GitHub/Twitter 등 브랜드 SVG

config/
├── site.ts               # 사이트 메타데이터 단일 소스 (name, url, links)
└── nav.ts                # 헤더/사이드바/푸터 네비게이션

lib/
├── utils.ts              # cn() 유틸
└── seo.ts                # buildMetadata() 헬퍼
```

---

## 🧭 주요 라우트

| 경로 | 설명 |
| --- | --- |
| `/` | 랜딩 페이지 (Hero · Features · CTA) |
| `/dashboard` | 대시보드 메인 (메트릭 카드) |
| `/dashboard/settings` | 설정 페이지 (단순 입력 UI) |
| `/examples` | 예제 인덱스 |
| `/examples/form` | react-hook-form + zod + shadcn Form 예제 |
| `/examples/hooks` | usehooks-ts 데모 4종 |

---

## 🎨 커스터마이징

### 1. 사이트 정보 변경
`config/site.ts` 한 곳만 수정하면 헤더 로고, 푸터, 메타데이터, OG 태그까지 모두 반영됩니다.

```ts
// config/site.ts
export const siteConfig = {
  name: "내 서비스",
  shortName: "MyApp",
  description: "...",
  url: "https://example.com",
  links: {
    github: "https://github.com/...",
    twitter: "https://twitter.com/...",
  },
  // ...
}
```

### 2. 네비게이션 메뉴 변경
`config/nav.ts` 의 `mainNav`(상단), `dashboardNav`(사이드바), `footerNav`(푸터) 배열만 수정하세요.

```ts
export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Pricing", href: "/pricing" },
]
```

### 3. 페이지 메타데이터
모든 페이지에서 `buildMetadata()` 헬퍼를 사용하면 사이트 기본값에 페이지별 값이 자동 병합됩니다.

```tsx
// app/(marketing)/pricing/page.tsx
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Pricing",
  description: "요금제를 비교하세요.",
  path: "/pricing",
})
```

### 4. 디자인 토큰 (색상 · 라운드)
`app/globals.css` 의 `:root` / `.dark` 블록의 OKLCH 변수를 수정하면 라이트/다크 모두 한번에 갱신됩니다.

```css
:root {
  --primary: oklch(0.205 0 0);  /* 메인 색상 */
  --radius: 0.625rem;            /* 둥글기 */
}
```

### 5. shadcn 컴포넌트 추가
```bash
npx shadcn@latest add <component-name>
# 예: npx shadcn@latest add table
```

생성 위치는 `components.json` 의 alias 설정에 따라 `components/ui/` 입니다.

---

## 🧩 핵심 패턴 사용법

### 다크모드 토글
이미 헤더에 `ThemeToggle` 이 배치되어 있습니다. 직접 사용하려면:

```tsx
"use client"
import { useTheme } from "next-themes"

const { theme, setTheme } = useTheme()
setTheme("dark")  // "light" | "dark" | "system"
```

### 타입 안전한 폼 (`/examples/form` 참고)
```tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

const schema = z.object({
  email: z.string().email("올바른 이메일이 아닙니다."),
})

const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: { email: "" },
})

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>이메일</FormLabel>
          <FormControl><Input {...field} /></FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

### usehooks-ts (`/examples/hooks` 참고)
```tsx
"use client"
import { useMediaQuery, useLocalStorage, useDebounceValue, useCopyToClipboard } from "usehooks-ts"

const isDesktop = useMediaQuery("(min-width: 768px)")
const [user, setUser] = useLocalStorage("user", { name: "" })
const [debounced, setDebounced] = useDebounceValue("", 400)
const [copied, copy] = useCopyToClipboard()
```

### 레이아웃 헬퍼
```tsx
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

<Section spacing="lg">
  <Container size="md">{/* sm | md | lg | xl | full */}</Container>
</Section>
```

### `cn()` 클래스 병합
조건부 Tailwind 클래스를 안전하게 합치고 충돌을 정리합니다.
```tsx
import { cn } from "@/lib/utils"

<div className={cn("px-4", active && "bg-muted", className)} />
```

---

## 📌 Next.js 16 적용 규칙

이 스타터킷이 따르는 v16 규칙들:

- **Server Components 기본** — `"use client"` 는 상태/이펙트가 필요한 컴포넌트에만 사용
- **비동기 요청 API** — `params`, `searchParams`, `cookies()`, `headers()` 는 Promise. `await` 필수
- **Turbopack 기본** — `next dev` / `next build` 모두 Turbopack 사용 (별도 webpack 설정 금지)
- **`next/image` quality** — 기본 허용 값은 `[75]` 하나

---

## ❌ 명시적 비포함 (직접 추가)

스타터킷의 가벼움을 위해 의도적으로 제외한 항목:

- 인증 (NextAuth, Clerk 등)
- 데이터베이스 (Prisma, Drizzle 등)
- 국제화 (next-intl, next-i18next)
- 테스트 셋업 (Vitest, Playwright)
- CI/CD 워크플로

필요할 때 각 라이브러리 공식 가이드에 맞춰 추가하세요.

---

## 📦 배포

[Vercel](https://vercel.com) 에 GitHub 저장소를 연결하면 자동 배포됩니다.
다른 플랫폼은 `npm run build` 결과물(`.next/`)을 Node.js 20.9+ 환경에서 `npm run start` 로 실행하세요.
