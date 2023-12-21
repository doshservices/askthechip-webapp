import React, { useEffect, useState } from "react";
import { Search } from "./home";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { SideNav } from ".";
import { Message } from "./Chat/messages";
import { ChatBox } from "./Chat/chat";
import { chatData } from "./Chat/chatData";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Messages = () => {

  const { token } = useAuth()
  const mobileChatClassName = useSelector((state) => state?.chat?.messageClass)
  const userId = useSelector((state) => state?.user?.user?._id);
  const [conversation, setConversation] = useState([])

  const getAllConversation = async () => {
    try {
      const response = await axios.get(
        `https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setConversation(response?.data?.data?.conversation);
    } catch (error) {
    }
  }

  useEffect(() => {
    getAllConversation()
  }, [])

  return (
    <div className="pageLayout bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container message__container">
        <div className="chats">
          <div className="chats__senders">
            <div className="search-people">
              <Search background={`#fcfcfc`} placeholder={"Search People"} />
            </div>
            {conversation.map((conversation) => {
              return (
                <Fragment key={conversation?._id}>
                  <Message conversation={conversation} />
                </Fragment>
              )
            })}
          </div>
          <div className={`chats__message ${mobileChatClassName}`}>
            <ChatBox data={chatData} conversation={conversation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
