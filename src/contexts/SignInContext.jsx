import { createContext, useState } from "react";
import {SignInModal } from "./../components";

export const SigninContext = createContext();

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
        <SigninContext.Provider value={value}>
            <div className="relative">
            {children}
            <div className="absolute top-0 right-0 w-full flex justify-center mx-auto">
               {signInModal && <SignInModal />}
            </div>
            </div>
        </SigninContext.Provider>
    )
}

export default SignInProvider;