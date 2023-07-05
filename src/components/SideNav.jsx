import { useContext } from "react";
import logo from "../assets/logo.svg";
import gear from "../assets/icons/gear.svg";
import power from "../assets/icons/power-icon.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { inform } from "../App";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";

const SideNav = () => {
  const navigateTo = useNavigate();
  const pathname = window.location.pathname;
  const {user, setUser} = useContext(AuthContext);
  const handleLogOut = () => {
    inform("Logging you out...");
    setTimeout(()=> {
      setUser(null)
      localStorage.removeItem('authUser');
      navigateTo("/login");
    }, 2500)
  }
  return (
    <header className="min-h-screen grow">
      <ToastContainer />
      <nav className="font-Inter">
        <Link to="/" className="flex items-center ml-6 md:ml-8 pt-4 mb-11">
          <img src={logo} alt="logo" />
          <div className="hidden xm:flex font-bold text-primary90 ml-2">Askthechip</div>
        </Link>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-0 xm:pl-8"
                  : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-1 xm:ml-9 h-11"
              }
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 16.5H5.25V10.25H10.75V16.5H14.5V6.75L8 1.875L1.5 6.75V16.5ZM0 18V6L8 0L16 6V18H9.25V11.75H6.75V18H0Z"
                  fill={pathname === "/home" ? "#068978" : "#2d2d2d"}
                  fillOpacity={pathname === "/home" ? "1" : "0.8"}
                />
              </svg>
              <span className="ml-[6px] text-sm hidden xm:flex">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-1 xm:pl-8"
                  : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-2 xm:ml-9 h-11"
              }
            >
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.175 9.825L20.6 8.575L19.35 8L20.6 7.425L21.175 6.175L21.75 7.425L23 8L21.75 8.575L21.175 9.825ZM18 5.45L17.125 3.6L15.275 2.725L17.125 1.85L18 0L18.875 1.85L20.725 2.725L18.875 3.6L18 5.45ZM8 22C7.43333 22 6.95417 21.8042 6.5625 21.4125C6.17083 21.0208 5.975 20.5417 5.975 19.975H10.025C10.025 20.5417 9.82917 21.0208 9.4375 21.4125C9.04583 21.8042 8.56667 22 8 22ZM3.95 18.425V16.925H12.05V18.425H3.95ZM4.075 15.4C2.975 14.6833 2.10417 13.7875 1.4625 12.7125C0.820833 11.6375 0.5 10.425 0.5 9.075C0.5 7.04167 1.24167 5.28333 2.725 3.8C4.20833 2.31667 5.96667 1.575 8 1.575C10.0333 1.575 11.7917 2.31667 13.275 3.8C14.7583 5.28333 15.5 7.04167 15.5 9.075C15.5 10.425 15.1833 11.6375 14.55 12.7125C13.9167 13.7875 13.0417 14.6833 11.925 15.4H4.075ZM4.625 13.9H11.4C12.2 13.3667 12.8333 12.675 13.3 11.825C13.7667 10.975 14 10.0583 14 9.075C14 7.425 13.4125 6.0125 12.2375 4.8375C11.0625 3.6625 9.65 3.075 8 3.075C6.35 3.075 4.9375 3.6625 3.7625 4.8375C2.5875 6.0125 2 7.425 2 9.075C2 10.0583 2.23333 10.975 2.7 11.825C3.16667 12.675 3.80833 13.3667 4.625 13.9Z"
                  fill={pathname === "/services" ? "#068978" : "#2d2d2d"}
                  fillOpacity={pathname === "/services" ? "1" : "0.8"}
                />
              </svg>
              <span className="text-sm hidden xm:flex">Services</span>
            </NavLink>
          </li>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              isActive
                ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-0 xm:pl-8"
                : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-1 xm:ml-9 h-11"
            }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium items-center  gap-2 my-6">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17V15.5H2.1V7.85C2.1 6.45 2.5125 5.20417 3.3375 4.1125C4.1625 3.02083 5.25 2.33333 6.6 2.05V1.325C6.6 0.941667 6.7375 0.625 7.0125 0.375C7.2875 0.125 7.61667 0 8 0C8.38333 0 8.7125 0.125 8.9875 0.375C9.2625 0.625 9.4 0.941667 9.4 1.325V2.05C10.75 2.33333 11.8417 3.02083 12.675 4.1125C13.5083 5.20417 13.925 6.45 13.925 7.85V15.5H16V17H0ZM8 20C7.46667 20 7 19.8042 6.6 19.4125C6.2 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM3.6 15.5H12.425V7.85C12.425 6.61667 12 5.56667 11.15 4.7C10.3 3.83333 9.25833 3.4 8.025 3.4C6.79167 3.4 5.74583 3.83333 4.8875 4.7C4.02917 5.56667 3.6 6.61667 3.6 7.85V15.5Z"
                  fill={pathname === "/notifications" ? "#068978" : "#2d2d2d"}
                  fillOpacity={pathname === "/notifications" ? "1" : "0.8"}
                />
              </svg>
              <span className="ml-[6px] text-sm hidden xm:flex">
                Notifications
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive
                ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-0 xm:pl-8"
                : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-1 xm:ml-9 h-11"
            }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium items-center gap-2 my-6">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 21L6 18H1.5C1.1 18 0.75 17.8458 0.45 17.5375C0.15 17.2292 0 16.8833 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.8833 0 17.2292 0.15 17.5375 0.45C17.8458 0.75 18 1.1 18 1.5V16.5C18 16.8833 17.8458 17.2292 17.5375 17.5375C17.2292 17.8458 16.8833 18 16.5 18H12L9 21ZM1.5 16.5H6.6L9 18.9L11.4 16.5H16.5V1.5H1.5V16.5ZM10.425 10.475L13.625 9.075L10.425 7.675L9.025 4.475L7.6 7.675L4.425 9.075L7.6 10.475L9.025 13.675L10.425 10.475Z"
                  fill={pathname === "/mentorship" ? "#068978" : "#2d2d2d"}
                  fillOpacity={pathname === "/mentorship" ? "1" : "0.8"}
                />
              </svg>
              <span className="ml-[5.5px] text-sm hidden xm:flex">
                Mentorship
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive
                ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-0 xm:pl-8"
                : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-1 xm:ml-9 h-11"
            }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium items-center gap-2 my-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.025H11.825V10.525H4V12.025ZM4 8.775H16V7.275H4V8.775ZM4 5.525H16V4.025H4V5.525ZM0 20V1.5C0 1.11667 0.15 0.770833 0.45 0.4625C0.75 0.154167 1.1 0 1.5 0H18.5C18.8833 0 19.2292 0.154167 19.5375 0.4625C19.8458 0.770833 20 1.11667 20 1.5V14.5C20 14.8833 19.8458 15.2292 19.5375 15.5375C19.2292 15.8458 18.8833 16 18.5 16H4L0 20ZM1.5 16.375L3.375 14.5H18.5V1.5H1.5V16.375Z"
                  fill={pathname === "/messages" ? "#068978" : "#2d2d2d"}
                  fillOpacity={pathname === "/messages" ? "1" : "0.8"}
                />
              </svg>
              <span className="ml-[4px] text-sm hidden xm:flex">Messages</span>
            </li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-0 xm:pl-8"
                : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-1 xm:ml-9 h-11"
            }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium items-center gap-2 my-6">
              {pathname === "/profile"
                ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1675_3852)">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#068978" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1675_3852">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11.9766C10.9 11.9766 10 11.6266 9.3 10.9266C8.6 10.2266 8.25 9.32656 8.25 8.22656C8.25 7.12656 8.6 6.22656 9.3 5.52656C10 4.82656 10.9 4.47656 12 4.47656C13.1 4.47656 14 4.82656 14.7 5.52656C15.4 6.22656 15.75 7.12656 15.75 8.22656C15.75 9.32656 15.4 10.2266 14.7 10.9266C14 11.6266 13.1 11.9766 12 11.9766ZM4 20.0016V17.6516C4 17.0182 4.15833 16.4766 4.475 16.0266C4.79167 15.5766 5.2 15.2349 5.7 15.0016C6.81667 14.5016 7.8875 14.1266 8.9125 13.8766C9.9375 13.6266 10.9667 13.5016 12 13.5016C13.0333 13.5016 14.0583 13.6307 15.075 13.8891C16.0917 14.1474 17.1577 14.5198 18.273 15.0064C18.7947 15.2418 19.213 15.5832 19.5278 16.0306C19.8426 16.4779 20 17.0182 20 17.6516V20.0016H4ZM5.5 18.5016H18.5V17.6516C18.5 17.3849 18.4208 17.1307 18.2625 16.8891C18.1042 16.6474 17.9083 16.4682 17.675 16.3516C16.6083 15.8349 15.6333 15.4807 14.75 15.2891C13.8667 15.0974 12.95 15.0016 12 15.0016C11.05 15.0016 10.125 15.0974 9.225 15.2891C8.325 15.4807 7.35 15.8349 6.3 16.3516C6.06667 16.4682 5.875 16.6474 5.725 16.8891C5.575 17.1307 5.5 17.3849 5.5 17.6516V18.5016ZM12 10.4766C12.65 10.4766 13.1875 10.2641 13.6125 9.83906C14.0375 9.41406 14.25 8.87656 14.25 8.22656C14.25 7.57656 14.0375 7.03906 13.6125 6.61406C13.1875 6.18906 12.65 5.97656 12 5.97656C11.35 5.97656 10.8125 6.18906 10.3875 6.61406C9.9625 7.03906 9.75 7.57656 9.75 8.22656C9.75 8.87656 9.9625 9.41406 10.3875 9.83906C10.8125 10.2641 11.35 10.4766 12 10.4766Z" fill="#2D2D2D" />
                </svg>

              }
              <span className="ml-[4px] text-sm hidden xm:flex">Profile</span>
            </li>
          </NavLink>
        </ul>
        <div className="my-5">
          <div className=" border-t border-dark2D/40 mx-5 xm:mx-10"></div>
        </div>
        <div>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 active text-primary80 border-l-4 h-11 pl-0 xm:pl-8"
                : "flex justify-center xm:justify-start text-sm font-medium items-center gap-2 ml-1 xm:ml-9 h-11"
            }
          >
            <div className="flex justify-center xm:justify-start text-base font-medium items-center gap-2 my-6">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.7 20L7.2 16.85C6.88333 16.7333 6.55 16.575 6.2 16.375C5.85 16.175 5.54167 15.9667 5.275 15.75L2.325 17.1L0 13L2.7 11.025C2.66667 10.875 2.64583 10.7042 2.6375 10.5125C2.62917 10.3208 2.625 10.15 2.625 10C2.625 9.85 2.62917 9.67917 2.6375 9.4875C2.64583 9.29583 2.66667 9.125 2.7 8.975L0 7L2.325 2.9L5.275 4.25C5.54167 4.03333 5.85 3.825 6.2 3.625C6.55 3.425 6.88333 3.275 7.2 3.175L7.7 0H12.3L12.8 3.15C13.1167 3.26667 13.4542 3.42083 13.8125 3.6125C14.1708 3.80417 14.475 4.01667 14.725 4.25L17.675 2.9L20 7L17.3 8.925C17.3333 9.09167 17.3542 9.27083 17.3625 9.4625C17.3708 9.65417 17.375 9.83333 17.375 10C17.375 10.1667 17.3708 10.3417 17.3625 10.525C17.3542 10.7083 17.3333 10.8833 17.3 11.05L20 13L17.675 17.1L14.725 15.75C14.4583 15.9667 14.1542 16.1792 13.8125 16.3875C13.4708 16.5958 13.1333 16.75 12.8 16.85L12.3 20H7.7ZM10 13.25C10.9 13.25 11.6667 12.9333 12.3 12.3C12.9333 11.6667 13.25 10.9 13.25 10C13.25 9.1 12.9333 8.33333 12.3 7.7C11.6667 7.06667 10.9 6.75 10 6.75C9.1 6.75 8.33333 7.06667 7.7 7.7C7.06667 8.33333 6.75 9.1 6.75 10C6.75 10.9 7.06667 11.6667 7.7 12.3C8.33333 12.9333 9.1 13.25 10 13.25ZM10 11.75C9.51667 11.75 9.10417 11.5792 8.7625 11.2375C8.42083 10.8958 8.25 10.4833 8.25 10C8.25 9.51667 8.42083 9.10417 8.7625 8.7625C9.10417 8.42083 9.51667 8.25 10 8.25C10.4833 8.25 10.8958 8.42083 11.2375 8.7625C11.5792 9.10417 11.75 9.51667 11.75 10C11.75 10.4833 11.5792 10.8958 11.2375 11.2375C10.8958 11.5792 10.4833 11.75 10 11.75ZM8.9 18.5H11.1L11.45 15.7C12 15.5667 12.5208 15.3583 13.0125 15.075C13.5042 14.7917 13.95 14.45 14.35 14.05L17 15.2L18 13.4L15.65 11.675C15.7167 11.3917 15.7708 11.1125 15.8125 10.8375C15.8542 10.5625 15.875 10.2833 15.875 10C15.875 9.71667 15.8583 9.4375 15.825 9.1625C15.7917 8.8875 15.7333 8.60833 15.65 8.325L18 6.6L17 4.8L14.35 5.95C13.9667 5.51667 13.5333 5.15417 13.05 4.8625C12.5667 4.57083 12.0333 4.38333 11.45 4.3L11.1 1.5H8.9L8.55 4.3C7.98333 4.41667 7.45417 4.61667 6.9625 4.9C6.47083 5.18333 6.03333 5.53333 5.65 5.95L3 4.8L2 6.6L4.35 8.325C4.28333 8.60833 4.22917 8.8875 4.1875 9.1625C4.14583 9.4375 4.125 9.71667 4.125 10C4.125 10.2833 4.14583 10.5625 4.1875 10.8375C4.22917 11.1125 4.28333 11.3917 4.35 11.675L2 13.4L3 15.2L5.65 14.05C6.05 14.45 6.49583 14.7917 6.9875 15.075C7.47917 15.3583 8 15.5667 8.55 15.7L8.9 18.5Z"
                  fill={pathname === "/settings" ? `#068978` : `#2d2d2d`}
                  fillOpacity={pathname === "/settings" ? `1` : `0.8`}
                />
              </svg>
              <span className="ml-[4px] text-sm hidden xm:flex">Settings</span>
            </div>
          </NavLink>
          <div onClick={handleLogOut} className="cursor-pointer flex items-center xm:items-start justify-center xm:justify-start text-sm font-medium gap-2 mt-2 ml-1 xm:ml-9 text-[#EB5757] hover:scale-90 active:scale-100 transition duration-300">
            <img src={power} alt="Settings" className="px-0.5" />
            <span className="hidden xm:flex">Log out</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SideNav;
