import React, { useState } from "react";
import { servicesData } from "../data";
import ServicesMobile from "./ServicesMobile";

const Services = () => {
  const [serviceType, setServiceType] = useState("Accounting");

  const handleServiceType = (service) => {
    setServiceType(service);
  }

  return (
    <div className="grid grid-cols-12">
      <div className="hidden md:flex flex-col col-span-6 h-screen pt-4 overflow-y-auto xm:pr-16 border-r border-[#EBEEF0]">
        <div className="font-DMSans">
          <div className="font-medium text-2xl pl-4 xm:pl-10 pb-3 mb-3">
            Services
          </div>
          <div className="flex flex-col">
            <button className={
              serviceType === "Accounting"
                ? `w-full bg-primary80 text-left text-light py-2.5 px-7 rounded border-b`
                : `w-full bg-transparent text-left text-dark2D py-2.5 px-7 rounded border-b border-[#EBEEF0]`} 
                onClick={() => handleServiceType("Accounting")}>Accounting</button>
            <button className={
              serviceType === "Administrative"
                ? `w-full bg-primary80 text-left text-light py-2.5 px-7 rounded border-b`
                : `w-full bg-transparent text-left text-dark2D py-2.5 px-7 rounded border-b border-[#EBEEF0]`}  onClick={() => handleServiceType("Administrative")}>Administrative</button>
            <button className={
              serviceType === "Financial"
                ? `w-full bg-primary80 text-left text-light py-2.5 px-7 rounded border-b`
                : `w-full bg-transparent text-left text-dark2D py-2.5 px-7 rounded border-b border-[#EBEEF0]`}  onClick={() => handleServiceType("Financial")}>Financial</button>
            <button className={
              serviceType === "Legal"
                ? `w-full bg-primary80 text-left text-light py-2.5 px-7 rounded border-b`
                : `w-full bg-transparent text-left text-dark2D py-2.5 px-7 rounded border-b border-[#EBEEF0]`}  onClick={() => handleServiceType("Legal")}>Legal</button>
            <button className={
              serviceType === "Marketing"
                ? `w-full bg-primary80 text-left text-light py-2.5 px-7 rounded border-b`
                : `w-full bg-transparent text-left text-dark2D py-2.5 px-7 rounded border-b border-[#EBEEF0]`}  onClick={() => handleServiceType("Marketing")}>Marketing</button>
            <button className={
              serviceType === "Technology"
                ? `w-full bg-primary80 text-left text-light py-2.5 px-7 rounded border-b`
                : `w-full bg-transparent text-left text-dark2D py-2.5 px-7 rounded border-b border-[#EBEEF0]`}  onClick={() => handleServiceType("Technology")}>Technology</button>
          </div>
        </div>
      </div>
      <ServicesMobile serviceType={serviceType} />
    </div>
  );
};

export default Services;
