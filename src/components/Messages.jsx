import React, { useEffect, useState } from "react";
import { messagesData } from "../data";
import { Search } from "./home";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";
import { Link } from "react-router-dom";
import { CircleLoader, SideNav } from ".";
import { getUserInitial } from "../utils/getUsername";
import { useConversation } from "../contexts/ConversationContext/ConversationContext";
import { Message } from "./Chat/messages";
import mask from "./Chat/mask.png"
import allot from "./Chat/allot.png"
import people from "./Chat/people.png"
import modupe from "./Chat/modupe.png"
import { ChatBox } from "./Chat/chat";

const Messages = () => {

  const [onlineUsers, setOnlineUsers] = useState([])
  const [usersDetails, setUsersDetails] = useState([]);
  const [activeReceiverId, setActiveReceiverId] = useState(null);
  const [loadingOnlineUsers, setLoadingOnlineUsers] = useState(false);
  const [receiverId, setReceiverId] = useState(null);
  const { conversation, setConversation, loadingConversations, setLoadingConversations } = useConversation();
  const { user, token } = useAuth()

  // https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation

  const { socket } = useSocket()
  // console.log("scket here", socket)
  useEffect(() => {
    if (socket) {
      socket.emit("addUser", user._id);
      socket.emit("addUser", "64a2fc4bf4a0282fe8e59a77");
      socket.emit("addUser", "64a33027f4a0282fe8e59aa4");
    }
  }, [socket, user._id]);

  useEffect(() => {
    if (socket) {
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users)
      })
    }
  }, []);

  useEffect(() => {
    getUserDetails(onlineUsers)
  }, [onlineUsers])

  const getUserById = async (id) => {
    // setLoadingOnlineUsers(true)
    if (id) {
      try {
        const res = await fetch(
          `https://askthechip-hvp93.ondigitalocean.app/api/users/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const resData = await res.json();
          setLoadingOnlineUsers(false)
          // console.log(resData.data)
          return resData.data;
        }
      } catch (error) {
        // console.log("Failed to get user data using their ID")
        // console.log(error);
      }
      setLoadingOnlineUsers(false)
    }
  }

  async function getUserDetails(onlineUsers) {
    const userDetailsArray = [];
    const userIds = onlineUsers?.map(user => user.userId);
    for (const userId of userIds) {
      if (userId !== user._id) {
        try {
          const userDetails = await getUserById(userId); // Assuming getUserById is an async function
          userDetailsArray.push(userDetails);
        } catch (error) {
          console.error(`Error fetching details for userId ${userId}:`, error);
          // You can handle errors here, like skipping the user or pushing a default value
        }
      }
    }
    setUsersDetails(userDetailsArray);
    // console.log(usersDetails)
    return userDetailsArray;
  }

  const getConversation = async () => {
    setLoadingConversations(true)
    if (user?._id) {
      try {
        const res = await fetch(
          `https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation?userId=${user._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          const resData = await res.json();
          // console.log("conversation here", resData.data);
          setConversation(resData.data)
          // console.log("Successfully gotten convs")
        }

      } catch (error) {
        // console.log(error);
      }
    }
    setLoadingConversations(false);
  };

  useEffect(() => {
    getConversation();
  }, []);

  const createConversation = async (receiverId) => {
    const existingConversation = conversation?.conversation?.find(conversation => (
      conversation.members.includes(user._id) && conversation.members.includes(receiverId)
    ));
    if (!existingConversation) {
      try {
        const res = await fetch(
          "https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              "members": [
                `${receiverId}`,
                `${user._id}`
              ]
            }),
            // body: { "members": [`${receiverId}`, `${user._id}`] },
          }
        );
        if (res.ok) {
          // console.log("Successfully created a new conversation!");
          const resData = await res.json();
          // console.log(resData)
        }
      } catch (error) {
        // console.log(error);
      }
    }
  };
  useEffect(() => {
    if (receiverId) createConversation(receiverId)
  }, [receiverId])

  // console.log("OnlineUsers", onlineUsers)
  // console.log("conversation here", conversation)
  // console.log("usersDetails here", usersDetails)

  const handleActiveConversation = (id) => {
    setActiveReceiverId(id)
    setReceiverId(id)
  }
  const getUsername = (data) => {
    const username =
      data?.user?.role === "USER"
        ? `${data?.user?.firstName} ${data?.user?.lastName}`
        : `${data?.user?.companyName}`;
    return username;
  }

  return (
    <div className="pageLayout bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        <div className="chats">
          <div className="chats__senders">
            <div className="search-people">
              <Search background={`#fcfcfc`} placeholder={"Search People"} />
            </div>
            <Message senderImg={people} senderName="Ezra" message="Bro! Whatsup" time="8:30am" amount="1" />
            <Message senderImg={allot} senderName="Opemipo Hamzah" message="Good morning chief Prosper" time="7:40am" amount="2" />
            <Message senderImg={mask} senderName="Ebuka Moses" message="What's the Update!" time="7:33am" amount="2" />
            <Message senderImg={modupe} senderName="Modupe" message="Hey 👋 Prosper" time="7:30am" amount="1" />
            <Message senderImg={people} senderName="Mr Rahman" message="Bro" time="6:30am" amount="15" />
            <Message senderImg={allot} senderName="Abdrahman" message="morning chief" time="2:14am" amount="3" />
            <Message senderImg={mask} senderName="Favour Okoye" message="Hwfa" time="Yesterday" amount="1" />
            <Message senderImg={allot} senderName="Zach" message="Who are you?" time="Thursday" amount="5" />
          </div>
          <div className="chats__message">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
