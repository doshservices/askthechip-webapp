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

  const [notification, setNotification] = useState([])
  // console.log(notification);
  const { token } = useAuth();
  const dispatch = useDispatch()
  const notificationId = useSelector((state) => state?.notification?.id)

  const width = useWindowWidth();

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  }

  const getAllNotifications = async () => {
    try {
      const response = await axios.get(
        "https://askthechip-hvp93.ondigitalocean.app/api/users/notification",
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
        `https://askthechip-hvp93.ondigitalocean.app/api/users/notification/${notificationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotificationById()
  }, [notificationId])

  return (
    <section className="pageLayout notifications bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        {width < 480 ?
          <Header /> : <></>
        }
        {notification.length > 0 ?
          <div className="notifications__wrapper mt-4">
            <div className="notifications__preview">
              {notification.map((notifications) => {
                return (
                  <section onClick={() => dispatch(setId(notifications?._id))} style={{ backgroundColor: notifications?.isRead === false ? "hsla(0, 0%, 95%, 1)" : "transparent" }} key={notifications?._id} className="notification">
                    <img src={notifications?.image ? notifications?.image : demoImg} alt="User" className="rounded-full" />
                    <div className="">
                      <h3>{notifications?.message}</h3>
                      <p role="time" className="text-[#A5ACB8] text-xs font-medium">{formatDate(notifications?.createdAt)}</p>
                    </div>
                  </section>
                )
              })}
            </div>
            <section className="notifications__details">

            </section>
          </div>
          : null
        }
      </div>
    </section>
  );
};

export default Notifications;
