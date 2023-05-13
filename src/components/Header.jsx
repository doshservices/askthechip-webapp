import React from "react";
import Button from "./Button";
import "../App.css";

import header from "./../assets/images/header.jpg";
import header1 from "./../assets/images/header1.png";
import header2 from "./../assets/images/header2.png";
import header3 from "./../assets/images/header3.png";
import header4 from "./../assets/images/header4.png";
import header5 from "./../assets/images/header5.png";
import header_mobile from "./../assets/images/header_mobile.jpg";
import ellipse from "./../assets/images/ellipse.svg";

  const images = [
    {
      src: header1,
    },
    {
      src: header2,
    },
    {
      src: header3,
    },
    {
      src: header4,
    },
    {
      src: header5,
    }
  ];

const Header = () => {
  return (
    <div className="font-DMSans" id="home">
      <section className="flex justify-center items-center flex-col min-h-screen">
        <div className="flex justify-center items-center flex-col my-10">
          <h1 className="font-bold md:text-[50px] sm:text-[45px] text-[36px] text-center w-[90%] max-w-[23ch] leading-[50px] sm:leading-[60px] md:leading-[60px] mt-20 mb-3 text-secondary">
            Welcome to Our Community <span className="text-primary">of Entrepreneurs</span>
          </h1>
          <h2 className="text-lg w-[90%] max-w-[49ch] text-center mb-10 text-[#343432]">
          Where we promote innovation and value creation by addressing the non-core but critical factors that affect Entrepreneurs and Start-ups. Thereby allowing for focus on the development of the core ideas and solutions.
          </h2>
          <div>
            <Button path="sign-in" title="Get Started" />
          </div>
        </div>
        <div className="my-10">
          <div className="flex max-w-full">
            <div className="flex gap-4 rounded-grid bg-black/50">
              <div className="grid rounded-grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <img src={image.src} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex items-center justify-center relative">
          <img src={ellipse} alt="Header" className="hidden md:flex absolute -top-8" />
          <img src={header} alt="Header" className="hidden md:flex" />
          <img src={header_mobile} alt="Header" className="flex md:hidden" />
          <img src={ellipse} alt="Header" className="hidden md:flex absolute -bottom-8" />
        </div> */}
      </section>
    </div>
  );
};

export default Header;
