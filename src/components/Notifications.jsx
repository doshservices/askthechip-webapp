import like from "./../assets/icons/like-icon.svg";
import axios from "axios";
import share from "./../assets/icons/share-icon.svg";
import Header from "./home/header";
import SideNav from "./SideNav";
import comment from "./../assets/icons/comment-icon.svg";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useWindowWidth } from "../utils/windowWidth";
import { useState, useEffect } from "react";
import { demoImg } from "./Chat/messages";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../store/slice/notificationSlice";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext/ProfileContext";
import { api } from "../contexts";

const reactions = [
  {
    icon: like,
    value: 61,
  },
  {
    icon: comment,
    value: 61,
  },
  {
    icon: share,
    value: 61,
  },
];

const Notifications = () => {

  const { profile } = useProfile();
  const [notification, setNotification] = useState([])
  const { token } = useAuth();
  const dispatch = useDispatch()
  const notificationId = useSelector((state) => state?.notification?.id)
  const [fullNotification, setFullNotification] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  // console.log(fullNotification);
  const navigate = useNavigate()
  const width = useWindowWidth();

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  }

  const getAllNotifications = async () => {
    try {
      const response = await axios.get(
        `${api}/api/users/notification`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setNotification(response?.data?.data?.notification);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotifications()
  }, [])

  const getAllNotificationById = async () => {
    try {
      const response = await axios.get(
        `${api}/api/users/notification/${notificationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setFullNotification(response?.data?.data?.notification)
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getAllNotificationById()
  }, [notificationId])

  const navigateToProfile = () => {
    localStorage.setItem("ask-un-id", JSON.stringify(fullNotification?.userId?._id))
    setTimeout(() => {
      if (fullNotification?.userId?._id === profile?._id) {
        navigate("/profile")
      } else {
        navigate("/users-profile")
      }
    }, 1000)
  }

  const [postDetails, setPostDetails] = useState([])

  const getPostById = async () => {
    try {
      const response = await axios.get(
        `${api}/api/post/${fullNotification?.postId?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setPostDetails(response?.data?.data?.post)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="pageLayout notifications">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        {width < 480 ?
          <Header /> : <></>
        }
        {notification.length > 0 ?
          <div className="notifications__wrapper xsm:mt-4">
            <div className="notifications__preview">
              {notification.map((notifications) => {
                return (
                  <section onClick={() => {
                    setShowNotification(!showNotification);
                    dispatch(setId(notifications?._id));
                    getPostById()
                  }} style={{ backgroundColor: notifications?.isRead === false ? "hsla(0, 0%, 95%, 1)" : "transparent" }} key={notifications?._id} className="notification">
                    <img src={notifications?.image ? notifications?.image : demoImg} alt="User" className="rounded-full" />
                    <div className="">
                      <h3>{notifications?.message}</h3>
                      <p role="time" className="text-[#A5ACB8] text-xs font-medium">{formatDate(notifications?.createdAt)}</p>
                    </div>
                  </section>
                )
              })}
            </div>
            <section className={showNotification ? "notifications__details show" : "notifications__details"}>
              {width <= 600 &&
                <svg onClick={() => setShowNotification(!showNotification)} width="25" height="25" fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
                  <path d="M5.625 12h13.688"></path>
                </svg>
              }
              <div>
                <img onClick={navigateToProfile} src={fullNotification?.image ? fullNotification?.image : demoImg} alt="User" className="rounded-full" />
                <div>
                  <h3>{fullNotification?.message}</h3>
                  {fullNotification?.postId?.content && <p>“{fullNotification?.postId?.content}”</p>}
                  <div className="post">

                  </div>
                  {/* {fullNotification?.image && <img src={fullNotification?.image} alt="post-img" />} */}
                </div>
              </div>
            </section>
          </div>
          : null
        }
      </div>
    </section >
  );
};

export default Notifications;
