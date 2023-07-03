import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, title }) => {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname === "/login" ? (
        <button
          type="submit"
          className={`bg-[#09CEB4] text-white py-2 px-24 rounded-xl hover:scale-125 transition duration-200`}
        >
          {title}
        </button>
      ) : (
        <Link to={`/${path}`}>
          <button
            className={
              title === "Get Started"
                ? `bg-primary text-xs md:text-base text-white py-2.5 px-8 rounded hover:scale-125 transition duration-200`
                : `bg-primary text-xs md:text-base text-white py-2.5 px-4 rounded hover:scale-110 transition duration-200`
            }
          >
            {title}
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
