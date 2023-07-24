import React, { useState } from "react";
import { servicesData } from "../data";
import ServicesMobile from "./ServicesMobile";
import { Header, Share } from "./home";
import Service from "./Service";

const Services = () => {
  const [serviceType, setServiceType] = useState("Accounting");

  const handleServiceType = (service) => {
    setServiceType(service);
  };

  return (
    <div className="grid grid-cols-12 bg-light">
      <div className="hidden md:flex flex-col col-span-12 h-screen pt-4 overflow-y-auto xm:pr-16 border-r border-[#EBEEF0]">
        <div className="ml-10 mb-11">
          <Share />
          <Header />
        </div>
        <div className="ml-10 grid grid-cols-12">
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

export default Services;
