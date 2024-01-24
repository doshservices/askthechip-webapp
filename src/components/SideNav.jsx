import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import power from "../assets/icons/power-icon.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";
import { clearUser } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearJwt } from "../store/slice/authSlice";
import { clearChatUserId } from "../store/slice/chatViewSlice";

const SideNav = () => {
  const navigateTo = useNavigate();
  const pathname = window.location.pathname;
  const { setUser } = useContext(AuthContext);
  const dispatch = useDispatch()
  const location = useLocation()
  const [logBtn, setLogBtn] = useState(false)
  const [logMsg, setLogMsg] = useState(false)
  const token = localStorage.getItem("token")

  const handleLogOut = () => {
    setLogMsg(true)
    setTimeout(() => {
      setUser(null)
      dispatch(clearUser())
      dispatch(clearJwt())
      dispatch(clearChatUserId())
      localStorage.removeItem('authUser');
      localStorage.removeItem('token');
      navigateTo("/login", { state: { from: location }, replace: true });
    }, 2500)
  }

  useEffect(() => {
    if (logBtn === true) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.style.overflow = 'unset';
  }, [logBtn])

  return (
    <aside className="side__nav">
      <ToastContainer />
      <nav className="side__nav__nav">
        <Link to={token ? "/home" : "/"} className="logo">
          <img src={logo} alt="logo" />
          <span>Askthechip</span>
        </Link>
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? "home active" : "home"}>
              {pathname === "/home"
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1666_2089)">
                    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#068978" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1666_2089">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5.5 19.5H9.25V13.25H14.75V19.5H18.5V9.75L12 4.875L5.5 9.75V19.5ZM4 21V9L12 3L20 9V21H13.25V14.75H10.75V21H4Z" fill="#2D2D2D" fillOpacity="0.8" />
                </svg>
              }
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "services active" : "services"}>
              {pathname === "/services"
                ?
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-[3px]" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1666_2114)">
                    <path d="M7 20H11C11 21.1 10.1 22 9 22C7.9 22 7 21.1 7 20ZM5 19H13V17H5V19ZM16.5 9.5C16.5 13.32 13.84 15.36 12.73 16H5.27C4.16 15.36 1.5 13.32 1.5 9.5C1.5 5.36 4.86 2 9 2C13.14 2 16.5 5.36 16.5 9.5ZM21.37 7.37L20 8L21.37 8.63L22 10L22.63 8.63L24 8L22.63 7.37L22 6L21.37 7.37ZM19 6L19.94 3.94L22 3L19.94 2.06L19 0L18.06 2.06L16 3L18.06 3.94L19 6Z" fill="#068978" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1666_2114">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-[3px]" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1659_1830)">
                    <path d="M22.175 9.825L21.6 8.575L20.35 8L21.6 7.425L22.175 6.175L22.75 7.425L24 8L22.75 8.575L22.175 9.825ZM19 5.45L18.125 3.6L16.275 2.725L18.125 1.85L19 0L19.875 1.85L21.725 2.725L19.875 3.6L19 5.45ZM9 22C8.43333 22 7.95417 21.8042 7.5625 21.4125C7.17083 21.0208 6.975 20.5417 6.975 19.975H11.025C11.025 20.5417 10.8292 21.0208 10.4375 21.4125C10.0458 21.8042 9.56667 22 9 22ZM4.95 18.425V16.925H13.05V18.425H4.95ZM5.075 15.4C3.975 14.6833 3.10417 13.7875 2.4625 12.7125C1.82083 11.6375 1.5 10.425 1.5 9.075C1.5 7.04167 2.24167 5.28333 3.725 3.8C5.20833 2.31667 6.96667 1.575 9 1.575C11.0333 1.575 12.7917 2.31667 14.275 3.8C15.7583 5.28333 16.5 7.04167 16.5 9.075C16.5 10.425 16.1833 11.6375 15.55 12.7125C14.9167 13.7875 14.0417 14.6833 12.925 15.4H5.075ZM5.625 13.9H12.4C13.2 13.3667 13.8333 12.675 14.3 11.825C14.7667 10.975 15 10.0583 15 9.075C15 7.425 14.4125 6.0125 13.2375 4.8375C12.0625 3.6625 10.65 3.075 9 3.075C7.35 3.075 5.9375 3.6625 4.7625 4.8375C3.5875 6.0125 3 7.425 3 9.075C3 10.0583 3.23333 10.975 3.7 11.825C4.16667 12.675 4.80833 13.3667 5.625 13.9Z" fill="#2D2D2D" fillOpacity="0.8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1659_1830">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" className={({ isActive }) => isActive ? "notifications active" : "notifications"}>
              {pathname === "/notifications"
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#068978" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V17.5H6.1V9.85C6.1 8.45 6.5125 7.20417 7.3375 6.1125C8.1625 5.02083 9.25 4.33333 10.6 4.05V3.325C10.6 2.94167 10.7375 2.625 11.0125 2.375C11.2875 2.125 11.6167 2 12 2C12.3833 2 12.7125 2.125 12.9875 2.375C13.2625 2.625 13.4 2.94167 13.4 3.325V4.05C14.75 4.33333 15.8417 5.02083 16.675 6.1125C17.5083 7.20417 17.925 8.45 17.925 9.85V17.5H20V19H4ZM12 22C11.4667 22 11 21.8042 10.6 21.4125C10.2 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM7.6 17.5H16.425V9.85C16.425 8.61667 16 7.56667 15.15 6.7C14.3 5.83333 13.2583 5.4 12.025 5.4C10.7917 5.4 9.74583 5.83333 8.8875 6.7C8.02917 7.56667 7.6 8.61667 7.6 9.85V17.5Z" fill="#2D2D2D" fillOpacity="0.8" />
                </svg>
              }
              <span>Notifications</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentorship" className={({ isActive }) => isActive ? "mentorship active" : "mentorship"}>
              {pathname === "/mentorship"
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1666_2895)">
                    <path d="M19 2H5C3.9 2 3 2.9 3 4V18C3 19.1 3.9 20 5 20H9L12 23L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM13.88 12.88L12 17L10.12 12.88L6 11L10.12 9.12L12 5L13.88 9.12L18 11L13.88 12.88Z" fill="#068978" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1666_2895">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 23L9 20H4.5C4.1 20 3.75 19.8458 3.45 19.5375C3.15 19.2292 3 18.8833 3 18.5V3.5C3 3.1 3.15 2.75 3.45 2.45C3.75 2.15 4.1 2 4.5 2H19.5C19.8833 2 20.2292 2.15 20.5375 2.45C20.8458 2.75 21 3.1 21 3.5V18.5C21 18.8833 20.8458 19.2292 20.5375 19.5375C20.2292 19.8458 19.8833 20 19.5 20H15L12 23ZM4.5 18.5H9.6L12 20.9L14.4 18.5H19.5V3.5H4.5V18.5ZM13.425 12.475L16.625 11.075L13.425 9.675L12.025 6.475L10.6 9.675L7.425 11.075L10.6 12.475L12.025 15.675L13.425 12.475Z" fill="#2D2D2D" fillOpacity="0.8" />
                </svg>
              }
              <span>Mentorship</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className={({ isActive }) => isActive ? "messages active" : "messages"}>
              {pathname === "/messages"
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1666_2232)">
                    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="#068978" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1666_2232">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 14.025H13.825V12.525H6V14.025ZM6 10.775H18V9.275H6V10.775ZM6 7.525H18V6.025H6V7.525ZM2 22V3.5C2 3.11667 2.15 2.77083 2.45 2.4625C2.75 2.15417 3.1 2 3.5 2H20.5C20.8833 2 21.2292 2.15417 21.5375 2.4625C21.8458 2.77083 22 3.11667 22 3.5V16.5C22 16.8833 21.8458 17.2292 21.5375 17.5375C21.2292 17.8458 20.8833 18 20.5 18H6L2 22ZM3.5 18.375L5.375 16.5H20.5V3.5H3.5V18.375Z" fill="#2D2D2D" fillOpacity="0.8" />
                </svg>
              }
              <span>Messages</span>
            </NavLink>
          </li>
          {/* <li className="search">
            <NavLink to="/search" className={({ isActive }) => isActive ? "search active" : "search"}>
              {pathname === "/search"
                ?
                <svg width="23" height="23" fill="#068978" fillOpacity="0.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m21.75 20.063-5.816-5.818a7.523 7.523 0 0 0 1.44-4.433c0-4.17-3.393-7.562-7.562-7.562-4.17 0-7.562 3.392-7.562 7.562s3.392 7.562 7.562 7.562a7.523 7.523 0 0 0 4.433-1.44l5.818 5.816 1.687-1.688ZM9.812 14.986a5.174 5.174 0 1 1-.002-10.35 5.174 5.174 0 0 1 0 10.349Z"></path>
                </svg>
                :
                <svg width="23" height="23" fill="#2d2d2d" fillOpacity="0.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m21.75 20.063-5.816-5.818a7.523 7.523 0 0 0 1.44-4.433c0-4.17-3.393-7.562-7.562-7.562-4.17 0-7.562 3.392-7.562 7.562s3.392 7.562 7.562 7.562a7.523 7.523 0 0 0 4.433-1.44l5.818 5.816 1.687-1.688ZM9.812 14.986a5.174 5.174 0 1 1-.002-10.35 5.174 5.174 0 0 1 0 10.349Z"></path>
                </svg>
              }
              <span>Search</span>
            </NavLink>
          </li> */}
          <li className="profile">
            <NavLink to="/profile" className={({ isActive }) => isActive ? "profile active" : "profile"}>
              {pathname === "/profile"
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_1666_2952)">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#068978" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1666_2952">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 11.9766C10.9 11.9766 10 11.6266 9.3 10.9266C8.6 10.2266 8.25 9.32656 8.25 8.22656C8.25 7.12656 8.6 6.22656 9.3 5.52656C10 4.82656 10.9 4.47656 12 4.47656C13.1 4.47656 14 4.82656 14.7 5.52656C15.4 6.22656 15.75 7.12656 15.75 8.22656C15.75 9.32656 15.4 10.2266 14.7 10.9266C14 11.6266 13.1 11.9766 12 11.9766ZM4 20.0016V17.6516C4 17.0182 4.15833 16.4766 4.475 16.0266C4.79167 15.5766 5.2 15.2349 5.7 15.0016C6.81667 14.5016 7.8875 14.1266 8.9125 13.8766C9.9375 13.6266 10.9667 13.5016 12 13.5016C13.0333 13.5016 14.0583 13.6307 15.075 13.8891C16.0917 14.1474 17.1577 14.5198 18.273 15.0064C18.7947 15.2418 19.213 15.5832 19.5278 16.0306C19.8426 16.4779 20 17.0182 20 17.6516V20.0016H4ZM5.5 18.5016H18.5V17.6516C18.5 17.3849 18.4208 17.1307 18.2625 16.8891C18.1042 16.6474 17.9083 16.4682 17.675 16.3516C16.6083 15.8349 15.6333 15.4807 14.75 15.2891C13.8667 15.0974 12.95 15.0016 12 15.0016C11.05 15.0016 10.125 15.0974 9.225 15.2891C8.325 15.4807 7.35 15.8349 6.3 16.3516C6.06667 16.4682 5.875 16.6474 5.725 16.8891C5.575 17.1307 5.5 17.3849 5.5 17.6516V18.5016ZM12 10.4766C12.65 10.4766 13.1875 10.2641 13.6125 9.83906C14.0375 9.41406 14.25 8.87656 14.25 8.22656C14.25 7.57656 14.0375 7.03906 13.6125 6.61406C13.1875 6.18906 12.65 5.97656 12 5.97656C11.35 5.97656 10.8125 6.18906 10.3875 6.61406C9.9625 7.03906 9.75 7.57656 9.75 8.22656C9.75 8.87656 9.9625 9.41406 10.3875 9.83906C10.8125 10.2641 11.35 10.4766 12 10.4766Z" fill="#2D2D2D" />
                </svg>
              }
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="divider"></li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "settings active" : "settings"}>
            {pathname === "/settings"
              ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="none">
                <g clipPath="url(#clip0_1675_4484)">
                  <path d="M19.6401 12.9384C19.6801 12.6384 19.7001 12.3284 19.7001 11.9984C19.7001 11.6784 19.6801 11.3584 19.6301 11.0584L21.6601 9.47844C21.8401 9.33844 21.8901 9.06844 21.7801 8.86844L19.8601 5.54844C19.7401 5.32844 19.4901 5.25844 19.2701 5.32844L16.8801 6.28844C16.3801 5.90844 15.8501 5.58844 15.2601 5.34844L14.9001 2.80844C14.8601 2.56844 14.6601 2.39844 14.4201 2.39844H10.5801C10.3401 2.39844 10.1501 2.56844 10.1101 2.80844L9.75011 5.34844C9.16011 5.58844 8.62011 5.91844 8.13011 6.28844L5.74011 5.32844C5.52011 5.24844 5.27011 5.32844 5.15011 5.54844L3.24011 8.86844C3.12011 9.07844 3.16011 9.33844 3.36011 9.47844L5.39011 11.0584C5.34011 11.3584 5.30011 11.6884 5.30011 11.9984C5.30011 12.3084 5.32011 12.6384 5.37011 12.9384L3.34011 14.5184C3.16011 14.6584 3.11011 14.9284 3.22011 15.1284L5.14011 18.4484C5.26011 18.6684 5.51011 18.7384 5.73011 18.6684L8.12011 17.7084C8.62011 18.0884 9.15011 18.4084 9.74011 18.6484L10.1001 21.1884C10.1501 21.4284 10.3401 21.5984 10.5801 21.5984H14.4201C14.6601 21.5984 14.8601 21.4284 14.8901 21.1884L15.2501 18.6484C15.8401 18.4084 16.3801 18.0884 16.8701 17.7084L19.2601 18.6684C19.4801 18.7484 19.7301 18.6684 19.8501 18.4484L21.7701 15.1284C21.8901 14.9084 21.8401 14.6584 21.6501 14.5184L19.6401 12.9384ZM12.5001 15.5984C10.5201 15.5984 8.90011 13.9784 8.90011 11.9984C8.90011 10.0184 10.5201 8.39844 12.5001 8.39844C14.4801 8.39844 16.1001 10.0184 16.1001 11.9984C16.1001 13.9784 14.4801 15.5984 12.5001 15.5984Z" fill="#068978" />
                </g>
                <defs>
                  <clipPath id="clip0_1675_4484">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.7 22L9.2 18.85C8.88333 18.7333 8.55 18.575 8.2 18.375C7.85 18.175 7.54167 17.9667 7.275 17.75L4.325 19.1L2 15L4.7 13.025C4.66667 12.875 4.64583 12.7042 4.6375 12.5125C4.62917 12.3208 4.625 12.15 4.625 12C4.625 11.85 4.62917 11.6792 4.6375 11.4875C4.64583 11.2958 4.66667 11.125 4.7 10.975L2 9L4.325 4.9L7.275 6.25C7.54167 6.03333 7.85 5.825 8.2 5.625C8.55 5.425 8.88333 5.275 9.2 5.175L9.7 2H14.3L14.8 5.15C15.1167 5.26667 15.4542 5.42083 15.8125 5.6125C16.1708 5.80417 16.475 6.01667 16.725 6.25L19.675 4.9L22 9L19.3 10.925C19.3333 11.0917 19.3542 11.2708 19.3625 11.4625C19.3708 11.6542 19.375 11.8333 19.375 12C19.375 12.1667 19.3708 12.3417 19.3625 12.525C19.3542 12.7083 19.3333 12.8833 19.3 13.05L22 15L19.675 19.1L16.725 17.75C16.4583 17.9667 16.1542 18.1792 15.8125 18.3875C15.4708 18.5958 15.1333 18.75 14.8 18.85L14.3 22H9.7ZM12 15.25C12.9 15.25 13.6667 14.9333 14.3 14.3C14.9333 13.6667 15.25 12.9 15.25 12C15.25 11.1 14.9333 10.3333 14.3 9.7C13.6667 9.06667 12.9 8.75 12 8.75C11.1 8.75 10.3333 9.06667 9.7 9.7C9.06667 10.3333 8.75 11.1 8.75 12C8.75 12.9 9.06667 13.6667 9.7 14.3C10.3333 14.9333 11.1 15.25 12 15.25ZM12 13.75C11.5167 13.75 11.1042 13.5792 10.7625 13.2375C10.4208 12.8958 10.25 12.4833 10.25 12C10.25 11.5167 10.4208 11.1042 10.7625 10.7625C11.1042 10.4208 11.5167 10.25 12 10.25C12.4833 10.25 12.8958 10.4208 13.2375 10.7625C13.5792 11.1042 13.75 11.5167 13.75 12C13.75 12.4833 13.5792 12.8958 13.2375 13.2375C12.8958 13.5792 12.4833 13.75 12 13.75ZM10.9 20.5H13.1L13.45 17.7C14 17.5667 14.5208 17.3583 15.0125 17.075C15.5042 16.7917 15.95 16.45 16.35 16.05L19 17.2L20 15.4L17.65 13.675C17.7167 13.3917 17.7708 13.1125 17.8125 12.8375C17.8542 12.5625 17.875 12.2833 17.875 12C17.875 11.7167 17.8583 11.4375 17.825 11.1625C17.7917 10.8875 17.7333 10.6083 17.65 10.325L20 8.6L19 6.8L16.35 7.95C15.9667 7.51667 15.5333 7.15417 15.05 6.8625C14.5667 6.57083 14.0333 6.38333 13.45 6.3L13.1 3.5H10.9L10.55 6.3C9.98333 6.41667 9.45417 6.61667 8.9625 6.9C8.47083 7.18333 8.03333 7.53333 7.65 7.95L5 6.8L4 8.6L6.35 10.325C6.28333 10.6083 6.22917 10.8875 6.1875 11.1625C6.14583 11.4375 6.125 11.7167 6.125 12C6.125 12.2833 6.14583 12.5625 6.1875 12.8375C6.22917 13.1125 6.28333 13.3917 6.35 13.675L4 15.4L5 17.2L7.65 16.05C8.05 16.45 8.49583 16.7917 8.9875 17.075C9.47917 17.3583 10 17.5667 10.55 17.7L10.9 20.5Z" fill="#2D2D2D" />
              </svg>
            }
            <span>Settings</span>
          </NavLink>
        </ul>
        {logBtn ?
          <div className="log-btn">
            <div className="bg-[#fff] p-6">
              {logMsg ?
                <p className="text-[1.2rem] text-center mx-6 font-[500]">Logging out...</p>
                :
                <>
                  <p className="text-[1.2rem] text-center mx-6 font-[500]">Are you sure you want to log out?</p>
                  <div className="flex justify-end mt-10">
                    <button onClick={handleLogOut} className="font-[500] mr-10">
                      Yes
                    </button>
                    <button onClick={() => setLogBtn(false)} className="text-[#E31818] font-[500]">
                      No
                    </button>
                  </div>
                </>
              }
            </div>
          </div>
          : null
        }
        <button onClick={() => setLogBtn(true)} className="logout">
          <img src={power} alt="logout" />
          <span>Log out</span>
        </button>
      </nav>
    </aside>
  );
};

export default SideNav;
