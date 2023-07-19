import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export const ProfileContext = createContext({
    profile: null,
    setProfile: () => null
});

const ProfileProvider = ({children}) => {
    const {user, setUser} = useAuth();
    const [profile, setProfile] = useState({});
    useEffect(() => {
        setProfile(user);
    }, [setUser]);
    const value ={
        profile, setProfile
    }
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}
export const useProfile = () => useContext(ProfileContext);
export default ProfileProvider;