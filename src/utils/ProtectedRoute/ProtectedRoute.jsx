import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { CircleLoader } from "../../components";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearJwt } from "../../store/slice/authSlice";
import { clearChatUserId } from "../../store/slice/chatViewSlice";
import { clearUser } from "../../store/slice/userSlice";
import { clearId } from "../../store/slice/notificationSlice";

const ProtectedRoute = () => {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state?.jwtSlice?.jwt)
  const decoded = jwtDecode(token)
  const dispatch = useDispatch()

  useEffect(() => {
    const userData = localStorage.getItem('authUser');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const currentTimestamp = Math.floor(Date.now() / 1000);

  const clearAuthUser = () => {
    localStorage.removeItem("authUser")
    localStorage.removeItem("token")
    localStorage.removeItem("ask-un-id")
    localStorage.removeItem("ask-u-mail")
    setUser(null);
    dispatch(clearJwt())
    dispatch(clearChatUserId())
    dispatch(clearUser())
    dispatch(clearId())
  }

  if (decoded?.exp && decoded?.exp < currentTimestamp) {
    clearAuthUser()
  }

  if (isLoading) {
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