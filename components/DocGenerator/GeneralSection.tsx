import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// import ReactQuill from "react-quill";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Textarea } from "../ui/textarea";

interface GeneralSectionProps {
  projectName: string;
  setProjectName: (value: string) => void;
  consultantName: string;
  setConsultantName: (value: string) => void;
  issuanceDescription: string;
  setIssuanceDescription: (value: string) => void;
  issuanceDate: string;
  setIssuanceDate: (value: string) => void;
  abbreviations: Record<string, boolean>;
  setAbbreviations: (abbreviations: Record<string, boolean>) => void;
  submittals: Record<string, boolean>;
  setSubmittals: (submittals: Record<string, boolean>) => void;
  quillSubmittals: string;
  setQuillSubmittals: (value: string) => void;
  definitionsQuill: string;
  setdefinitionsQuill: (value: string) => void;
}

const GeneralSection: React.FC<GeneralSectionProps> = ({
  projectName,
  setProjectName,
  consultantName,
  setConsultantName,
  issuanceDescription,
  setIssuanceDescription,
  issuanceDate,
  setIssuanceDate,
  abbreviations,
  setAbbreviations,
  submittals,
  setSubmittals,
  quillSubmittals,
  setQuillSubmittals,
  definitionsQuill,
  setdefinitionsQuill,
}) => {
  const abbreviationsList = [
    "ACS – Access Control System",
    "API – Application Programming Interface",
    "CCD – Charge Coupled Device",
    "CCTV – Closed Circuit Television",
    "CMOS – Complementary Metal-Oxide Semiconductor",
    "DHCP – Dynamic Host Configuration Protocol",
    "DNS – Domain Name System",
    "DPDT – Double pole, double throw",
    "FPS – Frames Per Second",
    "IP – Internet Protocol",
    "LAN – Local Area Network",
    "LPR – License Plate Recognition",
    "NFC – Near Field Communications",
    "NVR – Network Video Recorder",
    "ODBC – Open Database Connectivity ",
    "PoE – Power Over Ethernet",
    "RAM – Random Access Memory",
    "SPDT – Single pole, double throw",
    "SSL – Secure Sockets Layer",
    "SSO – Single sign-on",
    "TCP – Transport Control Protocol",
    "UPS – Uninterruptible Power Supply",
    "VMS – Video Management System",
    "WDR – Wide Dynamic Range",
  ];

  const submittalHTML = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Provide the following submittals for review and approval:</span></p><ol><li><span style="color: rgb(0, 0, 0);">Product Data and Shop Drawings</span></li><li>System Programming</li><li><span style="color: rgb(0, 0, 0);">Operation and Maintenance Manuals (O&amp;M’s)</span></li><li><span style="color: rgb(0, 0, 0);">“As-Built” Record Drawings</span></li></ol><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Submit Product Data and Shop Drawings submittals for review and approval prior to commencement of work:</span></p><ol><li>Manufacturer's name, brand name, exact part number, options, accessories, and catalog cutsheet references for all equipment supplied including cabling. Include manufacturer’s published installation instructions. Indicate UL listings for system components.</li><li>Complete wiring diagrams for all components, including cable types and quantities, routings, floor plans indicating device locations, conduit sizes, and point-to-point termination and riser diagrams.</li><li>Device legend on the shop drawings that identifies the symbols used for all devices including mounting heights, back box requirements, part and model numbers, operating voltages (if applicable), wire and cabling requirements, label text, and panel termination points.</li><li>Fully dimensioned shop drawings including floorplans, enlarged plans, elevations, and installation details of all security devices, equipment rooms and closets, consoles, controllers, racks, enclosures, and fabricated equipment, showing locations of all major components including mounting details. Indicate UL system and rating listings for penetration firestop systems through rated partitions and floors.</li><li>Bill of Materials.</li><li>Material Safety Data Sheets (MSDS) for fire stopping materials and sealants.</li></ol><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Submit System Programming submittals for review and approval prior to commencement of work:&nbsp;</span></p><ol><li>Proposed programming, including nomenclature conventions, device names and text descriptions, timings, camera call-up trigger alarms with associated cameras, and sequence of operations.</li><li>Approved device names and text descriptions as programmed into the security systems shall be reflected on the “As-Built” Record Drawings as well as on device and cable labels.</li></ol><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Submit Operation and Maintenance Manuals (O&amp;M’s) submittals for review and approval prior to the completion of the project:</span></p><ol><li>Updated product data and shop drawings submittals reflecting the final conditions.</li><li>Warranty letter with start and end date.</li><li>Warranty service and maintenance contact information: including names, address, phone number, and website address. Provide specific instructions or forms as required to initiate a trouble ticket or work order request.</li><li>Letter indicating that all software and licensing is the sole property of the Owner.</li><li>Troubleshooting checklist information.</li><li>Replacement parts and consumables ordering information including the contact information for local sources.</li><li>Provide an updated System Programming submittal including:</li></ol><ul><li><span style="color: rgb(0, 0, 0);">a.&nbsp;Final listing of doors, locations, and normal status in CSV format.</span></li><li><span style="color: rgb(0, 0, 0);">b.&nbsp;System administration and management operating instructions.&nbsp;</span></li><li><span style="color: rgb(0, 0, 0);">c.&nbsp;Setting up Users, User Groups, Access Levels, Doors, Door Schedules, and Exceptions.</span></li><li><span style="color: rgb(0, 0, 0);">d.&nbsp;Assigning Access Groups to all Users.</span></li><li><span style="color: rgb(0, 0, 0);">e.&nbsp;Monitoring system activity.</span></li><li><span style="color: rgb(0, 0, 0);">f.&nbsp;Running standard reports.</span></li><li><span style="color: rgb(0, 0, 0);">g.&nbsp;Setting up logins and permissions.</span></li></ul><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Submit “As-Built” Record Drawings submittals for review and approval prior to the completion of the project:</span></p><ol><li>Maintain a complete set of “As-Built” Record Drawings at the project site updated with mark-ups of the actual installation conditions.</li><li>Prior to the completion of the project transfer all installation conditions mark-ups to electronic drawings and submit to the Owner in CAD and PDF formats.</li></ol>`;

  useEffect(()=> {
   setQuillSubmittals(submittalHTML);
  },[]);

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
    <Card className="mb-3 main-section px-2">
      <CardContent className="p-3">
        <div className="border-b-[1px] border-b-[#e1e7ef] pb-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="space-y-1">
              <Label htmlFor="project-name" className="text-xs font-bold">
                Project Name
              </Label>
              <Input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="consultant-name" className="text-xs font-bold">
                Consultant Name
              </Label>
              <Input
                id="consultant-name"
                value={consultantName}
                onChange={(e) => setConsultantName(e.target.value)}
                placeholder="Enter consultant name"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="issuance-description" className="text-xs font-bold">
              Issuance Description
              </Label>
              <Input
                id="issuance-description"
                value={issuanceDescription}
                onChange={(e) => setIssuanceDescription(e.target.value)}
                placeholder="Issuance Description"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="issuance-date" className="text-xs font-bold">
              Issuance Date
              </Label>
              <Input
                id="issuance-date"
                value={issuanceDate}
                onChange={(e) => setIssuanceDate(e.target.value)}
                placeholder="Issuance Date"
                className="h-8 text-sm"
                type="date"
              />
            </div>
          </div>
        </div>

        <div className="border-b-[1px] border-b-[#e1e7ef] pb-2">
          <Label htmlFor="license-term" className="text-xs font-bold">
            Abbreviations
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-1">
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

        <div className="">
          <Label htmlFor="license-term" className="text-xs font-bold">
           Definitions
          </Label>
          {/* <ReactQuill
            theme="snow"
            value={definitionsQuill || ""}
            onChange={(content) => setdefinitionsQuill(content)}
            className="text-xs"
            modules={{
              toolbar: [[{ list: "ordered" }, { list: "bullet" }], ["clean"]],
            }}
          /> */}
          <Textarea name="" id="" className="w-full"></Textarea>
        </div>

        <div className="">
          <Label htmlFor="license-term" className="text-xs font-bold">
            Submittals
          </Label>
          <Textarea name="" id="" className="w-full"></Textarea>
          {/* <ReactQuill
            theme="snow"
            value={quillSubmittals || ""}
            onChange={(content) => setQuillSubmittals(content)}
            className="text-xs"
            modules={{
              toolbar: [[{ list: "ordered" }, { list: "bullet" }], ["clean"]],
            }}
          /> */}
        </div>

        
      </CardContent>
    </Card>
  );
};

export default GeneralSection;
