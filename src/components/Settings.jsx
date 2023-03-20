import React, { useState } from "react";
import ButtonNew from "../components/ButtonNew";
import { settingsButtons } from "../data";
import clsx from "clsx";
import PaymentForm from "./PaymentForm";

const Settings = () => {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-3 min-h-screen ml-6 pr-6 pt-6 border-r border-[#EBEEF0]">
        <div className="font-Inter font-bold text-lg">Settings</div>
        {settingsButtons.map((button) => (
          <div className="my-4" key={button.id}>
            <ButtonNew
              intent={activeButton === button.id ? `primary` : `secondary`}
              onClick={() => setActiveButton(button.id)}
              // className={activeButton=== button.id ? clsx('border-tertiary'):('border-gray-800')}
              className="w-full font-Inter text-lg py-[0.4rem]"
            >
              {button.title}
            </ButtonNew>
          </div>
        ))}
      </div>
      <div className="col-span-6 pt-20">
        {activeButton === 1 ? (
          <div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="full_name"
                className="mb-2 font-medium font-Inter text-left w-[80%] mx-auto"
              >
                Full name
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="phone_no"
                className="mb-2 font-medium font-Inter w-[80%] mx-auto"
              >
                Phone number
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="tel"
                  name="phone_no"
                  id="phone_no"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label
                htmlFor="email"
                className="mb-2 font-medium font-Inter w-[80%] mx-auto"
              >
                Email
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex mt-20 mr-[10%] items-end justify-end my-4">
              <ButtonNew
                intent={`primary`}
                className="w-fit px-8 font-Inter text-lg py-[0.4rem]"
              >
                Save
              </ButtonNew>
            </div>
          </div>
        ) : activeButton === 2 ? (
          <div>
            <PaymentForm />
          </div>
        ) : activeButton === 3 ? (
          <div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="old_pass"
                className="mb-2 font-medium font-Inter text-left w-[80%] mx-auto"
              >
                Old Password
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="password"
                  name="old_pass"
                  id="old_pass"
                  placeholder="Enter your old password"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="new_pass"
                className="mb-2 font-medium font-Inter w-[80%] mx-auto"
              >
                New Password
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="password"
                  name="new_pass"
                  id="new_pass"
                  placeholder="Enter your new password"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label
                htmlFor="confirm_new_pass"
                className="mb-2 font-medium font-Inter w-[80%] mx-auto"
              >
                Confirm New Password
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="password"
                  name="confirm_new_pass"
                  id="confirm_new_pass"
                  placeholder="Confirm your new password"
                />
              </div>
            </div>
            <div className="flex mt-20 mr-[10%] items-end justify-end my-4">
              <ButtonNew
                intent={`primary`}
                className="w-fit px-8 font-Inter text-lg py-[0.4rem]"
              >
                Change
              </ButtonNew>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-Inter ml-[10%] mr-4">
              <div className="font-semibold mb-2">
                Are you sure you want to delete this account?
              </div>
              <div className="mb-2">
                Deleting your account will erase your current data from the
                platform
              </div>
              <div className="mb-8">
                Kindly enter email and password to confirm this action.
              </div>
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label
                htmlFor="email"
                className="mb-2 font-medium font-Inter w-[80%] mx-auto"
              >
                Email
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="old_pass"
                className="mb-2 font-medium font-Inter text-left w-[80%] mx-auto"
              >
                Password
              </label>
              <div className="flex w-full justify-center">
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[80%]"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex mt-20 mr-[10%] items-end justify-end my-4">
              <ButtonNew
                intent={`primary`}
                className="w-fit px-8 font-Inter text-lg py-[0.4rem]"
              >
                Deactivate
              </ButtonNew>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
