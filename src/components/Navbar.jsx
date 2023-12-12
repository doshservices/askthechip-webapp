import { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../assets/ask.svg";
import { useAuth } from "../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("open");
    setIsOpened(!isOpened);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const resize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
    }
  })

  return (
    <header className="intro__header">
      <nav className={`nav transition duration-500 shadow-md`}>
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="ask the chip" />
            <div className="font-medium text-[1rem] text-[#f8f8f8] ml-2">
              Askthechip
            </div>
          </Link>
        </div>
        <div ref={navRef} className="nav__links">
          <div className="nav__links__hash font-body">
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
          <div className="nav__links__account">
            {user?.role === "USER" ?
              <Link to="/provider-signup">
                <button className="text-primary80 border border-primary80 font-medium text-sm px-[1.8rem] py-[0.625rem] rounded-lg transition duration-200 hover:scale-90 active:100">
                  Become a Provider
                </button>
              </Link> :
              null}
            <Link to={user !== null ? "/home" : "/login"}>
              <button className="text-light border border-primary80 bg-primary80 font-medium text-sm px-[1.8rem] py-[0.625rem] rounded-lg transition duration-200 hover:scale-90 active:100">
                {user !== null ? "Home" : "Join Now"}
                {/* Join Now */}
              </button>
            </Link>
          </div>
        </div>
        {/* Mobile nav & toggler */}
        <button
          onClick={showMenu}
          className="nav__toggler text-[#f8f8f8] transition active:scale-90"
        >
          {!isOpened ?
            <FaBars size={25} />
            : <FaTimes size={25} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
