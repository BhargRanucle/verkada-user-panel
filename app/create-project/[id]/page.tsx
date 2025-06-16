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

        {/* <Card className=""> */}
          <CardHeader className="pb-2">
            {/* <CardTitle className="text-sm font-semibold">
              Project Details:
            </CardTitle> */}
          </CardHeader>
          <DocGenerator />
         

            <div className="flex justify-end mx-4">
              <Button
                type="submit"
                className="h-8 text-xs black-glass text-white hover:bg-gray-900 angular-border-small"
              >
                Create Project
              </Button>
            </div>
        {/* </Card> */}
      </div>
    </MainLayout>
  );
}
