import React from "react";
import Button from "./Button";
import "../App.css";

import header from "./../assets/images/header.jpg";
import header1 from "./../assets/images/header1_1.png";
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
      <section className="flex justify-center items-center flex-col md:min-h-screen">
        <div className="flex justify-center items-center flex-col my-10">
          <h1 className="font-bold md:text-[50px] sm:text-[45px] text-[28px] text-center w-[90%] max-w-[23ch] leading-[37.99px] sm:leading-[60px] md:leading-[60px] mt-20 mb-3 text-secondary">
            Welcome to Our Community <span className="text-primary">of Entrepreneurs</span>
          </h1>
          <h2 className="text-xs md:text-lg w-[90%] max-w-[49ch] text-center mb-10 text-[#343432]">
            Where we promote innovation and value creation by addressing the non-core but critical factors that affect Entrepreneurs and Start-ups. Thereby allowing for focus on the development of the core ideas and solutions.
          </h2>
          <div>
            <Button path="login" title="Get Started" />
          </div>
        </div>
        <div className="my-0 md:my-10 mb-5 md:mb-10">
          <div className="flex max-w-full">
            <div className="flex gap-4 bg-black/50 relative">
              <div class="custom-shape-divider-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
              </div>
              <div className="grid rounded-grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <img className="h-full" src={image.src} key={index} />
                ))}
              </div>
              <div class="custom-shape-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
