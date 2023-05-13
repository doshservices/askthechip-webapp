import React from "react";
import logo from "./../assets/ask.svg";
import {Link} from "react-router-dom";
import Button from './Button.jsx';
import facebookPrimary from './../assets/icons/facebookPrimary.svg'
import instagramPrimary from './../assets/icons/instagramPrimary.svg'
import youtubePrimary from './../assets/icons/youtubePrimary.svg'
import twitterPrimary from './../assets/icons/twitterPrimary.svg'
import envelopePrimary from './../assets/icons/envelopePrimary.svg'

const socials = [
  {
    link: "",
    icon: facebookPrimary
  },
  {
    link: "",
    icon: instagramPrimary
  },
  {
    link: "",
    icon: twitterPrimary
  },
  {
    link: "",
    icon: youtubePrimary
  }
]
const quickLinks = [
  {
    link: "",
    text: "Invest funds"
  },
  {
    link: "",
    text: "Knowledge Bank"
  },
  {
    link: "",
    text: "Apply for Loan"
  },
  {
    link: "",
    text: "Media Enquiry"
  },
  {
    link: "",
    text: "Venture Education"
  },
  {
    link: "",
    text: "Affiliates"
  },
]
const supportLinks = [
  {
    link: "",
    text: "Contact Us"
  },
  {
    link: "",
    text: "FAQ"
  },
  {
    link: "",
    text: "Saved"
  },
  {
    link: "",
    text: "Find a Mentor"
  },
  {
    link: "",
    text: "Service Registration"
  }
]
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-9 gap-16 h-[383px] px-6 md:px-20 py-[3.75rem] border-t border-[#2d2d2d60]">
        <div className="col-span-2">
          <div className="flex items-center mb-6">
            <Link to="/" className={``}>
              <div>
                  <img src={logo} alt="ask the chip" className="w-10" />
              </div>
            </Link>
            <Link to="/">
              <div className="text-primary90 font-bold font-DMSans text-xl ml-2">Askthechip</div>
            </Link>
          </div>
          <div>
            <ul className="flex">
              {socials.map(s=>
                <li className="mr-5 hover:scale-125 active:scale-100 cursor-pointer transition duration-300">
                  <img src={s.icon} alt="Facebook" />
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex justify-between">
          <div>
            <div className="font-DMSans font-medium text-sm text-[#05675A70] mb-6">
              Quick Links
            </div>
            <ul>
              {quickLinks.map(l=> 
              <li className="font-DMSans font-medium text-sm text-primary90 mb-3 hover:scale-110 active:scale-100 cursor-pointer transition duration-300">
                {l.text}
              </li>
                )}
            </ul>
          </div>
          <div>
            <div className="font-DMSans font-medium text-sm text-[#05675A70] mb-6">
              Support
            </div>
            <ul>
              {supportLinks.map(l=> 
              <li className="font-DMSans font-medium text-sm text-primary90 mb-3 hover:scale-110 active:scale-100 cursor-pointer transition duration-300">
                {l.text}
              </li>
                )}
            </ul>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex items-center mb-12">
            <div>
              <img src={envelopePrimary} alt="Newsletter"/>
            </div>
            <div className="font-DMSans text-primary90 font-medium ml-3">
              Stay up to date on the latest from Askthechip.com
            </div>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-20 mb-5 font-DMSans font-medium">
                <div className="flex flex-col w-full">
                  <label htmlFor="fname" className="text-primary90/70 text-sm">First Name</label>
                  <input type="text" className="outline-none border-b border-primary90 " name="fname" id="fname" />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lname" className="text-primary90/70 text-sm">Last Name</label>
                  <input type="text" className="outline-none border-b border-primary90 " name="lname" id="fname" />
                </div>
            </div>
            <div className="flex flex-col mb-5 font-DMSans font-medium">
                <label htmlFor="email" className="text-primary90/70 text-sm">Email</label>
                <input type="email" className="outline-none border-b border-primary90 " name="email" id="fname" />
            </div>
            <div className="flex mb-4">
                <input type="checkbox" className="border-b border-primary90 " name="acceptance" id="acceptance" />
                <label htmlFor="acceptance" className="text-primary90/70 font-DMSans font-medium text-xs ml-2">I have read and accept the privacy policy.</label>
            </div>
            <div>
              <button className="py-2 px-[3.75rem] bg-primary90 text-white text-sm font-DMSans rounded hover:scale-90 active:scale-100 transition duration-300" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center bg-primary110 text-[#f8f8f8] h-[100px] md:h-[68px] w-full px-6 md:px-12">
        <div className="font-Montserrat">
          &copy; 2023 Askthechip.com All Rights Reserved
        </div>
        <div>
          <ul className="flex opacity-80 font-Raleway">
            <li className="mr-[1.875rem]">
              Terms and Condition 
            </li>
            <li>
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </footer>  
  );
};

export default Footer;
