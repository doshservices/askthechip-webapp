import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext({
  user: null,
  setUser: () => null
});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    checkUserStatus();
  }, []);

  const checkUserStatus = () => {
    let authUser = localStorage.getItem('authUser');
    setUser(JSON.parse(authUser));
  }

  const value = {
    user, setUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;