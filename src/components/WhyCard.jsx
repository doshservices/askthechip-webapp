import React from "react";

const WhyCard = ({ title, text, icon }) => {
  return (
    <div style={{
      border: "1px solid hsla(172, 92%, 21%, 0.6)",
      boxShadow: "1.8237026929855347px 1.8237026929855347px 14.589621543884277px 1.8237026929855347px hsla(172, 91%, 8%, 0.05)"
    }} className="bg-[#ffffff] max-w-[284px] shadow-lg rounded-xl px-4 pt-8 pb-4 mt-16">
      <div className="flex justify-center">
        <div style={{ border: "1px solid hsla(172, 92%, 28%, 0.6)" }} className="flex justify-center items-center mb-6 bg-white rounded-full shadow-lg w-20 aspect-square -mt-16">
          <img src={icon} alt="Why Joining" className="p-3" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-normal mx-auto text-[1.2rem] leading-[1.3] text-primary mb-3">
          {title}
        </h2>
        <p className="text-[#2d2d2d] text-justify text-[.8rem] leading-[24px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
