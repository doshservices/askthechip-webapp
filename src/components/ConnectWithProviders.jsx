import React from "react";
import { connectData } from "../data";
import ConnectCard from "./ConnectCard";

const ConnectWithProviders = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-col items-center mb-3 md:mb-[59px]">
          <h1 className="font-bold text-[32px] md:text-[40px] text-center max-w-[29ch] leading-[48px] mt-8 mb-4">
            Connect with service providers
          </h1>
          <h2 className="font-semibold text-[20px] max-w-[90%] text-center mb-12 opacity-[54%]">
            Get assistance from accredited service providers at discounted fee
          </h2>
        </div>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-8 md:gap-10 px-4 md:px-10'>
          {connectData.map((item, index) => <ConnectCard key={index} title={item.title} text={item.text} icon={item.icon} />)}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithProviders;
