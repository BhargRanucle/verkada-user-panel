import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Part1SectionProps {
  abbreviations: Record<string, boolean>;
  setAbbreviations: (abbreviations: Record<string, boolean>) => void;
  submittals: Record<string, boolean>;
  setSubmittals: (submittals: Record<string, boolean>) => void;
}

const Part1Section: React.FC<Part1SectionProps> = ({
  abbreviations,
  setAbbreviations,
  submittals,
  setSubmittals,
}) => {
  const abbreviationsList = [
    "ACS",
    "API",
    "CCD",
    "CCTV",
    "CMOS",
    "DHCP",
    "DNS",
    "DPDT",
    "FPS",
    "IP",
    "LAN",
    "LPR",
    "NFC",
    "NVR",
    "ODBC",
    "PoE",
    "RAM",
    "SPDT",
    "SSL",
    "SSO",
    "TCP",
    "UPS",
    "VMS",
    "WDR",
  ];

  const submittalsList = [
    "Provide the following submittals for review and approval",
    "Submit Product Data and Shop Drawings submittals for review and approval prior to commencement of work",
    "Submit System Programming submittals for review and approval prior to commencement of work",
    "Submit Operation and Maintenance Manuals (O&M's) submittals for review and approval prior to the completion of the project",
    'Submit "As-Built" Record Drawings submittals for review and approval prior to the completion of the project',
  ];

  const handleAbbreviationChange = (abbreviation: string, checked: boolean) => {
    setAbbreviations({ ...abbreviations, [abbreviation]: checked });
  };

  const handleSubmittalChange = (submittal: string, checked: boolean) => {
    setSubmittals({ ...submittals, [submittal]: checked });
  };

  return (
    <Card className="mb-3">
      <CardContent className="p-3">
        <div className="border-b-[#e1e7ef] pb-2">
          <Label htmlFor="license-term" className="text-xs font-bold">
            Abbreviations
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1">
            {abbreviationsList.map((abbr) => (
              <div key={abbr} className="flex items-center space-x-1">
                <Checkbox
                  id={`abbr-${abbr}`}
                  checked={abbreviations[abbr] || false}
                  onCheckedChange={(checked) =>
                    handleAbbreviationChange(abbr, checked as boolean)
                  }
                  className="size-3"
                />
                <Label htmlFor={`abbr-${abbr}`} className="text-xs">
                  {abbr}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b-[#e1e7ef] pb-2">
        <Label htmlFor="license-term" className="text-xs font-bold">
        Submittals
          </Label>
          {submittalsList.map((submittal, index) => (
            <div key={index} className="flex items-start space-x-1">
              <Checkbox
                id={`submittal-${index}`}
                checked={submittals[submittal] || false}
                onCheckedChange={(checked) =>
                  handleSubmittalChange(submittal, checked as boolean)
                }
                className="size-3 mt-0.5"
              />
              <Label htmlFor={`submittal-${index}`} className="text-xs">
                {submittal}
              </Label>
            </div>
          ))}
        </div>
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={["abbreviations", "submittals"]}
        >
          {/* <AccordionItem value="abbreviations">
            <AccordionTrigger className="text-left text-sm py-2">
              Abbreviations
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1">
                {abbreviationsList.map((abbr) => (
                  <div key={abbr} className="flex items-center space-x-1">
                    <Checkbox
                      id={`abbr-${abbr}`}
                      checked={abbreviations[abbr] || false}
                      onCheckedChange={(checked) =>
                        handleAbbreviationChange(abbr, checked as boolean)
                      }
                      className="size-3"
                    />
                    <Label htmlFor={`abbr-${abbr}`} className="text-xs">
                      {abbr}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem> */}

          {/* <AccordionItem value="submittals">
            <AccordionTrigger className="text-left text-sm py-2">
              Submittals
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {submittalsList.map((submittal, index) => (
                  <div key={index} className="flex items-start space-x-1">
                    <Checkbox
                      id={`submittal-${index}`}
                      checked={submittals[submittal] || false}
                      onCheckedChange={(checked) =>
                        handleSubmittalChange(submittal, checked as boolean)
                      }
                      className="size-3 mt-0.5"
                    />
                    <Label htmlFor={`submittal-${index}`} className="text-xs">
                      {submittal}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Part1Section;
