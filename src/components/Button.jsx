import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, title }) => {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname === "/sign-in" ? (
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
              title === "Sign In"
                ? `bg-primary text-white py-2 px-10 rounded hover:scale-125 transition duration-200`
                : `bg-primary text-white py-2 px-4 rounded hover:scale-110 transition duration-200`
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
