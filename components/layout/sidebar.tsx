"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Plus, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 stormtrooper-glass angular-border-small flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">V</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Verkada</h1>
            <p className="text-slate-300 text-xs">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-3 space-y-2">
        <Button
          size="sm"
          className="w-full justify-start gap-2 h-8 first-order-accent text-white hover:bg-gray-700 text-xs angular-border-small"
          asChild
        >
          <Link href="/create-specification">
            <Plus className="h-3 w-3" />
            Create New Specification
          </Link>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2 h-8 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 text-xs angular-border-small"
          asChild
        >
          <Link href="/manage-specification">
            <FileText className="h-3 w-3" />
            Manage Specification
          </Link>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-1">
        <div className="space-y-1">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-medium px-3 py-1">Navigation</p>
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-xs font-medium rounded transition-all duration-200 angular-border-small",
              pathname === "/dashboard"
                ? "stormtrooper-glass text-gray-900 shadow-md"
                : "text-slate-300 hover:text-white hover:bg-white/10",
            )}
          >
            <LayoutDashboard className="h-3 w-3" />
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-white/10">
        <div className="text-center">
          <p className="text-slate-400 text-xs">© 2024 Verkada</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-3 left-3 z-50 md:hidden stormtrooper-glass w-8 h-8"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-200",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-56 stormtrooper-dark shadow-2xl transition-transform duration-200",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen w-56 stormtrooper-dark shadow-xl relative z-10">
        <SidebarContent />
      </div>
    </>
  )
}
