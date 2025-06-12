"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import DocGenerator from "@/components/DocGenerator/DocGenerator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProjectForm({ params }: { params: { id: string } }) {
  const [activeSection, setActiveSection] = useState<string>("client");
  const [openItems, setOpenItems] = useState<string[]>([
    "general",
    "products",
    "execution",
  ]);
  const searchParams = useSearchParams();

  const specName = searchParams.get("name") || "Unknown Specification";
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-7 w-7" asChild>
            <Link href="/create-project">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Create Project
            </h1>
            <p className="text-gray-600 text-xs mt-1">
              {specName ? `  ${specName}` : ""}
            </p>
          </div>
        </div>

        <Card className="stormtrooper-glass angular-border">
          <CardHeader className="pb-2">
            {/* <CardTitle className="text-sm font-semibold">
              Project Details:
            </CardTitle> */}
             <DocGenerator />
          </CardHeader>
          <CardContent>
            {/* <Accordion
              type="multiple"
              className="w-full space-y-4"
              value={openItems}
              onValueChange={(values) => setOpenItems(values)}
            >
              {[
                {
                  value: "general",
                  title: "General Information",
                  content: (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label htmlFor="projectName" className="text-xs">
                            Project Name
                          </Label>
                          <Input
                            id="projectName"
                            className="h-7 text-xs angular-border-small"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="projectDate" className="text-xs">
                            Start Date
                          </Label>
                          <Input
                            id="projectDate"
                            type="date"
                            className="h-7 text-xs angular-border-small"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="projectDescription" className="text-xs">
                          Project Description
                        </Label>
                        <Textarea
                          id="projectDescription"
                          className="text-xs angular-border-small"
                          rows={3}
                        />
                      </div>
                    </>
                  ),
                },
                {
                  value: "products",
                  title: "Products",
                  content: (
                    <>
                      <div className="space-y-1">
                        <Label htmlFor="productList" className="text-xs">
                          Product List
                        </Label>
                        <Textarea
                          id="productList"
                          className="text-xs angular-border-small"
                          rows={3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label htmlFor="productQuantity" className="text-xs">
                            Quantity
                          </Label>
                          <Input
                            id="productQuantity"
                            type="number"
                            className="h-7 text-xs angular-border-small"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="productPrice" className="text-xs">
                            Price
                          </Label>
                          <Input
                            id="productPrice"
                            type="number"
                            className="h-7 text-xs angular-border-small"
                          />
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  value: "execution",
                  title: "Execution",
                  content: (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label htmlFor="executionDate" className="text-xs">
                            Execution Date
                          </Label>
                          <Input
                            id="executionDate"
                            type="date"
                            className="h-7 text-xs angular-border-small"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label
                            htmlFor="executionLocation"
                            className="text-xs"
                          >
                            Location
                          </Label>
                          <Input
                            id="executionLocation"
                            className="h-7 text-xs angular-border-small"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="executionNotes" className="text-xs">
                          Execution Notes
                        </Label>
                        <Textarea
                          id="executionNotes"
                          className="text-xs angular-border-small"
                          rows={3}
                        />
                      </div>
                    </>
                  ),
                },
              ].map((section) => (
                <div
                  key={section.value}
                  className="bg-white border rounded-[5px] p-4"
                >
                  <AccordionItem value={section.value} className="border-0">
                    <AccordionTrigger className="text-sm font-medium py-2">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-1 space-y-3">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion> */}

            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="h-8 text-xs black-glass text-white hover:bg-gray-900 angular-border-small"
              >
                Create Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
