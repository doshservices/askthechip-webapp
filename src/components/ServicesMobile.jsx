import React from "react";
import { Search } from "./home/search/search";
import { servicesData } from "../data";

const ServicesMobile = () => {
  return (
    <div className="col-span-12 md:col-span-6 h-screen pt-4 overflow-y-auto  pr-4 xm:pr-20">
    <div className="pl-4 sm:pl-0">
        <Search background="#EBEEF0" />
    </div>
    <div className="font-Inter pl-4">
        <div className=" font-bold text-xl py-3 my-3 border-b border-[#EBEEF0]">
        Graphics Designing
        </div>
        {servicesData.map((service) => (
        <div className="grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]">
            <div className="col-span-9 ml-3">
            <div className="font-bold text-[#0F1419] mb-1.5">
                {service.title}
            </div>
            <div className="text-[#5B7083] font-medium text-sm">
                Rated by {service.rating} people
            </div>
            </div>
            <div className="col-span-3 ml-auto mr-3">
            <img src={service.image} alt="blog" className="rounded-2xl" />
            </div>
        </div>
        ))}
        <div className="text-tertiary font-medium cursor-pointer ml-3">
        Show more
        </div>
    </div>
    <div className="font-Inter pl-4">
        <div className=" font-bold text-xl py-3 my-3 border-b border-[#EBEEF0]">
        Accounting
        </div>
        {servicesData.map((service) => (
        <div className="grid grid-cols-12 pt-2 pb-4 my-2 border-b border-[#EBEEF0]">
            <div className="col-span-9 ml-3">
            <div className="font-bold text-[#0F1419] mb-1.5">
                {service.title}
            </div>
            <div className="text-[#5B7083] font-medium text-sm">
                Rated by {service.rating} people
            </div>
            </div>
            <div className="col-span-3 ml-auto mr-3">
            <img src={service.image} alt="blog" className="" />
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
