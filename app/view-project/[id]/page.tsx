"use client";
// import from '../../styles\globals.css';
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Download, Pencil } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample history data
const historyData = [
  { id: 1, version: "4", date: "2023-08-15", author: "John Doe" },
  { id: 2, version: "3", date: "2023-07-22", author: "Jane Smith" },
  { id: 3, version: "2", date: "2023-06-10", author: "John Doe" },
  { id: 4, version: "1", date: "2023-05-05", author: "John Doe" },
];

// Sample project data
const projectData = {
  id: 1,
  specName: "Standard Specification",
  clientName: "Acme Corp",
  clientEmail: "contact@acmecorp.com",
  clientAddress: "123 Business Ave, Suite 100, New York, NY 10001",
  projectName: "Standard Project",
  startDate: "2023-05-15",
  description: "Standard project implementation for Acme Corp.",
  products: "Product A, Product B, Product C",
  quantity: 10,
  price: 1000,
  executionDate: "2023-06-15",
  executionLocation: "Client Site",
  executionNotes: "Standard implementation process to be followed.",
};

export default function ViewProject({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 w-7" asChild>
              <Link href="/manage-projects">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                View Project
              </h1>
            </div>
          </div>
          <Button
            size="sm"
            className="h-7 text-xs angular-border-small"
            asChild
          >
            <Link href={`/edit-project/${params.id}`}>
              <Pencil className="mr-1 h-3 w-3" /> Edit
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="mb-4 stormtrooper-glass border border-white/20 shadow-sm h-8">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs"
            >
              Project Details
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs"
            >
              Project History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="grid gap-4">
              <Card className="stormtrooper-glass angular-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
                    General Information
                  </CardTitle>
                  <hr />
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-xs">
                    <div className="view-container">
                      <dt className="font-medium text-gray-500" >
                        Project Name
                      </dt>
                      <dd>{projectData.projectName}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        Consultant Name
                      </dt>
                      <dd>John Doe</dd>
                    </div>
                    {/* <div className="md:col-span-2"> */}
                    <div>
                      <dt className="font-medium text-gray-500">Description</dt>
                      <dd>Issuance Description</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        Issuance Date
                      </dt>
                      <dd>{projectData.startDate}</dd>
                    </div>
                  </dl>

                  <br />
                  <CardTitle className="text-sm font-semibold">
                    Abbreviations
                  </CardTitle>
                  <hr />

                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs text-left">
                    <div>
                      <dt className="font-medium text-gray-500">
                        ACS – Access Control System
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        CCD – Charge Coupled Device
                      </dt>
                    </div>
                    {/* <div className="md:col-span-2"> */}
                    <div>
                      <dt className="font-medium text-gray-500">
                        CCTV – Closed Circuit Television
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        DHCP – Dynamic Host Configuration Protocol
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        DNS – Domain Name System
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        DPDT – Double pole, double throw
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        IP – Internet Protocol
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        LPR – License Plate Recognition
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        NVR – Network Video Recorder
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        PoE – Power Over Ethernet
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        SPDT – Single pole, double throw
                      </dt>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">
                        SSL – Secure Sockets Layer
                      </dt>
                    </div>
                  </dl>

                  <br />
                  <CardTitle className="text-sm font-semibold">
                    Definitions
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Definitions provided</div>
                  </dl>

                  <br />
                  <CardTitle className="text-sm font-semibold">
                    Submittals
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Submittals provided</div>
                  </dl>
                </CardContent>
              </Card>

              <Card className="stormtrooper-glass angular-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
                    Products
                  </CardTitle>
                  <hr />
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">
                      <dt className="font-medium text-gray-500">
                        Product List
                      </dt>
                      <dd>{projectData.products}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Quantity</dt>
                      <dd>{projectData.quantity}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Price</dt>
                      <dd>${projectData.price.toLocaleString()}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              <Card className="stormtrooper-glass angular-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
                    Execution
                  </CardTitle>
                  <hr />
                </CardHeader>
                <CardContent>
              

                  {/* <br /> */}
                  <CardTitle className="text-sm font-semibold">
                  Installers
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Installers provided</div>
                  </dl>

                  <br />
                  <CardTitle className="text-sm font-semibold">
                    Examinations
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Examinations provided</div>
                  </dl>
                  <br />
                  <CardTitle className="text-sm font-semibold">
                    Preparations
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Preparations provided</div>
                  </dl>
                  
                  <br />
                  <CardTitle className="text-sm font-semibold">
                    Installation
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Installation provided</div>
                  </dl><br />
                  <CardTitle className="text-sm font-semibold">
                    Labelling
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Labelling provided</div>
                  </dl><br />
                  <CardTitle className="text-sm font-semibold">
                    Programming
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Programming provided</div>
                  </dl><br />
                  <CardTitle className="text-sm font-semibold">
                    Acceptance
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Acceptance provided</div>
                  </dl><br />
                  <CardTitle className="text-sm font-semibold">
                    Owner Personnel
                  </CardTitle>
                  <hr />
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-xs">
                    <div className="md:col-span-2">No Owner Personnel provided</div>
                  </dl>
                </CardContent>
              </Card>
            </div>
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
                          Version
                        </TableHead>
                        <TableHead className="text-xs font-medium text-center">
                          Date
                        </TableHead>
                        <TableHead className="text-xs font-medium text-center">
                          Author
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
