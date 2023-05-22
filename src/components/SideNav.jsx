import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";

const SideNav = () => {
  const pathname = window.location.pathname;
  return (
    <header className="min-h-screen grow">
      <nav className="font-Inter">
        <Link to="/" className="flex items-center ml-8 pt-4 mb-11">
          <img src={logo} alt="logo" />
          <div className="font-bold text-primary90 ml-2">
            Askthechip
          </div>
        </Link>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 active text-primary80 border-l-4 h-11 pl-8"
                  : "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 ml-9 h-11"
              }
            >
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 16.5H5.25V10.25H10.75V16.5H14.5V6.75L8 1.875L1.5 6.75V16.5ZM0 18V6L8 0L16 6V18H9.25V11.75H6.75V18H0Z" fill={pathname === "/home" ? "#068978" : "#2d2d2d"} fill-opacity={pathname === "/home" ? "1" : "0.8"} />
              </svg>
              <span className="ml-[6px] text-sm hidden xm:flex">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 active text-primary80 border-l-4 h-11 pl-8"
                  : "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 ml-9 h-11"
              }
            >
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.175 9.825L20.6 8.575L19.35 8L20.6 7.425L21.175 6.175L21.75 7.425L23 8L21.75 8.575L21.175 9.825ZM18 5.45L17.125 3.6L15.275 2.725L17.125 1.85L18 0L18.875 1.85L20.725 2.725L18.875 3.6L18 5.45ZM8 22C7.43333 22 6.95417 21.8042 6.5625 21.4125C6.17083 21.0208 5.975 20.5417 5.975 19.975H10.025C10.025 20.5417 9.82917 21.0208 9.4375 21.4125C9.04583 21.8042 8.56667 22 8 22ZM3.95 18.425V16.925H12.05V18.425H3.95ZM4.075 15.4C2.975 14.6833 2.10417 13.7875 1.4625 12.7125C0.820833 11.6375 0.5 10.425 0.5 9.075C0.5 7.04167 1.24167 5.28333 2.725 3.8C4.20833 2.31667 5.96667 1.575 8 1.575C10.0333 1.575 11.7917 2.31667 13.275 3.8C14.7583 5.28333 15.5 7.04167 15.5 9.075C15.5 10.425 15.1833 11.6375 14.55 12.7125C13.9167 13.7875 13.0417 14.6833 11.925 15.4H4.075ZM4.625 13.9H11.4C12.2 13.3667 12.8333 12.675 13.3 11.825C13.7667 10.975 14 10.0583 14 9.075C14 7.425 13.4125 6.0125 12.2375 4.8375C11.0625 3.6625 9.65 3.075 8 3.075C6.35 3.075 4.9375 3.6625 3.7625 4.8375C2.5875 6.0125 2 7.425 2 9.075C2 10.0583 2.23333 10.975 2.7 11.825C3.16667 12.675 3.80833 13.3667 4.625 13.9Z" fill={pathname === "/services" ? "#068978" : "#2d2d2d"} fill-opacity={pathname === "/services" ? "1" : "0.8"} />
              </svg>
              <span className="text-sm hidden xm:flex">Services</span>
            </NavLink>
          </li>
          <NavLink to="/notifications"
              className={({ isActive }) =>
              isActive
                ? "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 active text-primary80 border-l-4 h-11 pl-8"
                : "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 ml-9 h-11"
              }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium font-tertiary items-center  gap-2 my-6">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 17V15.5H2.1V7.85C2.1 6.45 2.5125 5.20417 3.3375 4.1125C4.1625 3.02083 5.25 2.33333 6.6 2.05V1.325C6.6 0.941667 6.7375 0.625 7.0125 0.375C7.2875 0.125 7.61667 0 8 0C8.38333 0 8.7125 0.125 8.9875 0.375C9.2625 0.625 9.4 0.941667 9.4 1.325V2.05C10.75 2.33333 11.8417 3.02083 12.675 4.1125C13.5083 5.20417 13.925 6.45 13.925 7.85V15.5H16V17H0ZM8 20C7.46667 20 7 19.8042 6.6 19.4125C6.2 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM3.6 15.5H12.425V7.85C12.425 6.61667 12 5.56667 11.15 4.7C10.3 3.83333 9.25833 3.4 8.025 3.4C6.79167 3.4 5.74583 3.83333 4.8875 4.7C4.02917 5.56667 3.6 6.61667 3.6 7.85V15.5Z" fill={pathname === "/notifications" ? "#068978" : "#2d2d2d"} fill-opacity={pathname === "/notifications" ? "1" : "0.8"} />
            </svg>
              <span className="ml-[6px] text-sm hidden xm:flex">Notifications</span>
            </li>
          </NavLink>
          <NavLink to="/mentorship"
            className={({ isActive }) =>
            isActive
              ? "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 active text-primary80 border-l-4 h-11 pl-8"
              : "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 ml-9 h-11"
            }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium font-tertiary items-center gap-2 my-6">
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21L6 18H1.5C1.1 18 0.75 17.8458 0.45 17.5375C0.15 17.2292 0 16.8833 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.8833 0 17.2292 0.15 17.5375 0.45C17.8458 0.75 18 1.1 18 1.5V16.5C18 16.8833 17.8458 17.2292 17.5375 17.5375C17.2292 17.8458 16.8833 18 16.5 18H12L9 21ZM1.5 16.5H6.6L9 18.9L11.4 16.5H16.5V1.5H1.5V16.5ZM10.425 10.475L13.625 9.075L10.425 7.675L9.025 4.475L7.6 7.675L4.425 9.075L7.6 10.475L9.025 13.675L10.425 10.475Z" fill={pathname === "/mentorship" ? "#068978" : "#2d2d2d"} fill-opacity={pathname === "/mentorship" ? "1" : "0.8"} />
              </svg>
              <span className="ml-[5.5px] text-sm hidden xm:flex">Mentorship</span>
            </li>
          </NavLink>
          <NavLink to="/messages"
            className={({ isActive }) =>
            isActive
              ? "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 active text-primary80 border-l-4 h-11 pl-8"
              : "flex justify-center xm:justify-start text-sm font-medium font-tertiary items-center gap-2 ml-9 h-11"
            }
          >
            <li className="flex justify-center xm:justify-start text-base font-medium font-tertiary items-center gap-2 my-6">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12.025H11.825V10.525H4V12.025ZM4 8.775H16V7.275H4V8.775ZM4 5.525H16V4.025H4V5.525ZM0 20V1.5C0 1.11667 0.15 0.770833 0.45 0.4625C0.75 0.154167 1.1 0 1.5 0H18.5C18.8833 0 19.2292 0.154167 19.5375 0.4625C19.8458 0.770833 20 1.11667 20 1.5V14.5C20 14.8833 19.8458 15.2292 19.5375 15.5375C19.2292 15.8458 18.8833 16 18.5 16H4L0 20ZM1.5 16.375L3.375 14.5H18.5V1.5H1.5V16.375Z" fill={pathname === "/messages" ? "#068978" : "#2d2d2d"} fill-opacity={pathname === "/messages" ? "1" : "0.8"} />
              </svg>
              <span className="ml-[4px] text-sm hidden xm:flex">Messages</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default SideNav;
