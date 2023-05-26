import { createContext, useState } from "react";
import { SignInModal } from "../components";

export const SignInAsContext = createContext({
  openSignInModal: () => {},
  closeSignInModal: () => {},
});

const SignInAsProvider = ({ children }) => {
  const [signInModal, setSignInModal] = useState(false);

  const openSignInModal = () => {
    setSignInModal(true);
  };
  const closeSignInModal = () => {
    setSignInModal(false);
  };
  const value = { openSignInModal, closeSignInModal };

  return (
    <SignInAsContext.Provider value={value}>
      <div className="relative">
        {children}
        <div className="absolute top-0 right-0 w-full flex justify-center mx-auto">
          {signInModal && <SignInModal />}
        </div>
      </div>
    </SignInAsContext.Provider>
  );
};

export default SignInAsProvider;
