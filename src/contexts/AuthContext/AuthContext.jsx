import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext({
  token: null,
  user: null,
  setUser: () => null,
  setToken: () => null
});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(()=> {
    checkUserStatus();
  }, []);
  let userToken = localStorage.getItem('token');
  useEffect(()=> {

    if(userToken){
      setToken(userToken);
    }
    let authUser = localStorage.getItem('authUser');
    if(authUser){
      const userData = JSON.parse(authUser);
      setUser(userData);
    }
  }, [])
  const checkUserStatus = async () => {
    try {
      const response = await fetch(`https://askthechip-endpoint-production.up.railway.app/api/users/${userData?._id}`);
      if (response.ok) {
        const resData = await response.json();
        const userData = resData?.data?.user
        localStorage.setItem('authUser', JSON.stringify(userData));
        let authUser = localStorage.getItem('authUser');
        const updatedData = JSON.parse(authUser);
        setUser(updatedData);
        // console.log(user);
        // userData.user = resData.data;
        // const updatedData = JSON.stringify(userData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    token, user, setUser, setToken
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;