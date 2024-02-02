import React, { useEffect, useState } from "react";
import { Search } from "./home";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { SideNav } from ".";
import { Message } from "./Chat/messages";
import { ChatBox } from "./Chat/chat";
import { chatData } from "./Chat/chatData";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useOnlineUsers } from "../contexts/SocketContext/SocketContext";
import { api } from "../contexts";
import { GreenLoader } from "./Loader/Loader";
import { setMessageClass } from "../store/slice/chatViewSlice";

const Messages = () => {

  const { token } = useAuth()
  const mobileChatClassName = useSelector((state) => state?.chat?.messageClass)
  const userId = useSelector((state) => state?.user?.user?._id);
  const [conversation, setConversation] = useState([])
  const onlineUsers = useOnlineUsers()
  const [loading, setLoading] = useState(false)
  const conversationId = useSelector((state) => state?.chat?.conversationId);
  const dispatch = useDispatch()
  const [previewMessage, setPreviewMessage] = useState([])

  useEffect(() => {
    if (conversationId === null) {
      dispatch(setMessageClass("hide"))
    }
  }, [conversationId])

  const getAllOnlineUsers = onlineUsers?.onlineUsers?.map((users) => users?.user)

  const getAllConversation = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${api}/api/chat/conversation?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setLoading(false)
      setConversation(response?.data?.data?.conversation);
    } catch (error) {
      setLoading(false)
      // console.log(error);
    }
  }

  useEffect(() => {
    getAllConversation()
  }, [])

  // const getMessages = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `${api}/api/chat/conversation/messages?conversationId=${id}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setPreviewMessage((response?.data?.data?.message ?? '')[response?.data?.data?.message?.length - 1]);
  //   } catch (error) {
  //   }
  // }

  // useEffect(() => {
  //   getMessages()
  // }, [])

  return (
    <div className="pageLayout">
      <SideNav />
      <div className="pageLayout__wrapper__container message__container">
        <div className="chats">
          <div className="chats__senders">
            <div className="search-people">
              <Search background={`#fcfcfc`} placeholder={"Search People"} />
            </div>
            {loading ?
              <GreenLoader />
              :
              <>
                {conversation.length > 0 ? (
                  <>
                    {conversation.map((conversation) => {
                      return (
                        <div key={conversation?._id}>
                          <Message conversation={conversation} online={getAllOnlineUsers} />
                        </div>
                      )
                    })}
                  </>
                ) :
                  <section className="bg-[#F8F8F8] mt-[30%] text-center py-6 px-4 max-w-[300px] mx-auto" style={{ fontFamily: "DM Sans", color: "hsla(0, 0%, 18%, 0.8)" }}>
                    <h2 className="font-[500] text-[1.05rem]">Nothing to see here</h2>
                    <p className="flex items-center justify-center text-[#068978] text-[.8rem] font-[500] pt-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.37533 15.8346V10.6263H4.16699V9.3763H9.37533V4.16797H10.6253V9.3763H15.8337V10.6263H10.6253V15.8346H9.37533Z" fill="#068978" />
                      </svg>
                      <span>Start a Chat</span>
                    </p>
                  </section>
                }
              </>
            }
          </div>
          <div className={`chats__message ${mobileChatClassName}`}>
            <ChatBox data={chatData} conversation={conversation} online={getAllOnlineUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
