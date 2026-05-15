import {
  LayoutDashboard,
  Settings,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
  external?: boolean
}

export type SidebarItem = NavItem & {
  icon: LucideIcon
}

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Examples", href: "/examples" },
]

export const dashboardNav: SidebarItem[] = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
]

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { title: "Dashboard", href: "/dashboard" },
      { title: "Examples", href: "/examples" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Form Example", href: "/examples/form" },
      { title: "Hooks Example", href: "/examples/hooks" },
    ],
  },
]
