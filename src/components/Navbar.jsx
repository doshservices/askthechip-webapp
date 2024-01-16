import { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../assets/ask.svg";
import { useAuth } from "../contexts/AuthContext/AuthContext";

export { logo }

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("open");
    setIsOpened(!isOpened);
  };

  const { user } = useAuth()
  // console.log(user);

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
      <nav className={`nav`}>
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="ask the chip" />
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
            {windowWidth <= 900 ?
              <Link to="/login" className="sign-in">
                Sign In
              </Link>
              : null
            }
          </div>
        </div>
        <div className="nav__links__account">
          <div className="account-type-options">
            <button>
              <span>Sign Up</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11.5 15.4854L6 9.98542L6.98542 9L11.5 13.5375L16.0146 9.02292L17 10.0083L11.5 15.4854Z" fill="#F8F8F8" />
              </svg>
            </button>
            <div>
              <Link to="/sign-up">
                As a User
              </Link>
              <Link to="/provider-signup">
                As a Service Provider
              </Link>
            </div>
          </div>
          <Link to="/login" className="sign-in">
            Sign In
          </Link>
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
