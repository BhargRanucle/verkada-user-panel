import type { ReactNode } from "react"
import { Navbar } from "./navbar"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-auto p-3 md:p-4">
        <div className="animate-fade-in max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
