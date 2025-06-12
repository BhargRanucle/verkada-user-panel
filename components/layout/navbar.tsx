"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Settings, Search, Plus, LayoutDashboard, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="h-14 stormtrooper-glass border-b border-white/20 flex items-center justify-between px-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-15 h-15 stormtrooper-glass angular-border-small flex">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 19" className="w-[50%] float-left"><path d="M8.227 13.638 21.667.217a.739.739 0 0 1 1.045 0l4.384 4.375c.289.29.289.759 0 1.045L14.18 18.535c-.29.289-.76.289-1.049 0l-4.905-4.9v.003ZM.217 5.64a.737.737 0 0 1 0-1.045L4.6.217c.29-.29.76-.29 1.049 0L12.444 7l-5.43 5.423L.218 5.64Z"></path><path d="M36.7 2.467h2.682l4.23 11.231 4.23-11.23h2.683l-5.468 14.424h-2.89L36.7 2.467ZM58.96 15.346s-1.34 1.751-4.23 1.751c-3.301 0-5.847-2.883-5.287-6.162.434-2.532 2.726-4.4 5.298-4.346 2.83.058 4.84 2.303 4.84 5.047 0 .62-.104 1.135-.104 1.135h-7.53c.249 1.134 1.238 2.163 2.89 2.163 1.753 0 2.785-1.258 2.785-1.258l1.341 1.67h-.002ZM57 10.812c-.309-1.135-1.136-1.959-2.477-1.959-1.445 0-2.27.824-2.578 1.96H57ZM61.5 6.794h2.374v1.443h.103s1.033-1.648 2.89-1.648h.412v2.575s-.308-.103-.825-.103c-1.444 0-2.578 1.134-2.578 2.886v4.945h-2.373V6.794H61.5ZM68.768 2.467h2.373v8.76l4.022-4.43h2.89l-3.818 4.225 4.023 5.873h-2.682l-2.89-4.225-1.548 1.75v2.475h-2.373V2.467h.003ZM85.282 15.553h-.104s-.928 1.547-2.99 1.547c-2.062 0-3.302-1.34-3.302-2.886 0-1.648 1.237-2.886 2.99-3.195l3.406-.619c0-.72-.825-1.547-1.961-1.547-1.507 0-2.477 1.236-2.477 1.236l-1.445-1.443s1.445-2.06 4.023-2.06c2.578 0 4.23 1.814 4.23 4.019v6.285H85.28v-1.34l.003.003Zm0-3.298-2.373.412c-1.238.226-1.65.62-1.65 1.236s.62 1.235 1.549 1.235c1.34 0 2.477-1.134 2.477-2.575v-.308h-.003ZM97.205 15.45h-.103s-.93 1.647-3.302 1.647c-2.373 0-4.54-2.163-4.54-5.254 0-3.09 2.166-5.254 4.54-5.254 2.373 0 3.302 1.648 3.302 1.648h.103v-5.77h2.374v14.425h-2.374V15.45Zm0-3.607c0-1.648-1.237-2.886-2.785-2.886-1.549 0-2.786 1.236-2.786 2.886 0 1.65 1.237 2.886 2.786 2.886 1.548 0 2.785-1.236 2.785-2.886ZM107.629 15.553h-.103s-.929 1.547-2.991 1.547c-2.062 0-3.301-1.34-3.301-2.886 0-1.648 1.237-2.886 2.99-3.195l3.405-.619c0-.72-.824-1.547-1.96-1.547-1.505 0-2.477 1.236-2.477 1.236l-1.445-1.443s1.445-2.06 4.023-2.06c2.578 0 4.23 1.814 4.23 4.019v6.285h-2.373v-1.34l.002.003Zm0-3.298-2.373.412c-1.237.226-1.649.62-1.649 1.236s.62 1.235 1.548 1.235c1.341 0 2.477-1.134 2.477-2.575v-.308h-.003Z"></path></svg>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <Link
          href="/"
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 angular-border-small",
            pathname === "/" ? "stormtrooper-glass text-gray-900 shadow-sm" : "text-gray-600 hover:bg-white/50",
          )}
        >
          <div className="flex items-center gap-1.5">
            <LayoutDashboard className="h-3 w-3" />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link
          href="/manage-projects"
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 angular-border-small",
            pathname === "/manage-projects"
              ? "stormtrooper-glass text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-white/50",
          )}
        >
          <div className="flex items-center gap-1.5">
            <FileText className="h-3 w-3" />
            <span>Manage Projects</span>
          </div>
        </Link>
        <Button
          size="sm"
          className="h-7 first-order-accent text-white hover:bg-gray-900 text-xs angular-border-small ml-2"
          asChild
        >
          <Link href="/create-project">
            <Plus className="mr-1 h-3 w-3" /> Create
          </Link>
        </Button>
      </div>

      {/* Search Bar */}
      <div className="hidden md:block flex-1 max-w-sm mx-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
          <Input
            placeholder="Search projects..."
            className="pl-7 h-7 text-xs bg-white/50 border-white/30 focus:bg-white/80 transition-all duration-200 angular-border-small"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
       

        <div className="h-6 w-px bg-gray-300 mx-1"></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-auto px-2 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6 ring-1 ring-white/30">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-800 text-white text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-xs font-medium">John Doe</p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-xs font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">john.doe@Verkada.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs">My Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
