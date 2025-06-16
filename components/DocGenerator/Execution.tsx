// import ReactQuill from "react-quill";
import "react-datepicker/dist/react-datepicker.css";

import { ErrorMessage, Field, Form, Formik } from "formik";

import TextEditorField from "./TextEditor";

export default function Execution() {
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
      {
        name: "ODBC",
        description: "Open Database Connectivity",
        checked: false,
      },
      { name: "PoE", description: "Power Over Ethernet", checked: true },
      { name: "RAM", description: "Random Access Memory", checked: false },
      { name: "SPDT", description: "Single pole, double throw", checked: true },
      { name: "SSL", description: "Secure Sockets Layer", checked: true },
      { name: "SSO", description: "Single sign-on", checked: false },
      {
        name: "TCP",
        description: "Transport Control Protocol",
        checked: false,
      },
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

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={GeneralInformationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, setFieldValue, handleChange }) => (
        <Form className="space-y-4">
          <div>
            {/* <h4 className="my-1 mt-7 text-black text-[20px] font-semibold">
              Execution Section
            </h4>
            <div className="border-t-[1px] border-[black]"></div> */}

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-4">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Installers
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`installers`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="installers"
                        toolbarId="toolbar-installers"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`installers`, value)
                        }
                      />
                      <ErrorMessage
                        name={`installers`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Examination
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`examination`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="examination"
                        toolbarId="toolbar-examination"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`examination`, value)
                        }
                      />
                      <ErrorMessage
                        name={`examination`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Preparation
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`preparation`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="preparation"
                        toolbarId="toolbar-preparation"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`preparation`, value)
                        }
                      />
                      <ErrorMessage
                        name={`preparation`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Installation
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`installation`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="installation"
                        toolbarId="toolbar-installation"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`installation`, value)
                        }
                      />
                      <ErrorMessage
                        name={`installation`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Labeling
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`labeling`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="labeling"
                        toolbarId="toolbar-labeling"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`labeling`, value)
                        }
                      />
                      <ErrorMessage
                        name={`labeling`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Programming
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`programming`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="programming"
                        toolbarId="toolbar-programming"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`programming`, value)
                        }
                      />
                      <ErrorMessage
                        name={`programming`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Acceptance Testing
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`acceptance_testing`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="acceptance_testing"
                        toolbarId="toolbar-acceptance-testing"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`acceptance_testing`, value)
                        }
                      />
                      <ErrorMessage
                        name={`acceptance_testing`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-3 mt-3">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                Owner Personnel Training
              </h3>
              <div className="bg-white text-editor rounded-[17px]">
                <Field name={`owner_personnel_training`} className="">
                  {({ field, form, meta }: any) => (
                    <div>
                      <TextEditorField
                        name="owner_personnel_training"
                        toolbarId="toolbar-owner-personnel-training"
                        value={field.value}
                        onChange={(value: any) =>
                          setFieldValue(`owner_personnel_training`, value)
                        }
                      />
                      <ErrorMessage
                        name={`owner_personnel_training`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
