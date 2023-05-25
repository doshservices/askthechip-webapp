import { createContext, useState } from "react";
import {SignInModal } from "./../components";

export const SignInContext = createContext();

const SignInProvider = ({ children }) => {
    const [signInModal, setSignInModal] = useState(false);

    const openSignInModal = () => {
        setSignInModal(true)
    }
    const closeSignInModal = () => {
        setSignInModal(false)
    }
    const value = { openSignInModal, closeSignInModal }
    return (
        <SignInContext.Provider value={value}>
            <div className="relative">
            {children}
            <div className="absolute top-0 right-0 w-full flex justify-center mx-auto">
               {signInModal && <SignInModal />}
            </div>
            </div>
        </SignInContext.Provider>
    )
}

export default SignInProvider;