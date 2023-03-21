import mic from "../assets/icons/mic.svg";
import emoji from "../assets/icons/emoji.svg";
import camera from "../assets/icons/camera.svg";

const Chat = () => {
  return (
    <div className="h-[calc(100vh_-_4.5rem)] sm:h-screen overflow-y-hidden pt-1 pl-2 xm:pl-4 font-Inter">
        <div className="h-16 bg-white w-full">
          <div className="font-semibold text-2xl sm:text-3xl mt-2">Anil</div>
          <div className="text-[#303030] text-sm sm:text-base font-light">Last seen, 2:02pm</div>
        </div>
        <div className="h-[calc(100vh_-_14.5rem)] sm:h-[calc(100vh_-_10rem)] overflow-y-auto">
          <div className="px-1 md:pr-4 xm:pr-2">
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
        <div className="h-16 bg-white pb-3 pr-10 pt-2 grid grid-cols-12">
          <div className="col-span-11 grid grid-cols-12 gap-2 bg-[#eff6fcde] px-4 rounded-3xl mr-3">
            <textarea
              className="col-span-8 resize-none w-full min-h-fit text-sm bg-transparent outline-none ml-2 my-4"
              placeholder="Type your message here..."
            />
            <img
              src={emoji}
              className="col-span-2 my-auto ml-6"
              alt="Emoji"
            />
            <img
              src={camera}
              className="col-span-2 my-auto ml-4"
              alt="Camera"
            />
          </div>
          <div className="col-span-1 my-auto ml-auto">
            <img src={mic} alt="Microphone" />
          </div>
        </div>
    </div>
  )
}

export default Chat;
