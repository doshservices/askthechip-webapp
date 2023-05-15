import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../assets/ask.svg";
import Button from "./Button";

const Navbar = () => {
  const pathname = window.location.pathname;
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav
      className={`bg-[#f8f8f8] h-[4.625rem] font-DMSans fixed w-full shadow-md transition duration-500 flex`}
    >
      <div className="flex justify-between w-full mx-[6.25rem]">
        {/* Brand Logo */}
        <div className="flex my-auto">
          <Link to="/" className={``}>
            <img src={logo} alt="ask the chip" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex font-body my-auto items-center justify-between w-full max-w-[500px]">
          <NavLink
            to="/home"
            smooth
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Home
          </NavLink>
          <HashLink
            to="#explore"
            smooth
            className="px-4 hover:underline decoration-2 underline-offset-4"
          >
            Explore
          </HashLink>
          <NavLink
              to="/pricing"
              smooth
              className={({ isActive }) =>
                isActive
                  ? "px-4 underline decoration-2 underline-offset-4"
                  : "px-4 hover:underline decoration-2 underline-offset-4"
              }
            >
              Pricing
            </NavLink>
          <HashLink
            to="#about"
            smooth
            className="px-4 hover:underline decoration-2 underline-offset-4"
          >
            About us
          </HashLink>
          <HashLink
            to="#discover"
            smooth
            className="px-4 hover:underline decoration-2 underline-offset-4"
          >
            Contact
          </HashLink>
        </div>

        <div className="flex justify-center items-center">
          <button className="text-primary80 border border-primary80 font-medium text-sm px-[1.875rem] py-[0.625rem] rounded-lg">Join Now</button>
        </div>
      </div>
      {/* Mobile nav & toggler */}
      <div className="flex md:hidden">
        <button
          onClick={showMenu}
          className="flex pt-[1rem] text-secondary absolute right-2 md:hidden p-3 transition active:scale-90"
        >
          <FaBars size={30} />
        </button>
        <div
          ref={navRef}
          className={`flex translate-x-[100%] z-50 bg-white md:hidden transition flex-col w-[70%] items-center font-body uppercase my-auto h-screen fixed top-0 right-0`}
        >
          <div
            className="flex justify-center mb-4 mt-[50%]"
            onClick={showMenu}
          >
            <NavLink
              to="/home"
              smooth
              className="px-4 hover:underline decoration-2 underline-offset-4"
              end
            >
              Home
            </NavLink>
          </div>
          <div className="flex justify-center my-4" onClick={showMenu}>
            <HashLink
              to="#about"
              smooth
              className="px-4 hover:underline decoration-2 underline-offset-4"
            >
              About
            </HashLink>
          </div>
          <div className="flex justify-center my-4" onClick={showMenu}>
            <HashLink
              to="#discover"
              smooth
              className="px-4 hover:underline decoration-2 underline-offset-4"
            >
              Discover
            </HashLink>
          </div>
          <div className="flex justify-center my-4" onClick={showMenu}>
            <NavLink
              to="/login"
              className="px-8 bg-primary py-1 rounded-lg text-white"
            >
              Signin
            </NavLink>
          </div>
          <div className="flex justify-center my-4" onClick={showMenu}>
            <NavLink
              to="/SignUp"
              className="px-4 border-[0.5px] py-1 rounded-lg border-primary"
            >
              SignUp
            </NavLink>
          </div>
          <button
            onClick={showMenu}
            className="flex absolute right-2 md:hidden p-3 ease-in transition duration-500 active:scale-90"
          >
            <FaTimes size={40} />
          </button>
        </div>
      </div>

      {/* Mobile nav & toggler */}
      {/* <div className="flex md:hidden">
          <button
            onClick={showMenu}
            className="absolute right-2 flex h-16 items-center justify-center p-3 text-secondary transition active:scale-90 md:hidden"
          >
            <FaBars />
          </button>
          <div
            ref={navRef}
            className={`font-body fixed  top-0 right-0 my-auto flex h-screen w-[70%] translate-x-[100%] flex-col items-center bg-primary uppercase transition md:hidden`}
          >
            <div
              className="mb-4 mt-[50%] flex justify-center"
              onClick={showMenu}
            >
              <HashLink
                to={pathname === "/" ? `#home` : "/#home"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Home
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#services` : "/#services"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Services
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#about` : "/#about"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                About Us
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#testimonials` : "/#testimonials"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Testimonials
              </HashLink>
            </div>
            <div className="my-4 flex justify-center" onClick={showMenu}>
              <HashLink
                to={pathname === "/" ? `#contact` : "/#contact"}
                smooth
                className="px-4 decoration-2 underline-offset-4 hover:underline"
              >
                Contact Us
              </HashLink>
            </div>
            <button
              onClick={showMenu}
              className="absolute top-1 right-3 flex scale-110 cursor-pointer p-2 text-4xl font-bold text-secondary transition duration-500 ease-in active:scale-110 md:hidden"
            >
              &times;
            </button>
          </div>
        </div> */}
    </nav>
  );
};

export default Navbar;
