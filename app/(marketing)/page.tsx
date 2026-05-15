import { buildMetadata } from "@/lib/seo"
import { CTA } from "@/components/marketing/cta"
import { Features } from "@/components/marketing/features"
import { Hero } from "@/components/marketing/hero"

export const metadata = buildMetadata({
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  )
}
