import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export const ProfileContext = createContext({
    profile: null,
    setProfile: () => null
});

const ProfileProvider = ({children}) => {
    const {user} = useAuth();
    const [profile, setProfile] = useState({});
    useEffect(() => {
        setProfile(user?.user);
    }, [user]);
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