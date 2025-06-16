import React, { useState } from "react";
import GeneralSection from "./GeneralSection";
import Part1Section from "./Part1Section";
import Part2Section from "./Part2Section";
import ExecutionSection from "./ExecutionSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import General from "./General";
import Execution from "./Execution";
import Products from "./Products";

const DocGenerator: React.FC = () => {
  const [projectName, setProjectName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [issuanceDescription, setIssuanceDescription] = useState("");
  const [issuanceDate, setIssuanceDate] = useState("");
  const [quillSubmittals, setQuillSubmittals] = useState("");
  const [definitionsQuill, setdefinitionsQuill] = useState("");

  const [isDownloading, setIsDownloading] = useState(false);

  const [abbreviations, setAbbreviations] = useState<Record<string, boolean>>(
    {}
  );
  const [submittals, setSubmittals] = useState<Record<string, boolean>>({});
  const [licenseTerms, setLicenseTerms] = useState("");
  const [days, setDays] = useState("");
  const [salesRep, setSalesRep] = useState("");
  const [systemMonitoring, setSystemMonitoring] = useState<
    Record<string, boolean>
  >({});
  const [thirdPartyCamera, setThirdPartyCamera] = useState(false);
  const [viewingStation, setViewingStation] = useState(false);
  const [poeInjectors, setPoeInjectors] = useState(false);
  const [accessories, setAccessories] = useState<Record<string, boolean>>({});
  const [cellularWifi, setCellularWifi] = useState(false);
  const [selectedDaysPlans, setSelectedDaysPlans] = useState<string[]>([]);
  const [indoorDomeProducts, setIndoorDomeProducts] = useState<
    Record<string, boolean>
  >({});
  const [outdoorDomeProducts, setOutdoorDomeProducts] = useState<
    Record<string, boolean>
  >({});
  const [miniSeriesProducts, setMiniSeriesProducts] = useState<
    Record<string, boolean>
  >({});
  const [bulletSeriesProducts, setBulletSeriesProducts] = useState<
    Record<string, boolean>
  >({});
  const [fisheyeSeriesProducts, setFisheyeSeriesProducts] = useState<
    Record<string, boolean>
  >({});
  const [multiSensorSeriesProducts, setMultiSensorSeriesProducts] = useState<
    Record<string, boolean>
  >({});
  const [panTiltZoomSeriesProducts, setPanTiltZoomSeriesProducts] = useState<
    Record<string, boolean>
  >({});
  const [fipsValidatedSeriesProducts, setFipsValidatedSeriesProducts] =
    useState<Record<string, boolean>>({});

  const [executionData, setExecutionData] = useState<Record<string, string>>(
    {}
  );

  function getStorageByDays(days: string): string {
    switch (days) {
      case "30":
        return "256GB";
      case "60":
        return "512GB";
      case "90":
        return "768GB";
      case "120":
        return "1TB";
      case "365":
        return "2TB";
      default:
        return "";
    }
  }

  const downloadDocument = async () => {
    setIsDownloading(true);
    try {
      const apiUrl =
        import.meta.env.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL;
      const requestData = {
        project_name: projectName,
        consultant_name: consultantName,
        issuance_description: issuanceDescription,
        issuance_date: issuanceDate,
        abbreviations: JSON.stringify(abbreviations),
        definitions: definitionsQuill,
        submittals: quillSubmittals,
        sales_rep: salesRep,
        license_terms: licenseTerms,
        system_monitoring: JSON.stringify(systemMonitoring),
        accessories: JSON.stringify(accessories),
        command_connector: thirdPartyCamera,
        viewing_station: viewingStation,
        poe_injectors: poeInjectors,
        cellular_wifi: cellularWifi,
        installer: executionData["INSTALLERS"],
        examination: executionData["EXAMINATION"],
        preparation: executionData["PREPARATION"],
        installation: executionData["INSTALLATION"],
        labeling: executionData["LABELING"],
        programming: executionData["PROGRAMMING"],
        acceptance_testing: executionData["ACCEPTANCE TESTING"],
        owner_personnel_training: executionData["OWNER PERSONNEL TRAINING"],
        storage: getStorageByDays(days),
        indoor_dome_products: JSON.stringify(indoorDomeProducts),
        outdoor_dome_products: JSON.stringify(outdoorDomeProducts),
        mini_series_products: JSON.stringify(miniSeriesProducts),
        bullet_series_products: JSON.stringify(bulletSeriesProducts),
        fisheye_series_products: JSON.stringify(fisheyeSeriesProducts),
        multisensor_series_products: JSON.stringify(multiSensorSeriesProducts),
        pan_tilt_zoom_series_products: JSON.stringify(
          panTiltZoomSeriesProducts
        ),
        fips_validated_series_products: JSON.stringify(
          fipsValidatedSeriesProducts
        ),
      };

      const response = await axios.post(
        `${apiUrl}/api/html-docx-generate`,
        requestData,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.docx");
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

      console.log("Document downloaded successfully.");
    } catch (error) {
      console.error("Error downloading document:", error);
    } finally {
      setIsDownloading(false);
    }
  };
  const [openItems, setOpenItems] = useState<string[]>([
    "general",
    "products",
    "execution",
  ]);

  return (
    <div className="container mx-auto p-0">
      <div className="mb-4 shadow-sm">
        {/* <CardContent className="p-3 border-none bg-transparent"> */}
        <Accordion
          type="multiple"
          className="w-full space-y-4"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {[
            {
              value: "general",
              title: "General Section",
              content: (
                <General
                // projectName={projectName}
                // setProjectName={setProjectName}
                // consultantName={consultantName}
                // setConsultantName={setConsultantName}
                // abbreviations={abbreviations}
                // setAbbreviations={setAbbreviations}
                // submittals={submittals}
                // setSubmittals={setSubmittals}
                // quillSubmittals={quillSubmittals}
                // setQuillSubmittals={setQuillSubmittals}
                // definitionsQuill={definitionsQuill}
                // setdefinitionsQuill={setdefinitionsQuill}
                // issuanceDescription={issuanceDescription}
                // setIssuanceDescription={setIssuanceDescription}
                // issuanceDate={issuanceDate}
                // setIssuanceDate={setIssuanceDate}
                />
              ),
            },
            {
              value: "products",
              title: "Products",
              content: (
                <Products
                // licenseTerms={licenseTerms}
                // setLicenseTerms={setLicenseTerms}
                // systemMonitoring={systemMonitoring}
                // setSystemMonitoring={setSystemMonitoring}
                // thirdPartyCamera={thirdPartyCamera}
                // setThirdPartyCamera={setThirdPartyCamera}
                // viewingStation={viewingStation}
                // setViewingStation={setViewingStation}
                // poeInjectors={poeInjectors}
                // setPoeInjectors={setPoeInjectors}
                // accessories={accessories}
                // setAccessories={setAccessories}
                // cellularWifi={cellularWifi}
                // setCellularWifi={setCellularWifi}
                // selectedDaysPlans={selectedDaysPlans}
                // setSelectedDaysPlans={setSelectedDaysPlans}
                // indoorDomeProducts={indoorDomeProducts}
                // setIndoorDomeProducts={setIndoorDomeProducts}
                // outdoorDomeProducts={outdoorDomeProducts}
                // setOutdoorDomeProducts={setOutdoorDomeProducts}
                // miniSeriesProducts={miniSeriesProducts}
                // setMiniSeriesProducts={setMiniSeriesProducts}
                // bulletSeriesProducts={bulletSeriesProducts}
                // setBulletSeriesProducts={setBulletSeriesProducts}
                // fisheyeSeriesProducts={fisheyeSeriesProducts}
                // setFisheyeSeriesProducts={setFisheyeSeriesProducts}
                // multiSensorSeriesProducts={multiSensorSeriesProducts}
                // setMultiSensorSeriesProducts={setMultiSensorSeriesProducts}
                // panTiltZoomSeriesProducts={panTiltZoomSeriesProducts}
                // setPanTiltZoomSeriesProducts={setPanTiltZoomSeriesProducts}
                // fipsValidatedSeriesProducts={fipsValidatedSeriesProducts}
                // setFipsValidatedSeriesProducts={
                //   setFipsValidatedSeriesProducts
                // }
                // days={days}
                // setDays={setDays}
                // salesRep={salesRep}
                // setSalesRep={setSalesRep}
                />
              ),
            },
            {
              value: "execution",
              title: "Execution",
              content: <Execution />,
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

        {/* </CardContent> */}
      </div>
    </div>
  );
};

export default DocGenerator;
