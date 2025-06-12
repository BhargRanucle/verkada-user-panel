"use client";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Download } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DocGenerator from "@/components/DocGenerator/DocGenerator";

// Sample history data
const historyData = [
  { id: 1, version: "4", date: "2023-08-15", author: "John Doe" },
  { id: 2, version: "3", date: "2023-07-22", author: "Jane Smith" },
  { id: 3, version: "2", date: "2023-06-10", author: "John Doe" },
  { id: 4, version: "1", date: "2023-05-05", author: "John Doe" },
];

export default function EditProject({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-7 w-7" asChild>
            <Link href="/manage-projects">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Edit Project
            </h1>
            {/* <p className="text-gray-600 text-xs mt-1">Project #{params.id}</p> */}
          </div>
        </div>

        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="mb-4 stormtrooper-glass border border-white/20 shadow-sm h-8">
            <TabsTrigger
              value="edit"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs"
            >
              Edit Project Details
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs"
            >
              Project History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit">
            <Card className="stormtrooper-glass angular-border">
              {/* <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Project Details</CardTitle>
              </CardHeader> */}
              <CardContent>
                <DocGenerator />
                {/* <Accordion type="multiple" className="w-full">

                  <AccordionItem value="general" className="border-b">
                    <AccordionTrigger className="text-sm font-medium py-2">General Information</AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <Label htmlFor="projectName" className="text-xs">
                              Project Name
                            </Label>
                            <Input
                              id="projectName"
                              defaultValue="Standard Project"
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
                              defaultValue="2023-05-15"
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
                            defaultValue="Standard project implementation for Acme Corp."
                            className="text-xs angular-border-small"
                            rows={3}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="products" className="border-b">
                    <AccordionTrigger className="text-sm font-medium py-2">Products</AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <Label htmlFor="productList" className="text-xs">
                            Product List
                          </Label>
                          <Textarea
                            id="productList"
                            defaultValue="Product A, Product B, Product C"
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
                              defaultValue="10"
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
                              defaultValue="1000"
                              className="h-7 text-xs angular-border-small"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="execution" className="border-b">
                    <AccordionTrigger className="text-sm font-medium py-2">Execution</AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <Label htmlFor="executionDate" className="text-xs">
                              Execution Date
                            </Label>
                            <Input
                              id="executionDate"
                              type="date"
                              defaultValue="2023-06-15"
                              className="h-7 text-xs angular-border-small"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="executionLocation" className="text-xs">
                              Location
                            </Label>
                            <Input
                              id="executionLocation"
                              defaultValue="Client Site"
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
                            defaultValue="Standard implementation process to be followed."
                            className="text-xs angular-border-small"
                            rows={3}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}

                <div className="flex justify-end mt-4">
                  <Button
                    type="submit"
                    className="h-8 text-xs black-glass text-white hover:bg-gray-900 angular-border-small"
                  >
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="stormtrooper-glass angular-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">
                  Project History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border angular-border-small overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-xs font-medium text-center">
                          Sr No.
                        </TableHead>
                        <TableHead className="text-xs font-medium text-center">
                          Date
                        </TableHead>
                        <TableHead className="text-xs font-medium text-center">
                          Consultant
                        </TableHead>
                        <TableHead className="text-xs font-medium text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historyData.map((version) => (
                        <TableRow key={version.id}>
                          <TableCell className="text-xs text-center">
                            {version.version}
                          </TableCell>
                          <TableCell className="text-xs text-center">
                            {version.date}
                          </TableCell>
                          <TableCell className="text-xs text-center">
                            {version.author}
                          </TableCell>
                          <TableCell className="text-right flex justify-center items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 text-xs angular-border-small flex items-center gap-1"
                            >
                              <Download className="h-3 w-3" /> DOCX
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 text-xs angular-border-small flex items-center gap-1"
                            >
                              <Download className="h-3 w-3" /> PDF
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
