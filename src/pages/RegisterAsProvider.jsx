import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";

import Button from "./../components/Button";

const RegisterAsProvider = () => {
  return (
    <div className="min-h-screen font-Inter">
      <div className="flex flex-col md:flex-row h-full md:h-screen">
        <div className="w-full md:w-[50%] h-screen overflow-y-auto">
          <div className="h-16 ml-4 md:ml-8 mt-4">
            <Link to="/">
              <img src={logo} alt="Ask the chip" />
            </Link>
          </div>
          <div className="w-[90%] max-w-[600px] flex flex-col justify-center items-center ml-4 md:ml-8 mb-6">
            <div className="flex items-start w-[90%]">
              <h1 className="font-Inter text-[32px] mb-8">Register as a service provider</h1>
            </div>
            <div className="grid grid-cols-1 w-[90%] mb-4">
              <label htmlFor="email" className="text-[24px] mb-4">
                Email
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid grid-cols-1 w-[90%] mb-4">
              <label htmlFor="password" className="text-[24px] mb-4">
                Password
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="grid grid-cols-1 w-[90%] mb-4">
              <label htmlFor="service_type" className="text-[24px] mb-4">
                Service type
              </label>
              <select className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]" id="service_type" name="service_type">
                <option>Accounting services</option>
                <option>Financial services</option>
                <option>Legal services</option>
              </select>
            </div>
            <div className="grid grid-cols-1 w-[90%] mb-4">
              <label htmlFor="full_name" className="text-[24px] mb-4">
                Company name
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Enter your company name"
              />
            </div>
            <div className="grid grid-cols-1 w-[90%] mb-4">
              <label htmlFor="phone_no" className="text-[24px] mb-4">
                Phone number
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="tel"
                name="phone_no"
                id="phone_no"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="grid grid-cols-1 w-[90%] mb-4">
              <label htmlFor="address" className="text-[24px] mb-4">
                Office address
              </label>
              <input
                className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="text"
                name="address"
                id="address"
                placeholder="Enter your office address"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[85%] gap-2 -ml-[5%] mb-4">
              <div>
                <label htmlFor="cac_certificate" className="text-[24px] mb-4">
                  CAC Certificate
                </label>
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 mt-2 w-[90%]"
                  type="file"
                  name="cac_certificate"
                  id="cac_certificate"
                  placeholder="Upload your CAC Certificate"
                  />
              </div>
              <div>
                <label htmlFor="rep_id" className="text-[24px] mb-4">
                  Representative ID
                </label>
                <input
                  className="bg-[#D9D9D921] outline-none border border-[#D9D9D9] rounded-lg py-1 px-2 mt-2 w-[90%]"
                  type="file"
                  name="rep_id"
                  id="rep_id"
                  placeholder="Upload your Representative ID"
                  />
              </div>
            </div>
            <div className="flex justify-center mt-4 mb-2">
              <p className="max-w-[41ch]">
                By clicking Agree & Join, you agree to the Askthechip{" "}
                <span className="text-tertiary underline">User agreement</span>,{" "}
                <span className="text-tertiary underline"> Privacy Policy</span>
                , and{" "}
                <span className="text-tertiary underline"> Cookie Policy.</span>
              </p>
            </div>
            <div className="flex justify-center my-2">
              <Button title="Register" path="onboarding" />
            </div>
            <div className="flex justify-center text-tertiary -mb-2 mt-2 underline">
              <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden md:flex bg-handBulb bg-right-bottom bg-no-repeat bg-cover h-screen">
        </div>
      </div>
    </div>
  );
};

export default RegisterAsProvider;
