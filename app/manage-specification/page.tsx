"use client"

import { useState } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Sample data for specifications
const activeSpecifications = [
  {
    id: 1,
    name: "Project Alpha",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "2 days ago",
    author: "John Doe",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Project Beta",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "1 week ago",
    author: "Jane Smith",
    status: "Review",
  },
  {
    id: 3,
    name: "Project Gamma",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "3 days ago",
    author: "Mike Johnson",
    status: "In Progress",
  },
  {
    id: 4,
    name: "Project Delta",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "5 days ago",
    author: "Sarah Wilson",
    status: "Draft",
  },
]

const pastSpecifications = [
  {
    id: 5,
    name: "Project Epsilon",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "2 weeks ago",
    author: "John Doe",
    status: "Completed",
  },
  {
    id: 6,
    name: "Project Zeta",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "1 month ago",
    author: "Jane Smith",
    status: "Completed",
  },
  {
    id: 7,
    name: "Project Eta",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "6 weeks ago",
    author: "Mike Johnson",
    status: "Archived",
  },
  {
    id: 8,
    name: "Project Theta",
    thumbnail: "/placeholder.svg?height=60&width=80",
    lastModified: "2 months ago",
    author: "Sarah Wilson",
    status: "Completed",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-gray-100 text-gray-800"
    case "Review":
      return "bg-gray-200 text-gray-900"
    case "Draft":
      return "bg-gray-50 text-gray-600"
    case "Completed":
      return "bg-gray-800 text-white"
    case "Archived":
      return "bg-gray-600 text-white"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ManageSpecification() {
  const [selectedSpec, setSelectedSpec] = useState<number | null>(null)

  const SpecificationCard = ({ spec }: { spec: any }) => (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 stormtrooper-glass angular-border ${
        selectedSpec === spec.id ? "ring-1 ring-gray-400 shadow-lg" : ""
      }`}
      onClick={() => setSelectedSpec(spec.id)}
    >
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-[80px] h-[60px] bg-gradient-to-br from-gray-100 to-gray-200 rounded angular-border-small flex items-center justify-center overflow-hidden shadow-inner">
              <img src={spec.thumbnail || "/placeholder.svg"} alt={spec.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-sm text-gray-900">{spec.name}</h3>
                <Badge className={`${getStatusColor(spec.status)} text-xs px-1.5 py-0.5`}>{spec.status}</Badge>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {spec.lastModified}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {spec.author}
                </div>
              </div>
            </div>
          </div>
          <Button
            variant={selectedSpec === spec.id ? "default" : "ghost"}
            size="icon"
            className={`h-7 w-7 transition-all duration-200 ${selectedSpec === spec.id ? "first-order-accent" : ""}`}
            disabled={selectedSpec !== spec.id}
            asChild
          >
            <a href={`/specification/${spec.id}`}>
              <ChevronRight className="h-3 w-3" />
              <span className="sr-only">View {spec.name}</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <MainLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Manage Specifications
          </h1>
          <p className="text-gray-600 text-xs mt-1">View and manage all your project specifications</p>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-4 stormtrooper-glass border border-white/20 shadow-sm h-8">
            <TabsTrigger
              value="active"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs px-3"
            >
              Active ({activeSpecifications.length})
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs px-3"
            >
              Past ({pastSpecifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid gap-3">
              {activeSpecifications.map((spec) => (
                <SpecificationCard key={spec.id} spec={spec} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid gap-3">
              {pastSpecifications.map((spec) => (
                <SpecificationCard key={spec.id} spec={spec} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
