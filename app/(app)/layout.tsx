import { AppHeader } from "@/components/layout/app-header"
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-[260px_1fr]">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-col">
        <AppHeader />
        <main className="flex-1 bg-muted/30 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
