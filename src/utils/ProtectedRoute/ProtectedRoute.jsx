import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { CircleLoader } from "../../components";

const ProtectedRoute = () => {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const userData = localStorage.getItem('authUser');
    if(userData){
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  if(isLoading){
    return (
      <div className="bg-gray-200 h-full md:h-[calc(100vh_-_60px)] overflow-y-auto">
        <div className="flex mt-8 h-[50vh] bg-white m-10 rounded-lg justify-center items-center">
          <CircleLoader color="#05675A" />
        </div>
      </div>
    )
  }

  return user ? <Outlet /> : <Navigate to="/login" />
}
export default ProtectedRoute;