import React from "react";
import { Search } from "./home";
import { servicesData } from "../data";

const ServicesMobile = ({ serviceType }) => {
  console.log(serviceType);
  return (
    <div className="col-span-12 md:col-span-6 h-[calc(100vh_-_4.5rem)] sm:h-screen pt-4 overflow-y-auto pr-4 xm:pr-20">
      <div className="font-DMSans pl-4 text-dark2D">
        <div className="font-medium text-lg pb-3 my-3">{serviceType ? serviceType: "Services"}</div>
        {servicesData.map((service, index) => (
          <div key={index} className="grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]">
            <div className="col-span-3 ml-auto mr-3">
              <img src={service.image} alt="blog" className="rounded" />
            </div>
            <div className="col-span-9 ml-3">
              <div className="font-medium text-sm text-dark2D/80 mb-1.5">
                {service.title}
              </div>
              <div className="text-xs text-dark2D/80">
                {service.rating}k views
              </div>
            </div>
          </div>
        ))}
        <div className="text-tertiary font-medium cursor-pointer ml-3">
          Show more
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
