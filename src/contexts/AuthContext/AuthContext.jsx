import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext({
  user: null,
  setUser: () => null
});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const value = {
    user, setUser
  }
  let authUser = localStorage.getItem('authUser');
  useEffect(() => {
    setUser(JSON.parse(authUser));
  }, []);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider;