import React, { useEffect, useState } from "react";
import { messagesData } from "../data";
import { Search } from "./home";
import Chat from "./Chat";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";
import { Link } from "react-router-dom";
import { CircleLoader } from ".";

//import { useEffect } from "react";

const Messages = () => {
  
  // const [, setOnlineUsers] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const [activeReceiverId, setActiveReceiverId] = useState(null);
  const [loadingOnlineUsers, setLoadingOnlineUsers] = useState(true);

  const { user, token } = useAuth()
  // https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation

  const { socket } = useSocket()
  console.log("scket here",socket)
  // const onlineUsers = [
  //   {
  //     "user": {
  //       "plan_code": "",
  //       "_id": "64a53313f4a0282fe8e59af5",
  //       "gender": "MALE",
  //       "email": "abdrahmanoladimejitest@gmail.com",
  //       "phoneNumber": "08109672785",
  //       "password": "$2b$10$CifUKvRny4jb8bD3.5iRVuSnWgoXYH1mHlbVTshcf52Ih00/WFNQy",
  //       "interest": [],
  //       "companyName": "Dosh Services",
  //       "cacDocument": "cacDocument",
  //       "representativeId": "representativeId",
  //       "otp": "191402",
  //       "verified": false,
  //       "role": "SERVICE_PROVIDER",
  //       "googleSigned": false,
  //       "serviceType": "TRAINING",
  //       "status": "active",
  //       "followers": [],
  //       "subscription": "FREE",
  //       "__v": 0,
  //       "profileImg": "data:image/jpeg;base64,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"
  //     },
  //     "socketId": "2-SIo23lEAjvyai1AAAC"
  //   }
  // ]

  useEffect(() => {
    activeReceiverId && socket.emit("addUser", activeReceiverId)
  }, [activeReceiverId])

  useEffect(()=> {
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users)
      setLoadingOnlineUsers(false)
    })
  }, [onlineUsers])

  console.log(onlineUsers, activeReceiverId)
 
  

  const createConversation = async (receiverId) => {
    try {
      const res = await fetch(
        "https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: { member: [user._id, receiverId] },
        }
      );
      if (res.ok) {
        console.log("Successful!");
        const resData = await res.json();
        console.log(resData)
      }
    } catch (error) {
      console.log(error);

    }
  };
  const handleActiveConversation = (id) => {
    console.log('id', id)
    createConversation(id)
    setActiveReceiverId(id)
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
              </>: <>
            {!onlineUsers ?
              <>
                <div className="text-center">There's no user online at the moment</div>
              </> :
              <div className="font-DMSans pl-4">
                {onlineUsers?.map((onlineUser, index) => (
                  <React.Fragment key={index}>
                    <div
                      key={index}
                      onClick={() => handleActiveConversation(onlineUser?.user?._id)}
                      className="cursor-pointer hidden lg:grid grid-cols-12 pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
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
