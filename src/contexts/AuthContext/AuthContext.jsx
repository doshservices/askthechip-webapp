import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext({
  token: null,
  user: null,
  setUser: () => null
});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)

  useEffect(()=> {
    checkUserStatus();
  }, [user]);

  const checkUserStatus = () => {
    let token = localStorage.getItem('token');
    setToken(token);
    let authUser = localStorage.getItem('authUser');
    setUser(JSON.parse(authUser));
  }

  const value = {
    token, user, setUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;