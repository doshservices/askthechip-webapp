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
  const { socket } = useSocket();

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
