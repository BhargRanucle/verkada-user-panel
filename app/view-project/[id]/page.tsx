"use client";
// import from '../../styles\globals.css';
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronLeft, Download, Pencil } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "react-quill-new/dist/quill.core.css";
import "react-quill-new/dist/quill.bubble.css";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const historyData = [
  { id: 1, version: "4", date: "2023-08-15", author: "John Doe" },
  { id: 2, version: "3", date: "2023-07-22", author: "Jane Smith" },
  { id: 3, version: "2", date: "2023-06-10", author: "John Doe" },
  { id: 4, version: "1", date: "2023-05-05", author: "John Doe" },
];

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

const initialValues = {
  projectName: "Video Surveillance",
  consultantName: "Bhart Dan Gadhvi",
  issuanceDescription: "Issuance Description",
  issuanceDate: new Date("2025-05-15"),
  abbreviations: [
    { name: "ACS", description: "Access Control System", checked: true },
    {
      name: "API",
      description: "Application Programming Interface",
      checked: false,
    },
    { name: "CCD", description: "Charge Coupled Device", checked: true },
    { name: "CCTV", description: "Closed Circuit Television", checked: true },
    {
      name: "CMOS",
      description: "Complementary Metal-Oxide Semiconductor",
      checked: false,
    },
    {
      name: "DHCP",
      description: "Dynamic Host Configuration Protocol",
      checked: true,
    },
    { name: "DNS", description: "Domain Name System", checked: true },
    { name: "DPDT", description: "Double pole, double throw", checked: true },
    { name: "FPS", description: "Frames Per Second", checked: false },
    { name: "IP", description: "Internet Protocol", checked: true },
    { name: "LAN", description: "Local Area Network", checked: false },
    { name: "LPR", description: "License Plate Recognition", checked: true },
    { name: "NFC", description: "Near Field Communications", checked: false },
    { name: "NVR", description: "Network Video Recorder", checked: true },
    { name: "ODBC", description: "Open Database Connectivity", checked: false },
    { name: "PoE", description: "Power Over Ethernet", checked: true },
    { name: "RAM", description: "Random Access Memory", checked: false },
    { name: "SPDT", description: "Single pole, double throw", checked: true },
    { name: "SSL", description: "Secure Sockets Layer", checked: true },
    { name: "SSO", description: "Single sign-on", checked: false },
    { name: "TCP", description: "Transport Control Protocol", checked: false },
    {
      name: "UPS",
      description: "Uninterruptible Power Supply",
      checked: false,
    },
    { name: "VMS", description: "Video Management System", checked: false },
    { name: "WDR", description: "Wide Dynamic Range", checked: false },
  ],
  definitions: "",
  submittals: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Provide the following submittals for review and approval:</span></p><ol><li><span style="color: rgb(0, 0, 0);">Product Data and Shop Drawings</span></li><li>System Programming</li><li><span style="color: rgb(0, 0, 0);">Operation and Maintenance Manuals (O&amp;M’s)</span></li><li><span style="color: rgb(0, 0, 0);">“As-Built” Record Drawings</span></li></ol><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Submit Product Data and Shop Drawings submittals for review and approval prior to commencement of work:</span></p><ol><li>Manufacturer's name, brand name, exact part number, options, accessories, and catalog cutsheet references for all equipment supplied including cabling. Include manufacturer’s published installation instructions. Indicate UL listings for system components.</li><li>Complete wiring diagrams for all components, including cable types and quantities, routings, floor plans indicating device locations, conduit sizes, and point-to-point termination and riser diagrams.</li><li>Device legend on the shop drawings that identifies the symbols used for all devices including mounting heights, back box requirements, part and model numbers, operating voltages (if applicable), wire and cabling requirements, label text, and panel termination points.</li><li>Fully dimensioned shop drawings including floorplans, enlarged plans, elevations, and installation details of all security devices, equipment rooms and closets, consoles, controllers, racks, enclosures, and fabricated equipment, showing locations of all major components including mounting details. Indicate UL system and rating listings for penetration firestop systems through rated partitions and floors.</li><li>Bill of Materials.</li><li>Material Safety Data Sheets (MSDS) for fire stopping materials and sealants.</li></ol><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Submit System Programming submittals for review and approval prior to commencement of work:&nbsp;</span></p><ol><li>Proposed programming, including nomenclature conventions, device names and text descriptions, timings, camera call-up trigger alarms with associated cameras, and sequence of operations.</li><li>Approved device names and text descriptions as programmed into the security systems shall be reflected on the “As-Built” Record Drawings as well as on device and cable labels.</li></ol><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Submit Operation and Maintenance Manuals (O&amp;M’s) submittals for review and approval prior to the completion of the project:</span></p><ol><li>Updated product data and shop drawings submittals reflecting the final conditions.</li><li>Warranty letter with start and end date.</li><li>Warranty service and maintenance contact information: including names, address, phone number, and website address. Provide specific instructions or forms as required to initiate a trouble ticket or work order request.</li><li>Letter indicating that all software and licensing is the sole property of the Owner.</li><li>Troubleshooting checklist information.</li><li>Replacement parts and consumables ordering information including the contact information for local sources.</li><li>Provide an updated System Programming submittal including:</li></ol><ul><li><span style="color: rgb(0, 0, 0);">a.&nbsp;Final listing of doors, locations, and normal status in CSV format.</span></li><li><span style="color: rgb(0, 0, 0);">b.&nbsp;System administration and management operating instructions.&nbsp;</span></li><li><span style="color: rgb(0, 0, 0);">c.&nbsp;Setting up Users, User Groups, Access Levels, Doors, Door Schedules, and Exceptions.</span></li><li><span style="color: rgb(0, 0, 0);">d.&nbsp;Assigning Access Groups to all Users.</span></li><li><span style="color: rgb(0, 0, 0);">e.&nbsp;Monitoring system activity.</span></li><li><span style="color: rgb(0, 0, 0);">f.&nbsp;Running standard reports.</span></li><li><span style="color: rgb(0, 0, 0);">g.&nbsp;Setting up logins and permissions.</span></li></ul><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Submit “As-Built” Record Drawings submittals for review and approval prior to the completion of the project:</span></p><ol><li>Maintain a complete set of “As-Built” Record Drawings at the project site updated with mark-ups of the actual installation conditions.</li><li>Prior to the completion of the project transfer all installation conditions mark-ups to electronic drawings and submit to the Owner in CAD and PDF formats.</li></ol>`,
  installers: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Installation shall be performed by technicians that have successfully completed the Verkada Certified Engineer (VCE) program. For more information, visit www.verkada.com/partners/trainings.&nbsp;</span></p>`,
  examination: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Installation surfaces shall be clean and free from dust, dirt, and obstructions. </span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Examine pathway elements intended for cables. Check raceways, cable trays, and other elements for compliance with space allocations, installation tolerances, hazards to cable installation, and other conditions affecting installation. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Examine rough-in for LAN and control cable conduit systems to server, PCs, controllers, cameras, and other cable-connected devices to verify actual locations of conduit and back boxes before device installation. </span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Proceed with installation only after unsatisfactory conditions have been corrected.</span></p>`,
  preparation: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Refer to the Verkada Quick Start Guide applicable to each product.</span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Pre-Installation Conference: Prior to installation arrange conference between supplier, Owner, and related trades to review materials, procedures, and coordinating related work. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Furnish or coordinate any inserts required for building into concrete, masonry, and other work, to support and attach work of this Section. Furnish or coordinate in ample time to comply with schedule of work into which inserts are built. </span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Verify that power and outlets are in correct locations. </span></p><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Verify that building structure is properly prepared for mounting, attachment, and support of equipment. </span></p><p><span style="color: rgb(0, 0, 0);">F.&nbsp;Prior to installation of systems components and devices, verify all required preparations have been properly performed and that substrates are acceptable for </span></p><ol><li>Verify all rough-ins and field dimensions.</li></ol><p><span style="color: rgb(0, 0, 0);">G.&nbsp;Report in writing to the Owner’s representative any prevailing conditions that will adversely affect satisfactory execution of work in this Section. </span></p><ol><li>Owner or their representative reserves the right to review proposed methods of construction and installation, reject proposed methods, and have the installation done in a satisfactory method at the Contractor's cost.</li></ol>`,
  installation: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Refer to the Verkada Quick Start Guide applicable to each product.</span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;For support, proceed to www.verkada.com/support.</span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Sequencing:&nbsp;The work shall be performed in the following sequence, unless directed otherwise by Owner or their representative:&nbsp;</span></p><ol><li>Installation of cables and network.&nbsp;</li><li>Installation of new cameras.</li><li>Installation of front-end equipment.</li><li>Commissioning of the new system components.</li><li>End User training</li></ol><p>D. Install work in accordance with manufacturer's recommendations and instructions as well as final shop drawings. All components should be installed so as to allow easy access for service in the future.&nbsp;</p><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Anchor components securely in place, plumb, level, and accurately aligned. </span></p><p><span style="color: rgb(0, 0, 0);">F.&nbsp;For solution products located in equipment traffic areas, and that are exposed to damage due to collision or impact from forklifts, or manually moved carts, carriers, or other equipment used by the Owner, provide protective bollards, railings, coverings etc. to ensure that all products installed are properly protected from such damage.&nbsp;</span></p><p><span style="color: rgb(0, 0, 0);">G.&nbsp;Provide fastenings, plates, and other incidental items required for complete and operational installation. </span></p><p><span style="color: rgb(0, 0, 0);">H.&nbsp;Provide required electrical work in accordance with Code requirements.</span></p><p><span style="color: rgb(0, 0, 0);">I.&nbsp;Security and protection:&nbsp;</span></p><ol><li>Maintain strict security during the installation of equipment and software. Rooms housing the control station, and workstations that have been powered up shall be locked and secured during periods when a qualified operator in the employ of Contractor is not present.</li><li>Equipment protection: Provide protective covers, fenders, and barriers as necessary to maintain work of this Section in same condition as installed until time of substantial completion.</li></ol><p>J. Cable requirements:</p><ol><li>Twisted, shielded, plenum-rated type cable shall be used.&nbsp;</li><li>All exposed cables shall be in rigid conduit, electrical metallic tubing (EMT) raceway, or wire mold as approved by the Owner.</li><li>All concealed cables routed in j-hook pathways shall be fastened to the structure at least every four feet.</li></ol>`,
  labeling: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Equipment and product labels shall be printed on self-adhesive labels. Handwritten labels or writing directly on the equipment enclosures is not acceptable.</span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Label equipment and products with the device address as programmed into the security systems and as reflected on the “As-Built” Record Drawings. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Label networked equipment enclosures with the IP address.</span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Cables shall be individually labeled at origin and termination.</span></p>`,
  programming: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Complete all Verkada Command configuration programming. </span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Add all Verkada Cameras to Command via serial number. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Contract will coordinate with the Owner to ensure that new components have appropriate network connections. </span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Coordinate with the Owner to ensure that new components will be properly programmed into the system.</span></p><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Change default passwords to new custom secure passwords as directed by the Owner.</span></p>`,
  acceptance_testing: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Final Test and Acceptance Plan</span></p><ol><li>Develop a final test and acceptance plan to identify each new system component, intent of test, test method, and expected results.</li><li>Each component listed in the plan shall include space for test part signatures, brief comments, time of test and pass/fail check boxes.</li><li>Test all equipment, products, and devices in accordance with the plan to ensure completely operational and fully functional security systems. Submit a written final test and acceptance report for review and approval.</li><li>The report shall be submitted to the Owner’s representative at least 30 days prior to the scheduled system acceptance test.&nbsp;</li><li>System acceptance of the access control system shall be conditioned upon successful completion and operational demonstration of all system functions and components as documented in the final test and acceptance report.</li></ol><p><span style="color: rgb(0, 0, 0);">B.&nbsp;System Acceptance&nbsp;</span></p><ol><li>System acceptance shall not occur until after the following activities have been successfully completed:&nbsp;</li></ol><ul><li><span style="color: rgb(0, 0, 0);">a.&nbsp;Correction of all deficiencies and punch list items noted on the final test and acceptance report.</span></li><li><span style="color: rgb(0, 0, 0);">b.&nbsp;Acceptance of final test and acceptance report.</span></li><li><span style="color: rgb(0, 0, 0);">c.&nbsp;Acceptance of all project close-out submittals.</span></li><li><span style="color: rgb(0, 0, 0);">d.&nbsp;Delivery of final project close-out documentation.</span></li><li><span style="color: rgb(0, 0, 0);">e.&nbsp;Successful training and demonstration, including operation of systems, systems administration, and system management.</span></li><li><span style="color: rgb(0, 0, 0);">f.&nbsp;Purging of Contractor user privileges and return of all credentials.</span></li></ul>`,
  owner_personnel_training: `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;On-site operator training:&nbsp;</span></p><ol><li><span style="color: rgb(0, 0, 0);">Instruct operating staff in proper operation, including hands-on training.&nbsp;</span></li><li>Minimum of two, four-hour sessions covering the operations for each system installed.&nbsp;</li><li>Training sessions shall be provided to supervisors, end-user staff, security staff, maintenance personnel, IT personnel, and any other personnel designated by the Owner.&nbsp;</li><li>Provide training sessions on all work shifts, including day, evening, and night shifts.</li></ol><p><span style="color: rgb(0, 0, 0);">B.&nbsp;On-site administrator training:&nbsp;</span></p><ol><li>Minimum of two, four-hour sessions covering the operations for each system installed.</li><li>Training shall cover all administrative and management functions, including features and controls, for each system.</li></ol>`,
  sales_rep_contact: "eric.talley@verkada.com",
  license_term: "1-year",
  system_monitoring: [
    { name: "LIC-BB Basic Alarm License", checked: true },
    { name: "LIC-B Standard Alarm License", checked: true },
    { name: "LIC-BV Premium Alarm License", checked: false },
    { name: "Custom Video Monitoring", checked: true },
  ],
  indoor_dome_products: [
    { name: "CD32 Indoor Dome Camera", checked: true },
    { name: "CD42 Indoor Dome Camera", checked: false },
    { name: "CD43 Indoor Dome Camera", checked: true },
    { name: "CD52 Indoor Dome Camera", checked: true },
    { name: "CD53 Indoor Dome Camera", checked: true },
    { name: "CD62 Indoor Dome Camera", checked: false },
    { name: "CD63 Indoor Dome Camera", checked: false },
  ],
  outdoor_dome_products: [
    { name: "CD32-E Outdoor Dome Camera", checked: false },
    { name: "CD42-E Outdoor Dome Camera", checked: true },
    { name: "CD43-E Outdoor Dome Camera", checked: true },
    { name: "CD52-E Outdoor Dome Camera", checked: false },
    { name: "CD53-E Outdoor Dome Camera", checked: true },
    { name: "CD62-E Outdoor Dome Camera", checked: false },
    { name: "CD63-E Outdoor Dome Camera", checked: true },
  ],
  fips_validated_cameras: [
    { name: "CD42-F Indoor Dome Camera", checked: true },
    { name: "CD52-F Indoor Dome Camera", checked: true },
    { name: "CD42-E-F Outdoor Dome Camera", checked: true },
    { name: "CD52-E-F Outdoor Dome Camera", checked: true },
    { name: "CF83-E-F Fisheye Camera", checked: false },
    { name: "CH52-E-F Multisensor Camera", checked: true },
    { name: "CP52-E-F PTZ Camera", checked: false },
    { name: "CP63-E-F PTZ Camera", checked: true },
  ],
};

export default function ViewProject({ params }: { params: { id: string } }) {
  const [openItems, setOpenItems] = useState([
    "general",
    "products",
    "execution",
  ]) as any;
  // const { id } = await params;

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
            <Link href={`/edit-project/${params?.id}`}>
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
            <Accordion
              type="multiple"
              className="w-full space-y-4 view-content"
              value={openItems}
              onValueChange={setOpenItems}
            >
              {[
                {
                  value: "general",
                  title: "General Section",
                  content: (
                    <>
                      <div>
                        <div className="border-t-[1px] border-[#aeaeae]"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                              Project Name
                            </h3>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {initialValues.projectName}
                            </p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                              Consultant Name
                            </h3>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {initialValues.consultantName}
                            </p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                              Issuance Description
                            </h3>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {initialValues.issuanceDescription}
                            </p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                            <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                              Issuance Date
                            </h3>
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                              {format(initialValues.issuanceDate, "PPP")}
                            </p>
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                            Abbreviations
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {initialValues.abbreviations
                              .filter((abbreviation) => abbreviation.checked)
                              .map((abbreviation, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                                >
                                  <span className="text-xs">
                                    <span className="font-medium">
                                      {abbreviation.name}
                                    </span>{" "}
                                    – {abbreviation.description}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                            Definitions
                          </h3>
                          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded p-3">
                            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                              {initialValues.definitions ||
                                "No definitions provided."}
                            </p>
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                            Submittals
                          </h3>
                          <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                            <div
                              className="ql-editor"
                              dangerouslySetInnerHTML={{
                                __html: initialValues?.submittals || "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  value: "products",
                  title: "Products",
                  content: (
                    <div className="">
                      <div className="border-t-[1px] border-[#aeaeae]"></div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                          <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Sales Rep Contact
                          </h3>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                            {initialValues.sales_rep_contact}
                          </p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                          <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                            Licence Term
                          </h3>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                            {initialValues.license_term} Licence Term
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          System Monitoring License
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {initialValues.system_monitoring
                            .filter((data) => data.checked)
                            .map((data, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                              >
                                <span className="text-xs">
                                  <span className="font-medium">
                                    {data.name}
                                  </span>
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Indoor Dome Products
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {initialValues.indoor_dome_products
                            .filter((data) => data.checked)
                            .map((data, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                              >
                                <span className="text-xs">
                                  <span className="font-medium">
                                    {data.name}
                                  </span>
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Outdoor Dome Products
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {initialValues.outdoor_dome_products
                            .filter((data) => data.checked)
                            .map((data, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                              >
                                <span className="text-xs">
                                  <span className="font-medium">
                                    {data.name}
                                  </span>
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Fips-Validated Cameras
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {initialValues.fips_validated_cameras
                            .filter((data) => data.checked)
                            .map((data, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                              >
                                <span className="text-xs">
                                  <span className="font-medium">
                                    {data.name}
                                  </span>
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  value: "execution",
                  title: "Execution",
                  content: (
                    <div className="">
                      <div className="border-t-[1px] border-[#aeaeae]"></div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Installers
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.installers || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Examination
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.examination || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Preparation
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.preparation || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Installation
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.installation || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Labeling
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.labeling || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Programming
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.programming || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Acceptance Testing
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html: initialValues?.acceptance_testing || "",
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Owner Personnel Training
                        </h3>
                        <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                          <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{
                              __html:
                                initialValues?.owner_personnel_training || "",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
              ].map((section) => (
                <div
                  key={section.value}
                  className="bg-white border rounded-[5px] p-4"
                >
                  <AccordionItem value={section.value} className="border-0">
                    <AccordionTrigger className="text-lg font-bold font-medium py-2">
                      {section.title}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-1 space-y-3">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>

            <div className="mt-6 flex justify-end">
              <Button
                size="sm"
                className="h-7 text-xs angular-border-small"
                asChild
              >
                <Link href={`#`}>
                  <Download className="mr-1 h-3 w-3" /> DOCX
                </Link>
              </Button>

              <Button
                size="sm"
                className="h-7 text-xs angular-border-small ms-3"
                asChild
              >
                <Link href={`#`}>
                  <Download className="mr-1 h-3 w-3" /> PDF
                </Link>
              </Button>
            </div>
            {/* <div className="grid gap-4 view-content">
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl">
                <CardContent className="pt-0">
                  <div>
                    <h4 className="my-1 mt-4 text-black text-[20px] font-semibold">
                      General Information
                    </h4>
                    <div className="border-t-[1px] border-[black]"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Project Name
                        </h3>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                          {initialValues.projectName}
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Consultant Name
                        </h3>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                          {initialValues.consultantName}
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Issuance Description
                        </h3>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                          {initialValues.issuanceDescription}
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Issuance Date
                        </h3>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                          {format(initialValues.issuanceDate, "PPP")}
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Abbreviations
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {initialValues.abbreviations
                          .filter((abbreviation) => abbreviation.checked)
                          .map((abbreviation, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                            >
                              <span className="text-xs">
                                <span className="font-medium">
                                  {abbreviation.name}
                                </span>{" "}
                                – {abbreviation.description}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Definitions
                      </h3>
                      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded p-3">
                        <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                          {initialValues.definitions ||
                            "No definitions provided."}
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Submittals
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.submittals || "",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="my-1 text-black text-[20px] font-semibold">
                      Products
                    </h4>
                    <div className="border-t-[1px] border-[black]"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Sales Rep Contact
                        </h3>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                          {initialValues.sales_rep_contact}
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Licence Term
                        </h3>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mt-1">
                          {initialValues.license_term} Licence Term
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        System Monitoring License
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {initialValues.system_monitoring
                          .filter((data) => data.checked)
                          .map((data, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                            >
                              <span className="text-xs">
                                <span className="font-medium">{data.name}</span>
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Indoor Dome Products
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {initialValues.indoor_dome_products
                          .filter((data) => data.checked)
                          .map((data, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                            >
                              <span className="text-xs">
                                <span className="font-medium">{data.name}</span>
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Outdoor Dome Products
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {initialValues.outdoor_dome_products
                          .filter((data) => data.checked)
                          .map((data, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                            >
                              <span className="text-xs">
                                <span className="font-medium">{data.name}</span>
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Fips-Validated Cameras
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {initialValues.fips_validated_cameras
                          .filter((data) => data.checked)
                          .map((data, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                            >
                              <span className="text-xs">
                                <span className="font-medium">{data.name}</span>
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="my-1 mt-4 text-black text-[20px] font-semibold">
                      Execution Section
                    </h4>
                    <div className="border-t-[1px] border-[black]"></div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Installers
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.installers || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Examination
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.examination || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Preparation
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.preparation || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Installation
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.installation || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Labeling
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.labeling || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Programming
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.programming || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Acceptance Testing
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: initialValues?.acceptance_testing || "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mt-4">
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Owner Personnel Training
                      </h3>
                      <div className="ql-container ql-snow bg-white border border-slate-200 dark:border-slate-600 rounded">
                        <div
                          className="ql-editor"
                          dangerouslySetInnerHTML={{
                            __html:
                              initialValues?.owner_personnel_training || "",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button
                      size="sm"
                      className="h-7 text-xs angular-border-small"
                      asChild
                    >
                      <Link href={`#`}>
                        <Download className="mr-1 h-3 w-3" /> DOCX
                      </Link>
                    </Button>

                    <Button
                      size="sm"
                      className="h-7 text-xs angular-border-small ms-3"
                      asChild
                    >
                      <Link href={`#`}>
                        <Download className="mr-1 h-3 w-3" /> PDF
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div> */}
          </TabsContent>

          <TabsContent value="history">
            <Card className="stormtrooper-glass angular-border">
              <CardHeader className="pb-2"></CardHeader>
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
