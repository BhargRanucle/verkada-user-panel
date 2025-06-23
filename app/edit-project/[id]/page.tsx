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

export default async function EditProject({ params }: { params: { id: string } }) {
const { id } = await params;
  return (
    <>
      {id && (
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
                <DocGenerator buttonName="Update Changes" id={id} />
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
      )}
    </>
  );
}
