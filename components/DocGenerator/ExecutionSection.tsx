import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
// import "react-quill/dist/quill.snow.css";
// import { useLocation } from "react-router-dom";


interface ExecutionSectionProps {
  executionData: Record<string, string>;
  setExecutionData: (data: Record<string, string>) => void;
}

const ExecutionSection: React.FC<ExecutionSectionProps> = ({
  executionData,
  setExecutionData,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (ReactQuill) {
      setIsLoaded(true);
    }
  }, []);

  const generateModules = (id: string) => ({
    toolbar: {
      container: `#${id}`,
    },
  });
  const [activeEditor, setActiveEditor] = useState<string | null>(null);
  // const location = useLocation();

  const INSTALLERS = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Installation shall be performed by technicians that have successfully completed the Verkada Certified Engineer (VCE) program. For more information, visit www.verkada.com/partners/trainings.&nbsp;</span></p>`;
  const EXAMINATION = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Installation surfaces shall be clean and free from dust, dirt, and obstructions. </span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Examine pathway elements intended for cables. Check raceways, cable trays, and other elements for compliance with space allocations, installation tolerances, hazards to cable installation, and other conditions affecting installation. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Examine rough-in for LAN and control cable conduit systems to server, PCs, controllers, cameras, and other cable-connected devices to verify actual locations of conduit and back boxes before device installation. </span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Proceed with installation only after unsatisfactory conditions have been corrected.</span></p>`;
  const PREPARATION = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Refer to the Verkada Quick Start Guide applicable to each product.</span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Pre-Installation Conference: Prior to installation arrange conference between supplier, Owner, and related trades to review materials, procedures, and coordinating related work. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Furnish or coordinate any inserts required for building into concrete, masonry, and other work, to support and attach work of this Section. Furnish or coordinate in ample time to comply with schedule of work into which inserts are built. </span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Verify that power and outlets are in correct locations. </span></p><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Verify that building structure is properly prepared for mounting, attachment, and support of equipment. </span></p><p><span style="color: rgb(0, 0, 0);">F.&nbsp;Prior to installation of systems components and devices, verify all required preparations have been properly performed and that substrates are acceptable for </span></p><ol><li>Verify all rough-ins and field dimensions.</li></ol><p><span style="color: rgb(0, 0, 0);">G.&nbsp;Report in writing to the Owner’s representative any prevailing conditions that will adversely affect satisfactory execution of work in this Section. </span></p><ol><li>Owner or their representative reserves the right to review proposed methods of construction and installation, reject proposed methods, and have the installation done in a satisfactory method at the Contractor's cost.</li></ol>`;
  const INSTALLATION = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Refer to the Verkada Quick Start Guide applicable to each product.</span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;For support, proceed to www.verkada.com/support.</span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Sequencing:&nbsp;The work shall be performed in the following sequence, unless directed otherwise by Owner or their representative:&nbsp;</span></p><ol><li>Installation of cables and network.&nbsp;</li><li>Installation of new cameras.</li><li>Installation of front-end equipment.</li><li>Commissioning of the new system components.</li><li>End User training</li></ol><p>D. Install work in accordance with manufacturer's recommendations and instructions as well as final shop drawings. All components should be installed so as to allow easy access for service in the future.&nbsp;</p><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Anchor components securely in place, plumb, level, and accurately aligned. </span></p><p><span style="color: rgb(0, 0, 0);">F.&nbsp;For solution products located in equipment traffic areas, and that are exposed to damage due to collision or impact from forklifts, or manually moved carts, carriers, or other equipment used by the Owner, provide protective bollards, railings, coverings etc. to ensure that all products installed are properly protected from such damage.&nbsp;</span></p><p><span style="color: rgb(0, 0, 0);">G.&nbsp;Provide fastenings, plates, and other incidental items required for complete and operational installation. </span></p><p><span style="color: rgb(0, 0, 0);">H.&nbsp;Provide required electrical work in accordance with Code requirements.</span></p><p><span style="color: rgb(0, 0, 0);">I.&nbsp;Security and protection:&nbsp;</span></p><ol><li>Maintain strict security during the installation of equipment and software. Rooms housing the control station, and workstations that have been powered up shall be locked and secured during periods when a qualified operator in the employ of Contractor is not present.</li><li>Equipment protection: Provide protective covers, fenders, and barriers as necessary to maintain work of this Section in same condition as installed until time of substantial completion.</li></ol><p>J. Cable requirements:</p><ol><li>Twisted, shielded, plenum-rated type cable shall be used.&nbsp;</li><li>All exposed cables shall be in rigid conduit, electrical metallic tubing (EMT) raceway, or wire mold as approved by the Owner.</li><li>All concealed cables routed in j-hook pathways shall be fastened to the structure at least every four feet.</li></ol>`;
  const LABELING = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Equipment and product labels shall be printed on self-adhesive labels. Handwritten labels or writing directly on the equipment enclosures is not acceptable.</span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Label equipment and products with the device address as programmed into the security systems and as reflected on the “As-Built” Record Drawings. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Label networked equipment enclosures with the IP address.</span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Cables shall be individually labeled at origin and termination.</span></p>`;
  const PROGRAMMING = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Complete all Verkada Command configuration programming. </span></p><p><span style="color: rgb(0, 0, 0);">B.&nbsp;Add all Verkada Cameras to Command via serial number. </span></p><p><span style="color: rgb(0, 0, 0);">C.&nbsp;Contract will coordinate with the Owner to ensure that new components have appropriate network connections. </span></p><p><span style="color: rgb(0, 0, 0);">D.&nbsp;Coordinate with the Owner to ensure that new components will be properly programmed into the system.</span></p><p><span style="color: rgb(0, 0, 0);">E.&nbsp;Change default passwords to new custom secure passwords as directed by the Owner.</span></p>`;
  const ACCEPTANCE_TESTING = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;Final Test and Acceptance Plan</span></p><ol><li>Develop a final test and acceptance plan to identify each new system component, intent of test, test method, and expected results.</li><li>Each component listed in the plan shall include space for test part signatures, brief comments, time of test and pass/fail check boxes.</li><li>Test all equipment, products, and devices in accordance with the plan to ensure completely operational and fully functional security systems. Submit a written final test and acceptance report for review and approval.</li><li>The report shall be submitted to the Owner’s representative at least 30 days prior to the scheduled system acceptance test.&nbsp;</li><li>System acceptance of the access control system shall be conditioned upon successful completion and operational demonstration of all system functions and components as documented in the final test and acceptance report.</li></ol><p><span style="color: rgb(0, 0, 0);">B.&nbsp;System Acceptance&nbsp;</span></p><ol><li>System acceptance shall not occur until after the following activities have been successfully completed:&nbsp;</li></ol><ul><li><span style="color: rgb(0, 0, 0);">a.&nbsp;Correction of all deficiencies and punch list items noted on the final test and acceptance report.</span></li><li><span style="color: rgb(0, 0, 0);">b.&nbsp;Acceptance of final test and acceptance report.</span></li><li><span style="color: rgb(0, 0, 0);">c.&nbsp;Acceptance of all project close-out submittals.</span></li><li><span style="color: rgb(0, 0, 0);">d.&nbsp;Delivery of final project close-out documentation.</span></li><li><span style="color: rgb(0, 0, 0);">e.&nbsp;Successful training and demonstration, including operation of systems, systems administration, and system management.</span></li><li><span style="color: rgb(0, 0, 0);">f.&nbsp;Purging of Contractor user privileges and return of all credentials.</span></li></ul>`;
  const OWNER_PERSONNEL_TRAINING = `<p><span style="color: rgb(0, 0, 0);">A.&nbsp;On-site operator training:&nbsp;</span></p><ol><li><span style="color: rgb(0, 0, 0);">Instruct operating staff in proper operation, including hands-on training.&nbsp;</span></li><li>Minimum of two, four-hour sessions covering the operations for each system installed.&nbsp;</li><li>Training sessions shall be provided to supervisors, end-user staff, security staff, maintenance personnel, IT personnel, and any other personnel designated by the Owner.&nbsp;</li><li>Provide training sessions on all work shifts, including day, evening, and night shifts.</li></ol><p><span style="color: rgb(0, 0, 0);">B.&nbsp;On-site administrator training:&nbsp;</span></p><ol><li>Minimum of two, four-hour sessions covering the operations for each system installed.</li><li>Training shall cover all administrative and management functions, including features and controls, for each system.</li></ol>`;

  const executionSections = [
    "INSTALLERS",
    "EXAMINATION",
    "PREPARATION",
    "INSTALLATION",
    "LABELING",
    "PROGRAMMING",
    "ACCEPTANCE TESTING",
    "OWNER PERSONNEL TRAINING",
  ];

  useEffect(() => {
    // console.log("location.pathname", location.pathname);
    const validatedInstallers = INSTALLERS || "";
    const validatedExamination = EXAMINATION || "";
    const validatedPreparation = PREPARATION || "";
    const validatedInstallation = INSTALLATION || "";
    const validatedLabeling = LABELING || "";
    const validatedProgramming = PROGRAMMING || "";
    const validatedAcceptanceTesting = ACCEPTANCE_TESTING || "";
    const validatedOwnerPersonnel = OWNER_PERSONNEL_TRAINING || "";
    setExecutionData({
      ...executionData,
      INSTALLERS: executionData["INSTALLERS"]
        ? executionData["INSTALLERS"]
        : validatedInstallers,
      EXAMINATION: executionData["EXAMINATION"]
        ? executionData["EXAMINATION"]
        : validatedExamination,
      PREPARATION: executionData["PREPARATION"]
        ? executionData["PREPARATION"]
        : validatedPreparation,
      INSTALLATION: executionData["INSTALLATION"]
        ? executionData["INSTALLATION"]
        : validatedInstallation,
      LABELING: executionData["LABELING"]
        ? executionData["LABELING"]
        : validatedLabeling,
      PROGRAMMING: executionData["PROGRAMMING"]
        ? executionData["PROGRAMMING"]
        : validatedProgramming,
      ["ACCEPTANCE TESTING"]: executionData["ACCEPTANCE TESTING"]
        ? executionData["ACCEPTANCE TESTING"]
        : validatedAcceptanceTesting,
      ["OWNER PERSONNEL TRAINING"]: executionData["OWNER PERSONNEL TRAINING"]
        ? executionData["OWNER PERSONNEL TRAINING"]
        : validatedOwnerPersonnel,
    });
    // setExecutionData({
    //   "INSTALLERS": INSTALLERS,
    //   "EXAMINATION": EXAMINATION,
    //   "PREPARATION": PREPARATION,
    //   "INSTALLATION": INSTALLATION,
    //   "LABELING": LABELING,
    //   "PROGRAMMING": PROGRAMMING,
    //   "ACCEPTANCE TESTING": ACCEPTANCE_TESTING,
    //   "OWNER PERSONNEL TRAINING": OWNER_PERSONNEL_TRAINING,
    // })
  }, []);

  // const handleEditorChange = (section: string, content: string) => {
  //   setExecutionData({
  //     ...executionData,
  //     [section]: content,
  //   });
  // };

  return (
    <Card className="mb-3 main-section px-2">
      <CardContent className="p-2">
        {/* <Accordion type="single" collapsible className="w-full">
          {executionSections.map((section, index) => (
            <AccordionItem key={index} value={section.toLowerCase()} className="">
              <AccordionTrigger 
                className="text-left text-xs py-1.5"
                onClick={() => setActiveEditor(section)}
              >
                {section}
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-2">
                {activeEditor === section && (
                  <div className="mt-1">
                    <ReactQuill 
                      theme="snow"
                      value={executionData[section] || ''}
                      onChange={(content) => handleEditorChange(section, content)}
                      className="text-xs"
                      modules={{
                        toolbar: [
                          [{'list': 'ordered'}, {'list': 'bullet'}],
                          ['clean']
                        ],
                      }}
                    />
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion> */}

        <div className="">
          {executionSections.map((section, index) => (
            <div className="pb-2" key={index}>
              <Label
                htmlFor="license-term"
                className="text-xs font-bold"
              >
                <p className="lowercase first-letter:uppercase">{section}</p>
              </Label>
              <div className="mt-1">
              {/* {isLoaded && (
                <ReactQuill
                  theme="snow"
                  value={executionData[section] || ""}
                  onChange={(content) => handleEditorChange(section, content)}
                  className="text-xs"
                  modules={{
                    toolbar: [
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["clean"],
                    ],
                  }}
                />
              )} */}

              {isLoaded && (
                <div>
                  <div id={`execution-${index}`}>
                    
                    <button className="ql-bold" />
                   <button
                      className="ql-list"
                      value="bullet"
                      title="Bullet List"
                    />
                    <button
                      className="ql-list"
                      value="ordered"
                      title="Numbered List"
                    />
                    <button
                      className="ql-indent"
                      value="-1"
                      title="Indent Left"
                    />
                    <button
                      className="ql-indent"
                      value="+1"
                      title="Indent Right"
                    />

                    <button className="ql-link" title="Add Link" />
                  </div>
                  <ReactQuill
                    value={executionData[section] || ""}
                    // onChange={(content) => handleEditorChange(section, content)}
                    theme="snow"
                    modules={generateModules(`execution-${index}`)}
                  />
                </div>
              )}

                
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutionSection;
