"use client"

import { useState } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const specifications = [
  { id: 1, name: "Video Surveillance by Verkada", thumbnail: "/placeholder.svg?height=120&width=160" },
  { id: 2, name: "Access Control by Verkada", thumbnail: "/placeholder.svg?height=120&width=160" },
  { id: 3, name: "Intercom Entry by Verkada", thumbnail: "/placeholder.svg?height=120&width=160" },
  { id: 4, name: "Video Surveillance 2 by Verkada", thumbnail: "/placeholder.svg?height=120&width=160" },
  { id: 5, name: "Intrusion Detection by Verkada", thumbnail: "/placeholder.svg?height=120&width=160" },
  { id: 6, name: "Access Control Badges", thumbnail: "/placeholder.svg?height=120&width=160" },
]

export default function CreateProject() {
  const [selectedSpec, setSelectedSpec] = useState<number | null>(null)

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Create Project
            </h1>
            <p className="text-gray-600 text-xs mt-1">Select a specification to begin</p>
          </div>
          {selectedSpec && (
            <Button className="black-glass text-white hover:bg-gray-900 text-xs angular-border-small h-8" asChild>
              <Link href={{pathname: `/create-project/${selectedSpec}`,
                  query: { name: specifications.find((s) => s.id === selectedSpec)?.name },
                }}
              >
                <span className="flex items-center">
                  Next <ChevronRight className="ml-1 h-3 w-3" />
                </span>
              </Link>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specifications.map((spec) => (
            <Card
              key={spec.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 stormtrooper-glass angular-border ${
                selectedSpec === spec.id ? "ring-1 ring-gray-400 shadow-lg" : ""
              }`}
              onClick={() => setSelectedSpec(spec.id)}
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-full h-[120px] bg-gradient-to-br from-gray-100 to-gray-200 rounded angular-border-small flex items-center justify-center overflow-hidden shadow-inner mb-3">
                  <div
                    className="w-full h-full flex items-center justify-center text-xs font-semibold text-gray-700 bg-gradient-to-br from-gray-100 to-gray-200 rounded angular-border-small shadow-inner"
                  >
                    {spec.name}
                  </div>

                  </div>
                  {/* <h3 className="font-medium text-sm text-gray-900 mb-3">{spec.name}</h3> */}
                  <Button
                    className={`w-full text-xs angular-border-small ${
                      selectedSpec === spec.id
                        ? "black-glass text-white hover:bg-gray-900"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedSpec(spec.id)
                    }}
                  >
                    {selectedSpec === spec.id ? "Selected" : "Select"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
