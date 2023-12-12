import React from "react";
import Button from "./Button/Button";
import "../App.scss";

import header1 from "./../assets/images/header1_1.png";
import header2 from "./../assets/images/header2.png";
import header3 from "./../assets/images/header3.png";
import header4 from "./../assets/images/header4.png";
import header5 from "./../assets/images/header5.png";

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
  },
];
const mobileImages = [
  {
    src: header1,
  },
  {
    src: header2,
  },
  // {
  //   src: header3,
  // },
  // {
  //   src: header4,
  // },
  {
    src: header5,
  },
];

const Header = () => {
  return (
    <div className="font-DMSans  pt-6" id="explore">
      <section className="flex justify-center items-center flex-col">
        <section className="flex justify-center items-center flex-col pb-10 sm:pb-0 pt-6">
          <h1 className="font-bold md:text-[50px] sm:text-[45px] text-[28px] text-center w-[90%] max-w-[23ch] leading-[37.99px] sm:leading-[60px] md:leading-[60px] mt-20 mb-5 text-secondary">
            Welcome to Our Community{" "}
            <span className="text-primary">of Entrepreneurs</span>
          </h1>
          <p className="text-[.9rem] md:text-lg w-[90%] max-w-[49ch] text-center mb-8 text-[#343432]">
            Here, We promote Innovation and help you to create value by
            addressing the critical factors that affect you as an Entrepreneur
            or a Start-Up. Through our diverse, hands-on resources, you will
            receive guidance every step of the way from Conception to
            Actualization of your business and profitability. So whether you are
            just starting out or you are already in business there is a resource
            that can help your Business grow.
          </p>
          <div>
            <Button path="login" title="Get Started" />
          </div>
        </section>
        <div className="my-0">
          <div className="flex max-w-full">
            <div className="flex gap-4 bg-black/50 relative">
              <div className="custom-shape-divider-top">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
              <div className="hidden bg-white md:grid rounded-grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <img className="h-full" src={image.src} key={index} />
                ))}
              </div>
              <div className="grid bg-white md:hidden rounded-grid grid-cols-3 gap-4">
                {mobileImages.map((image, index) => (
                  <img className="h-full" src={image.src} key={index} />
                ))}
              </div>
              <div className="custom-shape-divider-bottom">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                    className="shape-fill"
                  ></path>
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
