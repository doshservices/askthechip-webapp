import React, { useEffect, useState } from "react";
import { messagesData } from "../data";
import { Search } from "./home";
import Chat from "./Chat";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";

//import { useEffect } from "react";

const Messages = () => {
  const [conversation, setConversation] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([])


  const { user, token } = useAuth()
  // https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation

  const { socket } = useSocket()

  useEffect(() => {
    console.log('bfore user here', user, socket)
    socket.emit("addUser", user._id)
    console.log(user._id, socket)
    getConversation()
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users)
    })
  }, [])



  const getConversation = async () => {
    try {
      const res = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation?${user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        console.log("Successful!");
        const resData = await res.json();
        setConversation(resData.data)
        console.log('conversation', conversation);
      }

    } catch (error) {
      console.log(error);

    }
  };

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
          body:{member:[user._id,receiverId]},
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

  return (
    <div className="grid grid-cols-12 pl-0 xm:pl-4">
      <div className="hidden xm:grid col-span-4 h-screen pt-4 overflow-y-auto pr-5 border-r border-[#ebeef0]">
        <div className="mt-1">
          <div className="mr-7">
            <Search background={`#fcfcfc`} placeholder={"Search People"} />
          </div>
          <div className="mt-7">
            <div className="font-DMSans pl-4">
              {onlineUsers?.map((onlineUser) => (
                <div
                  key={onlineUser.userId}
                  onClick={createConversation(onlineUser.userId)}
                  className="grid grid-cols-12 pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
                >
                  <div className="col-span-2 ml-auto mr-2">
                    <img
                      src={""}
                      alt="blog"
                      className="rounded-full w-12"
                    />
                  </div>
                  <div className="col-span-6 ml-3">
                    <div className="font-bold text-[#303030] text-sm mb-1.5">
                      {onlineUser._id}
                    </div>
                    <div className="text-[#303030] font-light text-xs">
                      {onlineUser._id}
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
              ))}
            </div>
            <div className="font-DMSans pl-4">
              {messagesData.map((message, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 pt-1 pb-3 my-2 border-b border-[#B4abab]/60 mr-4"
                >
                  <div className="col-span-2 ml-auto mr-2">
                    <img
                      src={message.image}
                      alt="blog"
                      className="rounded-full w-12"
                    />
                  </div>
                  <div className="col-span-6 ml-3">
                    <div className="font-bold text-[#303030] text-sm mb-1.5">
                      {message.sender}
                    </div>
                    <div className="text-[#303030] font-light text-xs">
                      {message.message}
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xm:col-span-8">
        <Chat />
      </div>
    </div>
  );
};

export default Messages;
