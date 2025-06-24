"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Pencil, Trash2, Search, Download } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const specifications = [
  {
    id: 1,
    name: "Video Surveillance by Verkada",
    thumbnail: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 2,
    name: "Access Control by Verkada",
    thumbnail: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 3,
    name: "Intercom Entry by Verkada",
    thumbnail: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 4,
    name: "Video Surveillance 2 by Verkada",
    thumbnail: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 5,
    name: "Intrusion Detection by Verkada",
    thumbnail: "/placeholder.svg?height=120&width=160",
  },
  {
    id: 6,
    name: "Access Control Badges",
    thumbnail: "/placeholder.svg?height=120&width=160",
  },
];

// Sample data for projects
const projects = [
  {
    id: 1,
    specName: "Video Surveillance by Verkada",
    createdDate: "2023-05-15 10:00 PM",
    updatedDate: "2024-05-17 11:00 AM"
  },
  {
    id: 2,
    specName: "Access Control by Verkada",
    createdDate: "2023-06-22 09:00 AM",
    updatedDate: "2024-05-18 07:00 PM"
  },
  {
    id: 3,
    specName: "Intercom Entry by Verkada",
    createdDate: "2023-07-10 10:00 PM",
    updatedDate: "2024-06-20 10:00 AM"
  },
  {
    id: 4,
    specName: "Video Surveillance 2 by Verkada",
    createdDate: "2023-08-05 10:00 PM",
    updatedDate: "2024-06-08 10:00 PM"
  },
  {
    id: 5,
    specName: "Intrusion Detection by Verkada",
    createdDate: "2023-08-05 10:00 AM",
    updatedDate: "2024-05-06 10:00 PM"
  },
  {
    id: 6,
    specName: "Access Control Badges",
    createdDate: "2023-08-05 10:00 AM",
    updatedDate: "2024-06-11 10:00 AM"
  },
];

export default function ManageProjects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.specName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Manage Projects
            </h1>
            <p className="text-gray-600 text-xs mt-1">
              View and manage all your projects
            </p>
          </div>
          <Button
            size="sm"
            className="first-order-accent text-white hover:bg-gray-900 text-xs angular-border-small h-8"
            asChild
          >
            <Link href="/create-project">
              <Plus className="mr-1 h-3 w-3" /> Create New Project
            </Link>
          </Button>
        </div>

        <Card className="stormtrooper-glass angular-border">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <CardTitle className="text-sm font-semibold">Projects</CardTitle>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-7 h-7 text-xs border border-black/30 bg-white/50 focus:bg-white/80 transition-all duration-200"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border angular-border-small overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-xs font-medium">
                      Project Name
                    </TableHead>
                   
                    <TableHead className="text-xs font-medium">
                      Created At
                    </TableHead>
                     <TableHead className="text-xs font-medium">
                      Last Updated At
                    </TableHead>
                    <TableHead className="text-xs font-medium text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="text-xs">
                        {project.specName}
                      </TableCell>
                      
                      <TableCell className="text-xs">
                        {project.createdDate}
                      </TableCell>
                      <TableCell className="text-xs">
                        {project.updatedDate}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-center gap-1">
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
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            asChild
                          >
                            <Link href={`/view-project/${project.id}`}>
                              <Eye className="h-3 w-3" />
                              <span className="sr-only">View</span>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            asChild
                          >
                            <Link href={`/edit-project/${project.id}`}>
                              <Pencil className="h-3 w-3" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-xs">
            <label htmlFor="itemsPerPage" className="text-gray-600">
              Items per page:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to page 1
              }}
              className="border border-gray-300 rounded-md px-2 py-1 text-xs bg-white"
            >
              {[10, 25, 50].map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Button
              size="sm"
              variant="outline"
              className="h-7 text-xs"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              size="sm"
              variant="outline"
              className="h-7 text-xs"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
