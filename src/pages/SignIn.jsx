import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/ask.svg";
import globe from "./../assets/images/connect-globe.svg";

import Button from "./../components/Button";

const SignIn = () => {
  return (
    <div className="min-h-screen font-Inter">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[50%]">
          <div className="h-16 ml-4 md:ml-8 mt-4">
            <Link to="/">
              <img src={logo} alt="Ask the chip" />
            </Link>
          </div>
          <div className="max-w-[600px] ml-4 md:ml-8">
            <div>
              <h1 className="font-Inter text-[32px] mb-6">Sign In</h1>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="username" className="text-[24px] mb-4">
                Username
              </label>
              <input
                className="bg-[#D9D9D921] border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[24px] mb-4">
                Password
              </label>
              <input
                className="bg-[#D9D9D921] border border-[#D9D9D9] rounded-lg py-1 px-2 w-[90%]"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center text-tertiary my-6 md:my-8 underline">
              <Link>Forgot Password?</Link>
            </div>
            <div className="flex justify-center my-6">
              <Button title="Sign In" path="sign-in" />
            </div>
            <div className="flex justify-center text-tertiary my-6 md:my-8 underline">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-[50%]">
          <div className="w-full flex items-center">
            <img
              src={globe}
              alt="People on globe"
              className="max-h-[80vh] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
