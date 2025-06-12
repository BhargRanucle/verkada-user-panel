"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, List, History } from "lucide-react"

export default function SpecificationDetail({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Specification: Project {params.id}
          </h1>
        </div>

        <Card className="stormtrooper-glass angular-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Specification Options</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button variant="outline" className="gap-1 h-7 text-xs angular-border-small">
              <Edit className="h-3 w-3" />
              Add/Edit
            </Button>
            <Button variant="outline" className="gap-1 h-7 text-xs angular-border-small">
              <List className="h-3 w-3" />
              Listing
            </Button>
            <Button className="gap-1 h-7 text-xs first-order-accent text-white angular-border-small">
              <History className="h-3 w-3" />
              History
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="mb-4 stormtrooper-glass border border-white/20 shadow-sm h-8">
            <TabsTrigger value="history" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs">
              History
            </TabsTrigger>
            <TabsTrigger value="edit" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs">
              Add/Edit
            </TabsTrigger>
            <TabsTrigger value="listing" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs">
              Listing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card className="stormtrooper-glass angular-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Specification History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium text-xs">Version 1.3</p>
                      <p className="text-xs text-muted-foreground">Updated 2 days ago</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-6 text-xs angular-border-small">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium text-xs">Version 1.2</p>
                      <p className="text-xs text-muted-foreground">Updated 1 week ago</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-6 text-xs angular-border-small">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium text-xs">Version 1.1</p>
                      <p className="text-xs text-muted-foreground">Updated 2 weeks ago</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-6 text-xs angular-border-small">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-xs">Version 1.0</p>
                      <p className="text-xs text-muted-foreground">Created 1 month ago</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-6 text-xs angular-border-small">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit">
            <Card className="stormtrooper-glass angular-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Edit Specification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs">Edit form would go here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listing">
            <Card className="stormtrooper-glass angular-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Specification Listing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs">Listing details would go here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}
