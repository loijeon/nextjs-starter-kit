import type { Metadata } from "next"

import { siteConfig } from "@/config/site"

type BuildMetadataOptions = {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const finalTitle = title ?? siteConfig.name
  const finalDescription = description ?? siteConfig.description
  const url = new URL(path, siteConfig.url).toString()

  return {
    metadataBase: new URL(siteConfig.url),
    title: title
      ? {
          default: title,
          template: `%s | ${siteConfig.name}`,
        }
      : {
          default: siteConfig.name,
          template: `%s | ${siteConfig.name}`,
        },
    description: finalDescription,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      title: finalTitle,
      description: finalDescription,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: finalTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [siteConfig.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: url },
  }
}
