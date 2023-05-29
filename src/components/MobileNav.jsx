import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const pathname = window.location.pathname;
  return (
    <div className="mt-4">
      <ul className="flex w-[92%] sm:w-[85%] mx-auto items-end justify-between">
        <li className="flex justify-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2 active"
                : "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2"
            }
          >
            {pathname === "/home" ?
              (<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 17V11H12.5V17H17.5V9H20.5L10.5 0L0.5 9H3.5V17H8.5Z" fill="#068978" />
              </svg>
              ) : (<svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 16.5H5.25V10.25H10.75V16.5H14.5V6.75L8 1.875L1.5 6.75V16.5ZM0 18V6L8 0L16 6V18H9.25V11.75H6.75V18H0Z"
                  fill="#2d2d2d"
                  fillOpacity="0.8"
                />
              </svg>)
            }
            <span className="font-Raleway w-12 sm:w-16 text-center">Home</span>
          </NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2 active"
                : "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2"
            }
          >
            {pathname === "/services" ? (
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 20H10C10 21.1 9.1 22 8 22C6.9 22 6 21.1 6 20ZM4 19H12V17H4V19ZM15.5 9.5C15.5 13.32 12.84 15.36 11.73 16H4.27C3.16 15.36 0.5 13.32 0.5 9.5C0.5 5.36 3.86 2 8 2C12.14 2 15.5 5.36 15.5 9.5ZM20.37 7.37L19 8L20.37 8.63L21 10L21.63 8.63L23 8L21.63 7.37L21 6L20.37 7.37ZM18 6L18.94 3.94L21 3L18.94 2.06L18 0L17.06 2.06L15 3L17.06 3.94L18 6Z" fill="#068978" />
              </svg>
            ) : (<svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="#2d2d2d"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.175 9.825L20.6 8.575L19.35 8L20.6 7.425L21.175 6.175L21.75 7.425L23 8L21.75 8.575L21.175 9.825ZM18 5.45L17.125 3.6L15.275 2.725L17.125 1.85L18 0L18.875 1.85L20.725 2.725L18.875 3.6L18 5.45ZM8 22C7.43333 22 6.95417 21.8042 6.5625 21.4125C6.17083 21.0208 5.975 20.5417 5.975 19.975H10.025C10.025 20.5417 9.82917 21.0208 9.4375 21.4125C9.04583 21.8042 8.56667 22 8 22ZM3.95 18.425V16.925H12.05V18.425H3.95ZM4.075 15.4C2.975 14.6833 2.10417 13.7875 1.4625 12.7125C0.820833 11.6375 0.5 10.425 0.5 9.075C0.5 7.04167 1.24167 5.28333 2.725 3.8C4.20833 2.31667 5.96667 1.575 8 1.575C10.0333 1.575 11.7917 2.31667 13.275 3.8C14.7583 5.28333 15.5 7.04167 15.5 9.075C15.5 10.425 15.1833 11.6375 14.55 12.7125C13.9167 13.7875 13.0417 14.6833 11.925 15.4H4.075ZM4.625 13.9H11.4C12.2 13.3667 12.8333 12.675 13.3 11.825C13.7667 10.975 14 10.0583 14 9.075C14 7.425 13.4125 6.0125 12.2375 4.8375C11.0625 3.6625 9.65 3.075 8 3.075C6.35 3.075 4.9375 3.6625 3.7625 4.8375C2.5875 6.0125 2 7.425 2 9.075C2 10.0583 2.23333 10.975 2.7 11.825C3.16667 12.675 3.80833 13.3667 4.625 13.9Z"
                fill="#2d2d2d"
                fillOpacity="0.8"
              />
            </svg>)}
            <span className="font-Raleway w-12 sm:w-16 text-center">Services</span>
          </NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink to="/notifications"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2 active"
                : "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2"
            }
          >
            {pathname === "/notifications" ? (
              <svg className="-mb-0.5" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z" fill="#068978" />
              </svg>
            )
              : (<svg className="-mb-0.5"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17V15.5H2.1V7.85C2.1 6.45 2.5125 5.20417 3.3375 4.1125C4.1625 3.02083 5.25 2.33333 6.6 2.05V1.325C6.6 0.941667 6.7375 0.625 7.0125 0.375C7.2875 0.125 7.61667 0 8 0C8.38333 0 8.7125 0.125 8.9875 0.375C9.2625 0.625 9.4 0.941667 9.4 1.325V2.05C10.75 2.33333 11.8417 3.02083 12.675 4.1125C13.5083 5.20417 13.925 6.45 13.925 7.85V15.5H16V17H0ZM8 20C7.46667 20 7 19.8042 6.6 19.4125C6.2 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM3.6 15.5H12.425V7.85C12.425 6.61667 12 5.56667 11.15 4.7C10.3 3.83333 9.25833 3.4 8.025 3.4C6.79167 3.4 5.74583 3.83333 4.8875 4.7C4.02917 5.56667 3.6 6.61667 3.6 7.85V15.5Z"
                  fill="#2d2d2d"
                  fillOpacity="0.8"
                />
              </svg>)}
            <span className="font-Raleway w-14 sm:w-20 mt-1 text-center">Notifications</span>
          </NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink to="/mentorship"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2 active"
                : "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2"
            }
          >
            {pathname === "/mentorship" ? (
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H6L9 21L12 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM10.88 10.88L9 15L7.12 10.88L3 9L7.12 7.12L9 3L10.88 7.12L15 9L10.88 10.88Z" fill="#068978" />
              </svg>

            ) : (
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 21L6 18H1.5C1.1 18 0.75 17.8458 0.45 17.5375C0.15 17.2292 0 16.8833 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.8833 0 17.2292 0.15 17.5375 0.45C17.8458 0.75 18 1.1 18 1.5V16.5C18 16.8833 17.8458 17.2292 17.5375 17.5375C17.2292 17.8458 16.8833 18 16.5 18H12L9 21ZM1.5 16.5H6.6L9 18.9L11.4 16.5H16.5V1.5H1.5V16.5ZM10.425 10.475L13.625 9.075L10.425 7.675L9.025 4.475L7.6 7.675L4.425 9.075L7.6 10.475L9.025 13.675L10.425 10.475Z"
                  fill="#2d2d2d"
                  fillOpacity="0.8"
                />
              </svg>
            )}

            <span className="font-Raleway w-12 sm:w-16 text-center">Mentorship</span>
          </NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink to="/messages"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2 active"
                : "flex flex-col justify-center text-[10px] sm:text-xs font-semibold font-tertiary items-center gap-2"
            }
          >
            {pathname === "/messages" ?
              (
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 20L4.5 16H18.5C19.6 16 20.5 15.1 20.5 14V2C20.5 0.9 19.6 0 18.5 0ZM4.5 7H16.5V9H4.5V7ZM12.5 12H4.5V10H12.5V12ZM16.5 6H4.5V4H16.5V6Z" fill="#068978" />
                </svg>

              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.025H11.825V10.525H4V12.025ZM4 8.775H16V7.275H4V8.775ZM4 5.525H16V4.025H4V5.525ZM0 20V1.5C0 1.11667 0.15 0.770833 0.45 0.4625C0.75 0.154167 1.1 0 1.5 0H18.5C18.8833 0 19.2292 0.154167 19.5375 0.4625C19.8458 0.770833 20 1.11667 20 1.5V14.5C20 14.8833 19.8458 15.2292 19.5375 15.5375C19.2292 15.8458 18.8833 16 18.5 16H4L0 20ZM1.5 16.375L3.375 14.5H18.5V1.5H1.5V16.375Z"
                    fill="#2d2d2d"
                    fillOpacity="0.8"
                  />
                </svg>
              )}
            <span className="font-Raleway w-10 sm:w-16 text-center">Messages</span>
          </NavLink>
        </li>
      </ul>
    </div >
  );
};

export default MobileNav;
