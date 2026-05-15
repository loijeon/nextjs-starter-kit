export const siteConfig = {
  name: "Next Starter",
  shortName: "Starter",
  description:
    "Next.js 16 · React 19 · Tailwind v4 · shadcn/ui · TypeScript 로 빠르게 시작하는 모던 웹 스타터킷.",
  url: "https://example.com",
  ogImage: "https://example.com/og.png",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Starter Kit",
  ],
  author: {
    name: "Your Name",
    url: "https://example.com",
  },
  links: {
    github: "https://github.com/your-org/your-repo",
    twitter: "https://twitter.com/your_handle",
  },
} as const

export type SiteConfig = typeof siteConfig
