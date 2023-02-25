import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";
import { interestData } from "../data";

import Button from "./../components/Button";

const Onboarding = () => {
  return (
    <div className="min-h-screen font-Inter">
      <div className="flex flex-col md:flex-row h-full md:h-screen">
        <div className="w-full md:w-[50%] h-screen overflow-y-auto">
          <div className="h-16 ml-4 md:ml-8 mt-4">
            <Link to="/">
              <img src={logo} alt="Ask the chip" />
            </Link>
          </div>
          <div className="w-[90%] max-w-[600px] flex flex-col justify-center items-center ml-4 md:ml-8 mb-8">
            <div className="flex flex-col w-[90%]">
              <h1 className="font-Inter text-[32px] mb-1">Select Interest</h1>
              <h2 className="mb-2">Suggested interests based on your profile</h2>
            </div>
            <div className="flex flex-col w-[90%] items-start justify-start">
              <div className="my-2">
                <button className="bg-[#2F2924] text-[#FDFBF9] py-1 px-2 border rounded">
                  <span>+</span>
                  Add a new interest
                </button>
              </div>
              <div className="max-w-[22ch] w-[90%]">
                {interestData.map(interest => (
                  <button className="text-[#2F2924] bg-[#FDFBF9] rounded px-2 py-1 border my-1 mx-1">
                    <span>+</span>
                    {interest.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4 mb-2">
              <p className="max-w-[41ch] w-[95%]">
                By clicking Agree & Join, you agree to the Askthechip{" "}
                <span className="text-tertiary underline">User agreement</span>,{" "}
                <span className="text-tertiary underline"> Privacy Policy</span>
                , and{" "}
                <span className="text-tertiary underline"> Cookie Policy.</span>
              </p>
            </div>
            <div className="flex justify-center my-2">
              <Button title="Continue" path="pricing" />
            </div>
            <div className="flex justify-center text-tertiary -mb-2 mt-2 underline">
              <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden md:flex bg-handBulb bg-center bg-no-repeat bg-cover h-screen">
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
