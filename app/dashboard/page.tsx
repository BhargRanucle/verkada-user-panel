import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layout/main-layout"
import { Plus, TrendingUp, Users, FileText, Clock } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 text-xs mt-1">
              Welcome back, John. Here's what's happening with your projects.
            </p>
          </div>
          <Button
            size="sm"
            className="first-order-accent text-white hover:bg-gray-900 text-xs angular-border-small h-8"
            asChild
          >
            <Link href="/create-project">
              <Plus className="mr-1 h-3 w-3" /> Create Project
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Card className="card-hover stormtrooper-glass angular-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-medium text-gray-600">Total Projects</CardTitle>
              <FileText className="h-3 w-3 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xl font-bold text-gray-900">24</div>
              
            </CardContent>
          </Card>

          <Card className="card-hover stormtrooper-glass angular-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-medium text-gray-600">Active Projects</CardTitle>
              <Clock className="h-3 w-3 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xl font-bold text-gray-900">12</div>
              
            </CardContent>
          </Card>

          <Card className="card-hover stormtrooper-glass angular-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-xs font-medium text-gray-600">Past Projects</CardTitle>
              <FileText className="h-3 w-3 text-gray-500" />
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xl font-bold text-gray-900">8</div>
            </CardContent>
          </Card>

        
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="stormtrooper-glass angular-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded bg-gray-50 border border-gray-100 angular-border-small">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-xs font-medium">Project Alpha updated</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded bg-gray-50 border border-gray-100 angular-border-small">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-xs font-medium">New project created</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
             
            </CardContent>
          </Card>

          <Card className="stormtrooper-glass angular-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start h-8 text-xs angular-border-small" asChild>
                <Link href="/create-project">
                  <Plus className="mr-2 h-3 w-3" />
                  Create New Project
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start h-8 text-xs angular-border-small" asChild>
                <Link href="/manage-projects">
                  <FileText className="mr-2 h-3 w-3" />
                  View All Projects
                </Link>
              </Button>
             
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
