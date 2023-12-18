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
import axios from "axios";

const Messages = () => {

  const [onlineUsers, setOnlineUsers] = useState([])
  const { user, token } = useAuth()
  const mobileChatClassName = useSelector((state) => state?.chat?.messageClass)
  const userId = useSelector((state) => state?.user?.user?._id);

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
      // console.log(response);
    } catch (error) {
      // console.error(error);
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
