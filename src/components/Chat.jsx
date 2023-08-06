import send from "../assets/icons/send-icon.svg";
import emoji from "../assets/icons/emoji.svg";
import camera from "../assets/icons/camera.svg";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useSelectedChat } from "../contexts/ChatContext/ChatContext";
import { useSocket } from "../contexts/SocketContext/SocketContext";

const Chat = () => {
  const { selectedChat, setSelectedChat } = useSelectedChat()
  const {socket}=useSocket()
  console.log('socket here:', socket)


  // if selectedChat is null, show empty space.if not,show chat space 

  return (
    !selectedChat ? (

      <div className="h-[calc(100vh_-_4.5rem)] sm:h-screen overflow-y-hidden font-DMSans">
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
      </div>
    ) : (
      <div>
        <h1>Loading</h1>
      </div>
    )
  );
};

export default Chat;
