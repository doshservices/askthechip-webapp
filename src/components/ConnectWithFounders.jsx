import React from "react";
// import foundersImage from "../assets/images/connect.svg";
import { Link } from "react-router-dom";

const ConnectWithFounders = () => {
  return (
    <section
      className="bg-[#2d2d2dc6] bg-foundersConnect bg-blend-overlay bg-cover bg-center py-[90px] min-h-fit font-DMSans"
      id="discover"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="w-[90%] max-w-[600px] text-white font-bold text-xl md:text-[46px] md:leading-[55px] text-center mb-[30px]">
          Connect with other
          Founders and Investors
        </h1>
        {/* <h2 className="w-[90%] max-w-[58ch] text-white text-xs md:text-base md:leading-[30px] mb-10">
          You can join us as a service provider
        </h2> */}
        <Link to="/register-account-type">
          <button
            className={`bg-transparent border text-white text-xs md:text-base py-2.5 px-8 rounded hover:scale-125 transition duration-200`}
          >
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ConnectWithFounders;
