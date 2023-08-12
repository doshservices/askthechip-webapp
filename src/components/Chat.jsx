import send from "../assets/icons/send-icon.svg";
import emoji from "../assets/icons/emoji.svg";
import camera from "../assets/icons/camera.svg";
import { useSelectedChat } from "../contexts/ChatContext/ChatContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";
import { useParams } from 'react-router-dom';
import { CircleLoader, Loader } from '../components'
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { getUsername } from "../utils/getUsername";

const Chat = ({ activeReceiverId }) => {
  const { id } = useParams();
  const { selectedChat, setSelectedChat } = useSelectedChat()
  const { socket } = useSocket()
  const { user, token } = useAuth();
  // const [, setConversation] = useState({});
  const [conversation, setConversation] = useState([]);
  const [loadingUsername, setLoadingUsername] = useState(true)
  const [loadingConversations, setLoadingConversations] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState({});

  // const conversation = {
  //   "message": "success",
  //   "data": {
  //     "conversation": []
  //   }
  // }

  const handleTyping = (e) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    setSendingMessage(true);
    console.log(user._id, receiverId, message)
    socket.emit('sendMessage', {
      senderId: user._id,
      recieverId: receiverId,
      text: message
    });
    setSendingMessage(false);
    setMessage("")
  }
  const handleReceiveMessage = () => {
    console.log(user._id, receiverId, message)
    socket.on('getMessage', function ({ senderId, text }) {
      console.log(senderId, text);
    });
  }
  const receiverId = activeReceiverId || id;
  // if selectedChat is null, show empty space.if not,show chat space 
  const getConversation = async (receiverId) => {
    try {
      const res = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation?${receiverId}`,
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
        console.log('conversation', conversation);
      }

    } catch (error) {
      console.log(error);
    }
    setLoadingConversations(false);
  };
  const getUserById = async () => {
    try {
      const res = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/users/${receiverId}`,
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
        setSelectedUser(resData.data);
        setLoadingUsername(false);
      }
    } catch (error) {
      console.log("Failed to get user data using their ID")
      console.log(error);
    }
  }
  useEffect(() => {
    getConversation(receiverId)
    getUserById()
  }, [receiverId]);

  return (
    <>
      {
        !loadingConversations ? (
          <div className="h-[calc(100vh_-_4.5rem)] sm:h-screen overflow-y-hidden font-DMSans">
            <div className="h-16 w-full shadow pl-4">
              <div className="my-auto font-medium text-xl sm:text-2xl mt-0 pt-1">
                {loadingUsername ? "Loading..." : getUsername(selectedUser) == getUsername({ user: user }) ? `${getUsername(selectedUser)} (You)` : getUsername(selectedUser)}
              </div>
              {/* <div className="text-[#303030] text-xs sm:text-sm font-light">
                Last seen, 2:02pm
              </div> */}
            </div>
            <div className="h-[calc(100vh_-_14.5rem)] sm:h-[calc(100vh_-_10rem)] overflow-y-auto pt-2 px-2">
              {/* Chat starts */}
              <>{conversation
                ? (conversation?.data ? conversation?.data?.conversation.map(conv => <>{conv}</>)
                  : <div className="flex flex-col w-full justify-center items-center h-full">
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
                    <div className="mx-4 text-center justify-center opacity-50 mt-4">
                      Chat on Askthechip <br /> You can start by sending a message to this user
                    </div>
                  </div>)
                : <div className="flex flex-col w-full justify-center items-center h-full">
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
                  <div className="mx-4 text-center justify-center opacity-50 mt-4">
                    Aww snap! <br /> Something went wrong, pls try again.
                  </div>
                </div>}
              </>
              {/* Chat ends */}
            </div>
            <form onSubmit={handleSendMessage} className="h-16 bg-white pb-3 ml-4 pr-10 pt-2 grid grid-cols-12">
              <div className="col-span-11 grid grid-cols-12 gap-2 bg-[#eff6fcde] px-4 rounded-3xl mr-3">
                <img src={emoji} className="col-span-1 mt-4" alt="Emoji" />
                <textarea
                  className="col-span-10 resize-none w-full min-h-fit text-sm bg-transparent outline-none my-4"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={handleTyping}
                />

                <img src={camera} className="col-span-1 mt-4 mr-4" alt="Camera" />
              </div>
              <button type="submit" className="col-span-1 my-auto ml-auto bg-primary80 rounded-full p-2 cursor-pointer">
                {sendingMessage ? <Loader /> :
                  <img src={send} alt="Send Message" />
                }
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <div className="mt-4">
              <CircleLoader color="#05675A" />
            </div>
            <div className="text-center justify-center opacity-50 mt-4">
              Loading your conversations...
            </div>
          </div>
        )
      }</>

  );
};

export default Chat;




{/* <div className="h-[calc(100vh_-_4.5rem)] sm:h-screen overflow-y-hidden font-DMSans">
            <div className="h-16 w-full shadow pl-4">
              <div className="font-medium text-xl sm:text-2xl mt-0 pt-1">Shai Hulud</div>
              <div className="text-[#303030] text-xs sm:text-sm font-light">
                Last seen, 2:02pm
              </div>
            </div>
            <div className="h-[calc(100vh_-_14.5rem)] sm:h-[calc(100vh_-_10rem)] overflow-y-auto pt-2 px-2">
              <div className="px-1 md:pr-4 xm:pr-2">
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  Hey there
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  Hii
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  How are you?
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  I'm fine what about you?
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  I'm fine too
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  Long time no see
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  Hey there
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  How are you?
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  Hii
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  I'm fine what about you?
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  I'm fine too
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  Long time no see
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  Hey there
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  How are you?
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  Hii
                </div>
                <div className="text-[#303030] text-sm bg-[#e7e7e7] w-fit px-3 py-1 rounded-full mb-[0.625rem] mr-auto">
                  I'm fine what about you?
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  I'm fine too
                </div>
                <div className="text-white text-sm bg-tertiary w-fit px-3 py-1 rounded-full mb-[0.625rem] ml-auto">
                  Long time no see
                </div>
              </div>
            </div>
            <div className="h-16 bg-white pb-3 ml-4 pr-10 pt-2 grid grid-cols-12">
              <div className="col-span-11 grid grid-cols-12 gap-2 bg-[#eff6fcde] px-4 rounded-3xl mr-3">
                <img src={emoji} className="col-span-1 mt-4" alt="Emoji" />
                <textarea
                  className="col-span-10 resize-none w-full min-h-fit text-sm bg-transparent outline-none my-4"
                  placeholder="Type your message here..."
                />

                <img src={camera} className="col-span-1 mt-4 mr-4" alt="Camera" />
              </div>
              <div className="col-span-1 my-auto ml-auto bg-primary80 rounded-full p-2 cursor-pointer">
                <img src={send} alt="Send Message" />
              </div>
            </div>
          </div> */}
