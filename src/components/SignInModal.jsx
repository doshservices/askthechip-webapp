import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SignInAsContext } from "../contexts/SignInAsContext";

const SignInModal = () => {
  const { closeSignInModal } = useContext(SignInAsContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/3 rounded-lg shadow-lg p-8">
        <div className="flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-dark2D font-bold py-2 px-4 rounded mr-2"
            onClick={closeSignInModal}
          >
            Close
          </button>
        </div>
        <div className="flex w-full">
          <div className="flex justify-between my-4">
            <NavLink
              onClick={closeSignInModal}
              to="/sign-up"
              className="px-8 bg-primary py-1 rounded-lg text-white mr-4"
            >
              As A User
            </NavLink>
            <NavLink
              onClick={closeSignInModal}
              to="/provider-signup"
              className="px-8 bg-primary py-1 rounded-lg text-white"
            >
              As A Service Provider
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
