import React from "react";
import { servicesData } from "../data";
import { Search } from "./home";
import Chat from "./Chat";

const Messages = () => {
  return (
    <div className="grid grid-cols-12 pl-8">
      <div className="hidden xm:grid col-span-6 h-screen pt-4 overflow-y-auto pr-10">
        <Search background="#fff" />
        <div className="mt-7">
          <div className="border border-[#EBEEF0] rounded-3xl">
            <div className="font-Inter pl-4">
              <div className=" font-semibold text-xl py-1 my-1">Groups</div>
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 pt-1 pb-3 my-2 border-b last:border-b-0 border-[#EBEEF0] mr-4"
                >
                  <div className="col-span-2 ml-auto mr-3">
                    <img
                      src={service.image}
                      alt="blog"
                      className="rounded-full"
                    />
                  </div>
                  <div className="col-span-6 ml-3">
                    <div className="font-bold text-[#303030] text-sm mb-1.5">
                      {service.title}
                    </div>
                    <div className="text-[#303030] font-light text-xs">
                      haha {service.rating}
                    </div>
                  </div>
                  <div className="col-span-4 ml-auto mr-3">
                    <div className="text-[#7C7C7C] font-light text-sm mb-1">
                      Today, 9:52pm
                    </div>
                    <div className="ml-auto w-fit text-xs">
                      <span className="bg-[#F24E1E] text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="text-tertiary font-medium cursor-pointer mr-6 my-3">
              Show more
            </div>
          </div>
          <div className="border border-[#EBEEF0] rounded-3xl mb-4">
            <div className="font-Inter pl-4">
              <div className=" font-semibold text-xl py-1 my-1">People</div>
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 pt-1 pb-3 my-2 border-b last:border-b-0 border-[#EBEEF0] mr-4"
                >
                  <div className="col-span-2 ml-auto mr-3">
                    <img
                      src={service.image}
                      alt="blog"
                      className="rounded-full"
                    />
                  </div>
                  <div className="col-span-6 ml-3">
                    <div className="font-bold text-[#303030] text-sm mb-1.5">
                      {service.title}
                    </div>
                    <div className="text-[#303030] font-light text-xs">
                      haha {service.rating}
                    </div>
                  </div>
                  <div className="col-span-4 ml-auto mr-3">
                    <div className="text-[#7C7C7C] font-light text-sm mb-1">
                      Today, 9:52pm
                    </div>
                    <div className="ml-auto w-fit text-xs">
                      <span className="bg-[#F24E1E] text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xm:col-span-6">
        <Chat />
      </div>
    </div>
  );
};

export default Messages;
