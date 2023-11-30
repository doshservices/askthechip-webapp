import React, { useEffect, useState } from "react";
import { Search } from "./home";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";
import { SideNav } from ".";
import { useConversation } from "../contexts/ConversationContext/ConversationContext";
import { Message } from "./Chat/messages";
import people from "./Chat/people.png"
import { ChatBox } from "./Chat/chat";
import { chatData } from "./Chat/chatData";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Messages = () => {

  const [onlineUsers, setOnlineUsers] = useState([])
  const [usersDetails, setUsersDetails] = useState([]);
  const [activeReceiverId, setActiveReceiverId] = useState(null);
  const [loadingOnlineUsers, setLoadingOnlineUsers] = useState(false);
  const [receiverId, setReceiverId] = useState(null);
  const { conversation, setConversation, loadingConversations, setLoadingConversations } = useConversation();
  const { user, token } = useAuth()
  const mobileChatClassName = useSelector((state) => state?.chat?.messageClass)

  const { socket } = useSocket()
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
          return resData.data;
        }
      } catch (error) {
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
          const userDetails = await getUserById(userId);
          userDetailsArray.push(userDetails);
        } catch (error) {
          console.error(`Error fetching details for userId ${userId}:`, error);
        }
      }
    }
    setUsersDetails(userDetailsArray);
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
          setConversation(resData.data)
        }

      } catch (error) {
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
          }
        );
        if (res.ok) {
          const resData = await res.json();
        }
      } catch (error) {
      }
    }
  };
  useEffect(() => {
    if (receiverId) createConversation(receiverId)
  }, [receiverId])

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
      <div className="pageLayout__wrapper__container message__container">
        <div className="chats">
          <div className="chats__senders">
            <div className="search-people">
              <Search background={`#fcfcfc`} placeholder={"Search People"} />
            </div>
            {chatData.map((data, index) => {
              return (
                <Fragment key={index}>
                  <Message info={data} senderImg={people} />
                </Fragment>
              )
            })}
          </div>
          <div className={`chats__message ${mobileChatClassName}`}>
            <ChatBox data={chatData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
