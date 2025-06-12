import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CreateSpecification() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Create New Specification
          </h1>
        </div>

        <Card className="stormtrooper-glass angular-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Specification Details</CardTitle>
            <CardDescription className="text-xs">Enter the details for your new specification</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xs">
                  Specification Name
                </Label>
                <Input id="name" placeholder="Enter specification name" className="h-7 text-xs angular-border-small" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="description" className="text-xs">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Enter specification description"
                  rows={3}
                  className="text-xs angular-border-small"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="thumbnail" className="text-xs">
                  Thumbnail
                </Label>
                <div className="flex items-center gap-3">
                  <div className="w-[80px] h-[60px] bg-muted flex items-center justify-center border angular-border-small">
                    <span className="text-xs text-muted-foreground">No image</span>
                  </div>
                  <Button variant="outline" type="button" className="h-7 text-xs angular-border-small">
                    Upload
                  </Button>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button type="submit" className="h-7 text-xs first-order-accent text-white angular-border-small">
                  Create Specification
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
