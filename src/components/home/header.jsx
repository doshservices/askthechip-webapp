import Search from "./search/search";
import logo from "../../assets/ask.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import power from "../../assets/icons/power-icon.svg";
import { inform } from "../../App";
const Header = ({ handleAllPost, handleLightMode, handleDarkMode, darkMode }) => {
  const { user, setUser } = useAuth();
  const pathname = window.location.pathname;
  const [isOpened, setIsOpened] = useState(false);
  const showOthers = () => {
    setIsOpened(!isOpened);
  }
  const navigateTo = useNavigate();
  const handleLogOut = () => {
    // inform("Logging you out...");
    setIsOpened(!isOpened);
    setTimeout(() => {
      setUser(null)
      localStorage.removeItem('authUser');
      localStorage.removeItem('token');
      navigateTo("/login");
    }, 2500)
  }
  const me = user
  const username = me?.role === "USER" ? `${me?.firstName} ${me?.lastName}` : `${me?.companyName}`

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
      <nav
        className={`bg-primary100 md:hidden md:bg-[#f8f8f8] h-14 font-DMSans z-[9999] w-full shadow-md transition duration-500 flex`}
      >
        <div className="flex justify-between w-full mx-6 md:mx-[6.25rem]">
          {/* Brand Logo */}
          <div className="flex my-auto">
            <Link to="/" className={`flex items-center`}>
              <img src={logo} alt="ask the chip" className="w-8" />
              <div className="font-medium text-sm text-[#f8f8f8] ml-2">
                Askthechip
              </div>
            </Link>
          </div>

        </div>
        {/* Mobile nav & toggler */}
        <div className="flex relative md:hidden">
          <button
            onClick={showOthers}
            className="flex justify-center items-center text-[#f8f8f8] right-2 md:hidden m-3 transition active:scale-90"
          >
            {!user?.profileImg ? <div className="flex items-center justify-center w-[29.39px] h-auto aspect-square rounded-full bg-primary80 font-medium"><span className="text-white">{username[0]}</span></div> :
              <img
                src={user?.profileImg}
                alt={username}
                className={`w-[52px] h-auto aspect-square rounded-full`}
              />}
          </button>
          {isOpened && (
            <div className="absolute top-11 right-1 w-32 p-4 rounded-lg bg-white shadow">
              <Link to='/profile' className="mb-2">
                <div
                  onClick={showOthers}
                  className="hover:bg-primary/20 flex cursor-pointer justify-start text-primary mb-2"
                >
                  {pathname === "/profile"
                    ?
                    <svg className="-ml-[2px] mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1675_3852)">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#068978" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1675_3852">
                          <rect width="24" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    :
                    <svg className="-ml-[2px] mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 11.9766C10.9 11.9766 10 11.6266 9.3 10.9266C8.6 10.2266 8.25 9.32656 8.25 8.22656C8.25 7.12656 8.6 6.22656 9.3 5.52656C10 4.82656 10.9 4.47656 12 4.47656C13.1 4.47656 14 4.82656 14.7 5.52656C15.4 6.22656 15.75 7.12656 15.75 8.22656C15.75 9.32656 15.4 10.2266 14.7 10.9266C14 11.6266 13.1 11.9766 12 11.9766ZM4 20.0016V17.6516C4 17.0182 4.15833 16.4766 4.475 16.0266C4.79167 15.5766 5.2 15.2349 5.7 15.0016C6.81667 14.5016 7.8875 14.1266 8.9125 13.8766C9.9375 13.6266 10.9667 13.5016 12 13.5016C13.0333 13.5016 14.0583 13.6307 15.075 13.8891C16.0917 14.1474 17.1577 14.5198 18.273 15.0064C18.7947 15.2418 19.213 15.5832 19.5278 16.0306C19.8426 16.4779 20 17.0182 20 17.6516V20.0016H4ZM5.5 18.5016H18.5V17.6516C18.5 17.3849 18.4208 17.1307 18.2625 16.8891C18.1042 16.6474 17.9083 16.4682 17.675 16.3516C16.6083 15.8349 15.6333 15.4807 14.75 15.2891C13.8667 15.0974 12.95 15.0016 12 15.0016C11.05 15.0016 10.125 15.0974 9.225 15.2891C8.325 15.4807 7.35 15.8349 6.3 16.3516C6.06667 16.4682 5.875 16.6474 5.725 16.8891C5.575 17.1307 5.5 17.3849 5.5 17.6516V18.5016ZM12 10.4766C12.65 10.4766 13.1875 10.2641 13.6125 9.83906C14.0375 9.41406 14.25 8.87656 14.25 8.22656C14.25 7.57656 14.0375 7.03906 13.6125 6.61406C13.1875 6.18906 12.65 5.97656 12 5.97656C11.35 5.97656 10.8125 6.18906 10.3875 6.61406C9.9625 7.03906 9.75 7.57656 9.75 8.22656C9.75 8.87656 9.9625 9.41406 10.3875 9.83906C10.8125 10.2641 11.35 10.4766 12 10.4766Z" fill="#2D2D2D" />
                    </svg>

                  }
                  Profile
                </div>
              </Link>
              <Link to='/settings' className="mb-2">
                <div
                  onClick={showOthers}
                  className="hover:bg-primary/20 flex cursor-pointer justify-start text-primary mb-1.5"
                >
                  <svg
                    className="mr-1.5"
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
                  Settings
                </div>
              </Link>
              <div
                onClick={handleLogOut}
                className="hover:bg-red/20 flex cursor-pointer justify-start text-[#EB5757]"
              >
                <img src={power} alt="delete" className="w-4 mr-2" />
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="hiddem md:flex gap-2 cursor-pointer">
        <div className="hidden md:flex justify-center text-xs rounded-full w-fit pl-0 p-1">
          {pathname === "/home"
            ? <>
              <div
                onClick={handleAllPost}
                className={
                  darkMode === "All Posts"
                    ? `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`
                    : `px-5 bg-transparent text-[#8C8C8C] rounded-full pb-0.5 pt-1.5 cursor-pointer`
                }
              >
                All Posts
              </div>
              <div
                onClick={handleLightMode}
                className={
                  darkMode === "White Board"
                    ? `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`
                    : `px-5 bg-transparent text-[#8C8C8C] rounded-full pb-0.5 pt-1.5 cursor-pointer`
                }
              >
                White Board
              </div>
              <div
                onClick={handleDarkMode}
                className={
                  darkMode === "Black Board"
                    ? `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`
                    : `px-5 bg-transparent text-[#8C8C8C] rounded-full pb-0.5 pt-1.5 cursor-pointer`
                }
              >
                Black Board
              </div>
            </>
            :
            <div
              className={`px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`}
            >
              All Services
            </div>
          }
        </div>
      </div>
      <div className="hidden -mr-5 md:flex w-full mt-2 sm:mt-0 sm:w-[35%]">
        <Search background={"#FCFCFC"} />
      </div>
    </div>
  );
};

export default Header;
