import React, { useState } from "react";
import { servicesData } from "../data";
import { Header, Share } from "./home";
import Service from "./Service";

const ServicesMobile = () => {
  const [serviceType, setServiceType] = useState("Accounting");

  const handleServiceType = (service) => {
    setServiceType(service);
  };
 
  return (
    <div className="grid grid-cols-12 bg-light">
      <div className="flex md:hidden flex-col col-span-12 xm:pr-16 border-r border-[#EBEEF0]">
        <div className="mb-3">
          <Header />
        </div>
        <div className="text-dark2D font-DMSans mx-4 text-lg font-medium mb-3">
          Services
        </div>
        <div className="mx-4 grid grid-cols-12">
          { servicesData.map((serviceData, index)=> (
            <Service key={index} serviceData={serviceData} />
            ))
          }
        </div>
      </div>
      {/* <ServicesMobile serviceType={serviceType} /> */}
    </div>
  );
};

export default ServicesMobile;
