import type { ReactNode } from "react"
import { Navbar } from "./navbar"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    // <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
    //   <Navbar />
    //   <main className="flex-1 overflow-auto p-3 md:p-4">
    //     <div className="animate-fade-in max-w-7xl mx-auto">{children}</div>
    //   </main>
    // </div>

    <>
      <div className="fixed top-0 left-0 w-full h-12 z-50">
        <div className="flex flex-col bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
          <Navbar />
        </div>
      </div>

      <div className="mt-[70px]">
        <main className="flex-1 overflow-auto p-3 md:p-4">
          <div className="animate-fade-in max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </>
  )
}
