import React from "react";
import foundersImage from "../assets/images/connect.svg";
import { Link } from "react-router-dom";

const ConnectWithFounders = () => {
  return (
    <section className="bg-[#2d2d2dc6] bg-foundersConnect bg-blend-overlay bg-cover bg-center py-[70px] min-h-fit font-DMSans" id="discover">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="w-[90%] max-w-[16ch] text-white font-bold text-[32px] md:text-[46px] leading-[55px] text-center mb-[10px]">
          Connect with other Founders and Investors
        </h1>
        <h2 className="w-[90%] max-w-[58ch] text-white leading-[30px] md:leading-[30px] mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius lacinia ante, in faucibus nibh sollicitudin id. Fusce rhoncus dolor libero, eget pretium nulla interdum ac.
        </h2>
        <Link to="/login">
          <button
            className={
              `bg-transparent border text-white py-2.5 px-8 rounded hover:scale-125 transition duration-200`
            }
          >
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ConnectWithFounders;
