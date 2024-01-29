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
import { setId, clearId } from "../store/slice/notificationSlice";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext/ProfileContext";
import { api } from "../contexts";
import moment from "moment";
import { CircleLoader } from "./index";

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
  const [loading, setLoading] = useState(false)
  // console.log(fullNotification);
  const navigate = useNavigate()
  const width = useWindowWidth();

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  }

  const getAllNotifications = async () => {
    // setLoading(true)
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
      setLoading(false)
      setNotification(response?.data?.data?.notification);
    } catch (error) {
      setLoading(false)
      // console.log(error);
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
    }
  }

  return (
    <section className="pageLayout notifications xsm:gap-[2rem] xsm:pr-[2rem] xs:pr-[4rem]">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        {width < 480 ?
          <Header /> : <></>
        }
        {loading ?
          <div className="flex justify-center items-center">
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <CircleLoader color="#05675A" />
            </div>
          </div>
          :
          <>
            {notification.length > 0 ?
              <div className="notifications__wrapper">
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
                          <p role="time" className="text-[#A5ACB8] text-xs font-medium">{moment(notifications?.createdAt).calendar(null, {
                            sameDay: '[Today,] h:mmA',
                            nextDay: '[Tomorrow,] h:mmA',
                            nextWeek: 'dddd [at] h:mmA',
                            lastDay: '[Yesterday at] h:mmA',
                            lastWeek: 'dddd [at] h:mmA',
                            sameElse: 'MMMM Do YYYY [at] h:mmA',
                          })}</p>
                        </div>
                      </section>
                    )
                  })}
                </div>
                <section className={showNotification ? "notifications__details show" : "notifications__details"}>
                  {notificationId ?
                    <>
                      {width <= 600 &&
                        <svg onClick={() => {
                          setShowNotification(!showNotification)
                          dispatch(clearId())
                        }} className="mt-4 ml-4" width="25" height="25" fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
                          <path d="M5.625 12h13.688"></path>
                        </svg>
                      }
                      <div className="px-4 xs:px-8 pt-4 mb-4">
                        <img onClick={navigateToProfile} src={fullNotification?.image ? fullNotification?.image : demoImg} alt="User" className="rounded-full" />
                        <div>
                          <h3>{fullNotification?.message}</h3>
                          {fullNotification?.docId?.content && <p>“{fullNotification?.docId?.content}”</p>}
                          <div className="post">
                          </div>
                        </div>
                      </div>
                    </>
                    :
                    <p className="bg-[#F8F8F8] text-center py-10 px-4 fallback flex items-center justify-center">Please select a Notification to view</p>
                  }
                </section>
              </div>
              : <section className="bg-[#F8F8F8] mt-4 mx-4 xsm:mx-0 text-center py-10 px-4 max-w-[500px] xs:mx-auto" style={{ fontFamily: "DM Sans", color: "hsla(0, 0%, 18%, 0.8)" }}>
                <h2 className="font-[500] text-[1.05rem]">You don't have any Notification  Yet</h2>
                {/* <p onClick={share} className="flex items-center justify-center text-[#068978] text-[.8rem] font-[500] pt-6"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.37533 15.8346V10.6263H4.16699V9.3763H9.37533V4.16797H10.6253V9.3763H15.8337V10.6263H10.6253V15.8346H9.37533Z" fill="#068978" />
                  </svg> */}
                {/* </p> */}
              </section>
            }
          </>
        }
      </div>
    </section >
  );
};

export default Notifications;
