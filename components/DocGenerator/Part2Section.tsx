import React, { useEffect, useMemo, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Part2SectionProps {
  licenseTerms: string;
  setLicenseTerms: (value: string) => void;
  systemMonitoring: Record<string, boolean>;
  setSystemMonitoring: (value: Record<string, boolean>) => void;
  thirdPartyCamera: boolean;
  setThirdPartyCamera: (value: boolean) => void;
  viewingStation: boolean;
  setViewingStation: (value: boolean) => void;
  poeInjectors: boolean;
  setPoeInjectors: (value: boolean) => void;
  accessories: Record<string, boolean>;
  setAccessories: (value: Record<string, boolean>) => void;
  cellularWifi: boolean;
  setCellularWifi: (value: boolean) => void;
  selectedDaysPlans: string[];
  setSelectedDaysPlans: (value: string[]) => void;
  days: string;
  setDays: (value: string) => void;
  salesRep: string;
  setSalesRep: (value: string) => void;
  indoorDomeProducts: Record<string, boolean>;
  setIndoorDomeProducts: (value: Record<string, boolean>) => void;
  outdoorDomeProducts: Record<string, boolean>;
  setOutdoorDomeProducts: (value: Record<string, boolean>) => void;
  miniSeriesProducts: Record<string, boolean>;
  setMiniSeriesProducts: (value: Record<string, boolean>) => void;
  bulletSeriesProducts: Record<string, boolean>;
  setBulletSeriesProducts: (value: Record<string, boolean>) => void;
  fisheyeSeriesProducts: Record<string, boolean>;
  setFisheyeSeriesProducts: (value: Record<string, boolean>) => void;
  multiSensorSeriesProducts: Record<string, boolean>;
  setMultiSensorSeriesProducts: (value: Record<string, boolean>) => void;
  panTiltZoomSeriesProducts: Record<string, boolean>;
  setPanTiltZoomSeriesProducts: (value: Record<string, boolean>) => void;
  fipsValidatedSeriesProducts: Record<string, boolean>;
  setFipsValidatedSeriesProducts: (value: Record<string, boolean>) => void;
}

// Define product days compatibility
const productDaysCompatibility: Record<string, string[]> = {
  ["CD32 Indoor Dome Camera"]: ["30", "60", "90"],
  ["CD42 Indoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD43 Indoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD52 Indoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD53 Indoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD62 Indoor Dome Camera"]: ["30", "60", "90"],
  ["CD63 Indoor Dome Camera"]: ["30", "60", "90", "120"],
};

const outdoorDomDaysCompatibility: Record<string, string[]> = {
  ["CD32-E Outdoor Dome Camera"]: ["30", "60", "90"],
  ["CD42-E Outdoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD43-E Outdoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD52-E Outdoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD53-E Outdoor Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CD62-E Outdoor Dome Camera"]: ["30", "60", "90"],
  ["CD63-E Outdoor Dome Camera"]: ["30", "60", "90", "120"],
};

const miniSeriesCompatibility: Record<string, string[]> = {
  ["CM22 Interior Mini Dome Camera"]: ["30", "60", "90"],
  ["CM41 Interior Mini Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CM41-E Exterior Mini Dome Camera"]: ["30", "60", "90", "365"],
  ["CM41-S Modular Mini Dome Camera"]: ["30", "60", "90", "120", "365"],
  ["CM42-S Mini Split Camera"]: ["30", "90"]
};

const bulletSeriesCompatibility: Record<string, string[]> = {
  ["CB52-E Wide View Exterior Bullet"]: ["30", "60", "90", "365"],
  ["CB52-TE Narrow View Exterior Bullet"]: ["30", "60", "90", "365"],
  ["CB62-E Wide View Exterior Bullet"]: ["30", "60", "90"],
  ["CB62-TE Narrow View Exterior Bullet"]: ["30", "60", "90"],
};

const fisheyeSeriesCompatibility: Record<string, string[]> = {
  ["CF81-E Fisheye Camera"]: ["30", "60", "90"],
  ["CF83-E Fisheye Camera"]: ["30", "60", "90", "120"]
};

const multiSensorSeriesCompatibility: Record<string, string[]> = {
  ["CH52-E Multisensor Camera"]: ["30", "60", "120", "365"],
};

const panTiltZoomSeriesCompatibility: Record<string, string[]> = {
  ["CP52-E PTZ Camera"]: ["30", "60", "90", "180"],
  ["CP63-E PTZ Camera"]: ["30", "60", "90"],
};

const fipsValidatedCompatibility: Record<string, string[]> = {
  ["CD42-F Indoor Dome Camera"]: ["30", "60", "90", "180"],
  ["CD52-F Indoor Dome Camera"]: ["30", "60", "90"],
  ["CD42-E-F Outdoor Dome Camera"]: ["30", "60", "90"],
  ["CD52-E-F Outdoor Dome Camera"]: ["30", "60", "90"],
  ["CF83-E-F Fisheye Camera"]: ["30", "60", "90"],
  ["CH52-E-F Multisensor Camera"]: ["30", "60", "90"],
  ["CP52-E-F PTZ Camera"]: ["30", "60", "90"],
  ["CP63-E-F PTZ Camera"]: ["30", "60", "90"],
};

const Part2Section: React.FC<Part2SectionProps> = ({
  licenseTerms,
  setLicenseTerms,
  systemMonitoring,
  setSystemMonitoring,
  thirdPartyCamera,
  setThirdPartyCamera,
  viewingStation,
  setViewingStation,
  poeInjectors,
  setPoeInjectors,
  accessories,
  setAccessories,
  cellularWifi,
  setCellularWifi,
  selectedDaysPlans,
  setSelectedDaysPlans,
  days,
  setDays,
  salesRep,
  setSalesRep,
  indoorDomeProducts,
  setIndoorDomeProducts,
  outdoorDomeProducts,
  setOutdoorDomeProducts,
  miniSeriesProducts,
  setMiniSeriesProducts,
  bulletSeriesProducts,
  setBulletSeriesProducts,
  fisheyeSeriesProducts,
  setFisheyeSeriesProducts,
  multiSensorSeriesProducts,
  setMultiSensorSeriesProducts,
  panTiltZoomSeriesProducts,
  setPanTiltZoomSeriesProducts,
  fipsValidatedSeriesProducts,
  setFipsValidatedSeriesProducts,
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const monitoringOptions = [
    "LIC-BB Basic Alarm License",
    "LIC-B Standard Alarm License",
    "LIC-BV Premium Alarm License",
    "Custom Video Monitoring",
  ];

  const accessoriesList = [
    "ACC-MNT-2 Mounting Arm Kit by Verkada Inc",
    "ACC-MNT-3 Wall Mounted L-Shaped Bracket Kit by Verkada Inc",
    "ACC-MNT-5 Mini Pendant Cap Mount Kit by Verkada Inc",
    "ACC-MNT-6 Mini Camera Junction Box Mount Adapter by Verkada Inc",
    "ACC-MNT-7 Angle Mount by Verkada Inc",
    "ACC-MNT-8 Pendant Cap for CD Series by Verkada Inc",
    "ACC-MNT-9 J-Box Adapter for CD Series by Verkada Inc",
    "ACC-MNT-10 Wall Mount for CF Series by Verkada Inc",
    "ACC-MNT-11 Pole Mount Adapter for CF/CB Series by Verkada Inc",
  ];


  const handleMonitoringChange = (option: string, checked: boolean) => {
    setSystemMonitoring({ ...systemMonitoring, [option]: checked });
  };

  const handleAccessoryChange = (accessory: string, checked: boolean) => {
    setAccessories({ ...accessories, [accessory]: checked });
  };

  const handleIndoorDomeProductChange = (product: string, checked: boolean) => {
    setIndoorDomeProducts({ ...indoorDomeProducts, [product]: checked });
  };

  const handleOutdoorDomeProductChange = (
    product: string,
    checked: boolean
  ) => {
    setOutdoorDomeProducts({ ...outdoorDomeProducts, [product]: checked });
  };

  const getCompatibleProducts = () => {
    if (!days) return [];

    return Object.entries(productDaysCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleProducts = getCompatibleProducts();

  const getCompatibleOutdoorProducts = () => {
    if (!days) return [];

    return Object.entries(outdoorDomDaysCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleOutDoorProducts = getCompatibleOutdoorProducts();

  const handleMiniSeriesProductChange = (
    product: string,
    checked: boolean
  ) => {
    setMiniSeriesProducts({ ...miniSeriesProducts, [product]: checked });
  };


  const getCompatibleMiniSeriesProducts = () => {
    if (!days) return [];

    return Object.entries(miniSeriesCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleMiniSeriesProducts = getCompatibleMiniSeriesProducts();

  const handleBulletSeriesProductChange = (
    product: string,
    checked: boolean
  ) => {
    setBulletSeriesProducts({ ...bulletSeriesProducts, [product]: checked });
  };


  const getCompatibleBulletSeriesProducts = () => {
    if (!days) return [];

    return Object.entries(bulletSeriesCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleBulletSeriesProducts = getCompatibleBulletSeriesProducts();

  const handleFisheyeSeriesProductChange = (
    product: string,
    checked: boolean
  ) => {
    setFisheyeSeriesProducts({ ...fisheyeSeriesProducts, [product]: checked });
  };


  const getCompatibleFisheyeSeriesProducts = () => {
    if (!days) return [];

    return Object.entries(fisheyeSeriesCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleFisheyeSeriesProducts = getCompatibleFisheyeSeriesProducts();

  const handleMultisensorSeriesProductChange = (
    product: string,
    checked: boolean
  ) => {
    setMultiSensorSeriesProducts({ ...multiSensorSeriesProducts, [product]: checked });
  };


  const getCompatibleMultisensorSeriesProducts = () => {
    if (!days) return [];

    return Object.entries(multiSensorSeriesCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleMultisensorSeriesProducts = getCompatibleMultisensorSeriesProducts();

  const handlepanTiltZoomSeriesProductChange = (
    product: string,
    checked: boolean
  ) => {
    setPanTiltZoomSeriesProducts({ ...panTiltZoomSeriesProducts, [product]: checked });
  };


  const getPanTiltZoomSeriesProducts = () => {
    if (!days) return [];

    return Object.entries(panTiltZoomSeriesCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatiblePanTiltZoomSeriesProducts = getPanTiltZoomSeriesProducts();

  const handlefipsValidatedSeriesProductChange = (
    product: string,
    checked: boolean
  ) => {
    setFipsValidatedSeriesProducts({ ...fipsValidatedSeriesProducts, [product]: checked });
  };


  const getfipsValidatedSeriesProducts = () => {
    if (!days) return [];

    return Object.entries(fipsValidatedCompatibility)
      .filter(([_, supportedDays]) => supportedDays.includes(days))
      .map(([product]) => product);
  };

  const compatibleFipsValidatedSeriesProducts = getfipsValidatedSeriesProducts();

  const handleAccordionValueChange = (value: string) => {
    setOpenSection(value === openSection ? null : value);
  };

  return (
    <Card className="mb-3 main-section px-2">
      <CardContent className="p-2">
        <Accordion
          type="single"
          collapsible
          value={openSection || ""}
          onValueChange={handleAccordionValueChange}
          className="w-full"
        >
          {/* <AccordionItem value="manufacture">
            <AccordionTrigger className="text-left py-1.5 text-sm font-medium">
              2.01 Manufacture
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-2">
              <div className="text-xs text-muted-foreground">
                Manufacturer information section
              </div>
            </AccordionContent>
          </AccordionItem> */}

          <div className="text-xs border-b-[1px] border-b-[#e1e7ef] pb-2">
            {/* Manufacturer information section */}
            <div className="flex items-center space-x-2">
              <Label className="mb-1 block text-xs font-bold">
                Sales Rep Contact
              </Label>
              <Select value={salesRep} onValueChange={setSalesRep}>
                <SelectTrigger className="w-full max-w-xs h-7 text-xs text-left">
                  <SelectValue placeholder="Select sales rep" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="eric.talley@verkada.com"
                    className="text-xs"
                  >
                    Eric Talley (North America East) - eric.talley@verkada.com
                  </SelectItem>
                  <SelectItem
                    value="chad.cooper@verkada.com"
                    className="text-xs"
                  >
                    Chad Cooper (North America West) - chad.cooper@verkada.com
                  </SelectItem>
                  <SelectItem
                    value="dan.bettencourt@verkada.com"
                    className="text-xs"
                  >
                    Dan Bettencourt (Texas, International) - dan.bettencourt@verkada.com
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-1 mb-2 border-b-[1px] border-b-[#e1e7ef] pb-2">
            <div className="">
              <Label htmlFor="license-term" className="text-xs font-bold">
                Select License Term
              </Label>
              <div className="mt-1">
                <Select value={licenseTerms} onValueChange={setLicenseTerms}>
                  <SelectTrigger className="w-full max-w-xs h-7 text-xs">
                    <SelectValue placeholder="Select license term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-year" className="text-xs">
                      1-year
                    </SelectItem>
                    <SelectItem value="3-year" className="text-xs">
                      3-year
                    </SelectItem>
                    <SelectItem value="5-year" className="text-xs">
                      5-year
                    </SelectItem>
                    <SelectItem value="10-year" className="text-xs">
                      10-year
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="">
              <Label className="text-xs mb-1 font-bold">
                Select System Monitoring License
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
                {monitoringOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-1.5">
                    <Checkbox
                      id={`monitoring-${index}`}
                      checked={systemMonitoring[option] || false}
                      onCheckedChange={(checked) =>
                        handleMonitoringChange(option, checked as boolean)
                      }
                      className="h-3 w-3"
                    />
                    <Label htmlFor={`monitoring-${index}`} className="text-xs">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2 border-b-[1px] border-b-[#e1e7ef] pb-2">
            <div>
              <div className="flex items-center space-x-2">
                <Label className="mb-1 block text-xs font-bold">
                  Camera retention duration
                </Label>
                <Select value={days} onValueChange={setDays}>
                  <SelectTrigger className="w-full max-w-xs h-7 text-xs">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30" className="text-xs">
                      30 Days
                    </SelectItem>
                    <SelectItem value="60" className="text-xs">
                      60 Days
                    </SelectItem>
                    <SelectItem value="90" className="text-xs">
                      90 Days
                    </SelectItem>
                    <SelectItem value="120" className="text-xs">
                      120 Days
                    </SelectItem>
                    <SelectItem value="365" className="text-xs">
                      365 Days
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mb-2">
                {daysPlans.map((day) => (
                  <div key={day} className="flex items-center space-x-1.5">
                    <input
                      type="radio"
                      id={`days-${day}`}
                      name="daysPlans"
                      checked={selectedDaysPlans.includes(day)}
                      onChange={(checked) =>
                        handleDaysPlansChange(
                          day,
                          checked.target.checked as boolean
                        )
                      }
                      className="h-3 w-3 accent-black"
                    />
                    <Label htmlFor={`days-${day}`} className="text-xs">
                      {day} Days
                    </Label>
                  </div>
                ))}
              </div> */}
            </div>

            {days && (
              <div className="mt-1">
                <Label className="mb-1 block text-xs font-bold">
                  Indoor Dome Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleProducts.length > 0 &&
                    compatibleProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={indoorDomeProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handleIndoorDomeProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>

                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Outdoor Dome Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleOutDoorProducts.length > 0 &&
                    compatibleOutDoorProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={outdoorDomeProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handleOutdoorDomeProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>


                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Mini series Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleMiniSeriesProducts.length > 0 &&
                    compatibleMiniSeriesProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={miniSeriesProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handleMiniSeriesProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>

                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Bullet Series Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleBulletSeriesProducts.length > 0 &&
                    compatibleBulletSeriesProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={bulletSeriesProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handleBulletSeriesProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>

                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Fisheye Series Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleFisheyeSeriesProducts.length > 0 &&
                    compatibleFisheyeSeriesProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={fisheyeSeriesProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handleFisheyeSeriesProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>

                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Multisensor Series Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleMultisensorSeriesProducts.length > 0 &&
                    compatibleMultisensorSeriesProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={multiSensorSeriesProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handleMultisensorSeriesProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>

                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Pan-tilt-zoom Series Products
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatiblePanTiltZoomSeriesProducts.length > 0 &&
                    compatiblePanTiltZoomSeriesProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={panTiltZoomSeriesProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handlepanTiltZoomSeriesProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>

                <Label className="mb-1 block text-xs mt-1 font-bold">
                  Fips-Validated Cameras
                </Label>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-1">
                  {compatibleFipsValidatedSeriesProducts.length > 0 &&
                    compatibleFipsValidatedSeriesProducts.map((product) => (
                      <div
                        key={product}
                        className="flex items-center space-x-1.5"
                      >
                        <Checkbox
                          id={`product-${product}`}
                          checked={fipsValidatedSeriesProducts[product] || false}
                          onCheckedChange={(checked) =>
                            handlefipsValidatedSeriesProductChange(
                              product,
                              checked as boolean
                            )
                          }
                          className="h-3 w-3"
                        />
                        <Label
                          htmlFor={`product-${product}`}
                          className="text-xs"
                        >
                          {product}
                        </Label>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-b-[1px] border-b-[#e1e7ef] pb-2">
            <div>
              <Label htmlFor="poe-injectors" className="text-xs font-bold">
                Accessories
              </Label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {accessoriesList.map((accessory, index) => (
                <div key={index} className="flex items-center space-x-1.5">
                  <Checkbox
                    id={`accessory-${index}`}
                    checked={accessories[accessory] || false}
                    onCheckedChange={(checked) =>
                      handleAccessoryChange(accessory, checked as boolean)
                    }
                    className="h-3 w-3"
                  />
                  <Label htmlFor={`accessory-${index}`} className="text-xs">
                    {accessory}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-1.5 border-b-[1px] border-b-[#e1e7ef] pb-2 mt-2">
            <Checkbox
              id="third-party-camera"
              checked={thirdPartyCamera}
              onCheckedChange={(checked) => setThirdPartyCamera(!!checked)}
              className="h-3 w-3"
            />
            <Label htmlFor="third-party-camera" className="text-xs font-bold">
              Will you be using 3rd party cameras with the Verkada system via
              the Command Connector?
            </Label>
          </div>

          <div className="flex items-center space-x-1.5 border-b-[1px] border-b-[#e1e7ef] pb-2 mt-2">
            <Checkbox
              id="viewing-station"
              checked={viewingStation}
              onCheckedChange={(checked) => setViewingStation(!!checked)}
              className="h-3 w-3"
            />
            <Label htmlFor="viewing-station" className="text-xs font-bold">
              Will you be using Verkada's VX52 viewing station in the project?
            </Label>
          </div>

          <div className="flex items-center space-x-1.5 border-b-[1px] border-b-[#e1e7ef] pb-2 mt-2">
            <Checkbox
              id="poe-injectors"
              checked={poeInjectors}
              onCheckedChange={(checked) => setPoeInjectors(!!checked)}
              className="h-3 w-3"
            />
            <Label htmlFor="poe-injectors" className="text-xs font-bold">
              Will you be using Verkada's PoE injectors in the project?
            </Label>
          </div>

         

          <div className="flex items-center space-x-1.5 pb-2 mt-2">
            <Checkbox
              id="cellular-wifi"
              checked={cellularWifi}
              onCheckedChange={(checked) => setCellularWifi(!!checked)}
              className="h-3 w-3"
            />
            <Label htmlFor="cellular-wifi" className="text-xs font-bold">
              Will you be using Verkada's Cellular or WiFi gateway(s) in the
              project?
            </Label>
          </div>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Part2Section;
