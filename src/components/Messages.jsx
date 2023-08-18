import React, { useEffect, useState } from "react";
import { messagesData } from "../data";
import { Search } from "./home";
import Chat from "./Chat";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";
import { Link } from "react-router-dom";
import { CircleLoader } from ".";
import { getUserInitial } from "../utils/getUsername";
import { useConversation } from "../contexts/ConversationContext/ConversationContext";

//import { useEffect } from "react";

const Messages = () => {
  // const [, setOnlineUsers] = useState([])

  const [onlineUsers, setOnlineUsers] = useState([])
  const [usersDetails, setUsersDetails] = useState([]);
  const [activeReceiverId, setActiveReceiverId] = useState(null);
  const [loadingOnlineUsers, setLoadingOnlineUsers] = useState(false);
  const [receiverId, setReceiverId] = useState(null);
  // const { setConversation, loadingConversations, setLoadingConversations} =  useConversation();
  const { conversation, setConversation, loadingConversations, setLoadingConversations } = useConversation();
  const { user, token } = useAuth()

  // https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation

  const { socket } = useSocket()
  // console.log("scket here",socket)


  useEffect(() => {
    socket.emit("addUser", user._id)
    // socket.emit("addUser", "64a2fc4bf4a0282fe8e59a77")
    // socket.emit("addUser", "64a33027f4a0282fe8e59aa4")
  }, [])

  useEffect(() => {
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users)
    })
  }, []);
  useEffect(()=> {
    getUserDetails(onlineUsers)
  }, [onlineUsers])
  
  const getUserById = async (id) => {
    setLoadingOnlineUsers(true)
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
          console.log(resData.data)
          setLoadingOnlineUsers(false)
          return resData.data;
        }
      } catch (error) {
        console.log("Failed to get user data using their ID")
        console.log(error);
      }
      setLoadingOnlineUsers(false)
    }
  }

  async function getUserDetails(onlineUsers) {
    const userDetailsArray = [];
  const userIds = onlineUsers?.map(user => user.userId);
    for (const userId of userIds) {
      if(userId !== user._id){
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
          console.log("Successfully gotten convs")
        }

      } catch (error) {
        console.log(error);
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
          console.log("Successfully created a new conversation!");
          const resData = await res.json();
          console.log(resData)
        }
      } catch (error) {
        console.log(error);
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
    <div className="grid grid-cols-12 pl-0 xm:pl-4">
      <div className="grid col-span-12 lg:col-span-4 h-screen pt-4 overflow-y-auto pr-5 border-r border-[#ebeef0]">
        <div className="mt-1">
          <div className="mr-7">
            <Search background={`#fcfcfc`} placeholder={"Search People"} />
          </div>
          <div className="mt-7">
            {loadingOnlineUsers ? <>
              <div className="py-2">
                <CircleLoader color="#05675A" />
              </div>
              <div className="text-center">Loading users that are online...</div>
            </> : <>
              {usersDetails.length === 0 ?
                <>
                  <div className="text-center">There's no user online at the moment</div>
                </> :
                <div className="font-DMSans pl-4">
                  {usersDetails?.map((onlineUser, index) => (
                    <React.Fragment key={index}>
                      <div
                        key={index}
                        onClick={() => handleActiveConversation(onlineUser?.user?._id)}
                        className="cursor-pointer hidden lg:grid grid-cols-12 pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
                      >
                        <div className="col-span-2 ml-auto mr-2">
                          {onlineUser?.user?.profileImg ?
                            <img
                              src={onlineUser?.user?.profileImg}
                              alt={getUsername(onlineUser)}
                              className="rounded-full w-12 h-auto aspect-square"
                            />
                            : <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary100 font-bold text-xl">
                              <span className="text-white">{getUserInitial(onlineUser)}</span>
                            </div>
                          }
                        </div>
                        <div className="col-span-6 ml-3">
                          <div className="font-bold text-[#303030] text-sm mb-1.5">
                            {getUsername(onlineUser)}
                          </div>
                          <div className="text-[#303030] font-light text-xs">
                            {/* See your conversations with {getUsername(onlineUser)}  */}
                            See your conversations
                          </div>
                        </div>
                        {/* <div className="col-span-4 ml-auto mr-3">
                          <div className="text-[#7C7C7C] font-light text-sm mb-1">
                            1hr
                          </div>
                          <div className="ml-auto w-fit text-xs">
                            <span className="bg-primary80 text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex">
                              4
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <Link key={onlineUser?.user?._id} to={`/messages/${onlineUser?.user?._id}`}>
                        <div
                          className="grid grid-cols-12 lg:hidden pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
                        >
                          <div className="col-span-2 ml-auto mr-2">
                            <img
                              src={onlineUser?.user?.profileImg}
                              alt="blog"
                              className="rounded-full w-12 h-auto aspect-square"
                            />
                          </div>
                          <div className="col-span-6 ml-3">
                            <div className="font-bold text-[#303030] text-sm mb-1.5">
                              {getUsername(onlineUser)}
                            </div>
                            <div className="text-[#303030] font-light text-xs">
                              {/* See your conversations with {getUsername(onlineUser)}  */}
                              See your conversations
                            </div>
                          </div>
                          <div className="col-span-4 ml-auto mr-3">
                            <div className="text-[#7C7C7C] font-light text-sm mb-1">
                              1hr
                            </div>
                            <div className="ml-auto w-fit text-xs">
                              <span className="bg-primary80 text-white rounded-full aspect-square min-w-[1.2rem] justify-center items-center flex">
                                4
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  ))}
                </div>}</>
            }
          </div>
        </div>
      </div>
      <div className="hidden lg:flex col-span-8">
        {
          activeReceiverId ?
            <Chat activeReceiverId={activeReceiverId} />
            : <div className="flex flex-col w-full justify-center items-center">
              <div>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.025H11.825V10.525H4V12.025ZM4 8.775H16V7.275H4V8.775ZM4 5.525H16V4.025H4V5.525ZM0 20V1.5C0 1.11667 0.15 0.770833 0.45 0.4625C0.75 0.154167 1.1 0 1.5 0H18.5C18.8833 0 19.2292 0.154167 19.5375 0.4625C19.8458 0.770833 20 1.11667 20 1.5V14.5C20 14.8833 19.8458 15.2292 19.5375 15.5375C19.2292 15.8458 18.8833 16 18.5 16H4L0 20ZM1.5 16.375L3.375 14.5H18.5V1.5H1.5V16.375Z"
                    fill={"#2d2d2d"}
                    fillOpacity={"0.5"}
                  />
                </svg>
              </div>
              <div className="text-center justify-center opacity-50 mt-4">
                Chat on Askthechip <br /> You can start by clicking on a chat head <br /> (if any user is online)
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default Messages;
