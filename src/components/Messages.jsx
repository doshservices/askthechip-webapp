import React from "react";
import { messagesData } from "../data";
import { Search } from "./home";
import Chat from "./Chat";

const Messages = () => {
  return (
    <div className="grid grid-cols-12 pl-0 xm:pl-4">
      <div className="hidden xm:grid col-span-4 h-screen pt-4 overflow-y-auto pr-5 border-r border-[#ebeef0]">
        <div className="mt-1">
          <div className="mr-7">
            <Search background={`#fcfcfc`} placeholder={"Search People"} />
          </div>
          <div className="mt-7">
            <div className="font-DMSans pl-4">
              {messagesData.map((message, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
                >
                  <div className="col-span-2 ml-auto mr-2">
                    <img
                      src={message.image}
                      alt="blog"
                      className="rounded-full w-12"
                    />
                  </div>
                  <div className="col-span-6 ml-3">
                    <div className="font-bold text-[#303030] text-sm mb-1.5">
                      {message.sender}
                    </div>
                    <div className="text-[#303030] font-light text-xs">
                      {message.message}
                    </div>
                  </div>
                  <div className="col-span-4 ml-auto mr-3">
                    <div className="text-[#7C7C7C] font-light text-sm mb-1">
                      1hr
                    </div>
                    <div className="ml-auto w-fit text-xs">
                      <span className="bg-primary80 text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="font-DMSans pl-4">
              {messagesData.map((message, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
                >
                  <div className="col-span-2 ml-auto mr-2">
                    <img
                      src={message.image}
                      alt="blog"
                      className="rounded-full w-12"
                    />
                  </div>
                  <div className="col-span-6 ml-3">
                    <div className="font-bold text-[#303030] text-sm mb-1.5">
                      {message.sender}
                    </div>
                    <div className="text-[#303030] font-light text-xs">
                      {message.message}
                    </div>
                  </div>
                  <div className="col-span-4 ml-auto mr-3">
                    <div className="text-[#7C7C7C] font-light text-sm mb-1">
                      1hr
                    </div>
                    <div className="ml-auto w-fit text-xs">
                      <span className="bg-primary80 text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex">
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
      <div className="col-span-12 xm:col-span-8">
        <Chat />
      </div>
    </div>
  );
};

export default Messages;
