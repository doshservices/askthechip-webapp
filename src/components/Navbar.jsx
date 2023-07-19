import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../assets/ask.svg";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
    setIsOpened(!isOpened);
  };

  return (
    <nav
      className={`bg-primary100 md:bg-[#f8f8f8] h-[4.625rem] font-DMSans fixed z-[9999] w-full shadow-md transition duration-500 flex`}
    >
      <div className="flex justify-between w-full mx-6 md:mx-[6.25rem]">
        {/* Brand Logo */}
        <div className="flex my-auto">
          <Link to="/" className={`flex items-center`}>
            <img src={logo} alt="ask the chip" />
            <div className="font-medium text-sm text-[#f8f8f8] ml-2">
              Askthechip
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex font-body my-auto items-center justify-between w-full max-w-[500px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Home
          </NavLink>
          <HashLink
            to="/#explore"
            smooth={true}
            className="px-4 hover:underline decoration-2 underline-offset-4"
          >
            Explore
          </HashLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "px-4 underline decoration-2 underline-offset-4"
                : "px-4 hover:underline decoration-2 underline-offset-4"
            }
          >
            Pricing
          </NavLink>
          <HashLink
            to="/#about"
            smooth={true}
            className="px-4 hover:underline decoration-2 underline-offset-4"
          >
            About us
          </HashLink>
          <HashLink
            to="/#contact"
            smooth={true}
            className="px-4 hover:underline decoration-2 underline-offset-4"
          >
            Contact
          </HashLink>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="mr-[0.625rem]">
            <Link to="/provider-signup">
              <button className="text-primary80 border border-primary80 font-medium text-sm px-[1.875rem] py-[0.625rem] rounded-lg transition duration-200 hover:scale-90 active:100">
                Become a Provider
              </button>
            </Link>
          </div>
          <div>
            <Link to="/sign-up">
              <button className="text-light border border-primary80 bg-primary80 font-medium text-sm px-[1.875rem] py-[0.625rem] rounded-lg transition duration-200 hover:scale-90 active:100">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile nav & toggler */}
      <div className="flex md:hidden">
        <button
          onClick={showMenu}
          className="flex pt-[1.25rem] text-[#f8f8f8] absolute right-2 md:hidden p-3 transition active:scale-90"
        >
          {!isOpened ?
            <FaBars size={30} />
            : <FaTimes size={35} />}
        </button>
        <div
          ref={navRef}
          className={`flex translate-x-[100%] z-50 bg-white md:hidden transition flex-col w-full items-left pl-12 font-DMSans font-bold text-dark2D capitalize my-auto h-full fixed top-[72px] right-0 pt-16`}
        >
          {/* <div className="flex mb-4 mt-16" onClick={showMenu}>
            <NavLink
              to="/home"
              className="px-4 hover:underline decoration-2 underline-offset-4"
              end
            >
              Home
            </NavLink>
          </div> */}
          <div className="flex my-4" onClick={showMenu}>
            <HashLink
              to="/#explore"
              smooth={true}
              className="px-4 hover:underline decoration-2 underline-offset-4"
            >
              Explore
            </HashLink>
          </div>
          <div className="flex my-4" onClick={showMenu}>
            <NavLink
              to="/pricing"
              className="px-4 hover:underline decoration-2 underline-offset-4"
              end
            >
              Pricing
            </NavLink>
          </div>
          <div className="flex my-4" onClick={showMenu}>
            <HashLink
              to="/#about"
              smooth={true}
              className="px-4 hover:underline decoration-2 underline-offset-4"
            >
              About Us
            </HashLink>
          </div>
          <div className="flex my-4" onClick={showMenu}>
            <HashLink
              to="/#contact"
              smooth={true}
              className="px-4 hover:underline decoration-2 underline-offset-4"
            >
              Contact
            </HashLink>
          </div>
          <div className="flex my-4">
            <div className="px-8 border border-primary80 bg-primary80 py-1 rounded-lg text-white">
              <Link to="sign-up">
                Join Now
              </Link>
            </div>
          </div>
          <div className="flex my-4">
            <div className="px-8 border border-primary80 py-1 rounded-lg text-primary80">
              <Link to="provider-signup">
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
