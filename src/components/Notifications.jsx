import like from "./../assets/icons/like-icon.svg";
import user from "./../assets/blog-img.svg";
import axios from "axios";
import share from "./../assets/icons/share-icon.svg";
import Header from "./home/header";
import SideNav from "./SideNav";
import comment from "./../assets/icons/comment-icon.svg";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useWindowWidth } from "../utils/windowWidth";
import { useState, useEffect } from "react";

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
  const { token } = useAuth();

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
      console.log(response);
      setNotification(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotifications()
  }, [])

  const width = useWindowWidth();

  return (
    <section className="pageLayout notifications bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        {width < 480 ?
          <Header /> : <></>
        }
        <div className="notifications__wrapper mt-4">
          <div className="notifications__preview">
            <section className="notification">
              <img src={user} alt="User" className="rounded-full" />
              <div className="">
                <h3>Lex Murphy liked your post</h3>
                <p role="time" className="text-[#A5ACB8] text-xs font-medium">Today at 9:42 AM</p>
              </div>
            </section>
          </div>
          <section className="notifications__details">
          </section>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
