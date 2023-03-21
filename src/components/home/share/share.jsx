import { Link } from "react-router-dom";
// import profileImage from '../assets/images/profile-picture.png';
import profileImg from "../../../assets/images/profile-picture.png";
import { AiOutlineFileGif, AiOutlineFileImage } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPoll } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";

const Share = () => {
  return (
    <section className="px-1">
      <div className="border border-[#00000021] mr-2 ml-1.5">
        <div className="ml-2 flex w-full justify-between">
          <div className="mx-2 mt-2 w-12 h-12">
            <img src={profileImg} alt={profileImg} className={`rounded-full`} />
          </div>
          <div className="flex ml-2 w-[55%]">
            <input
              type="text"
              placeholder="Share a post"
              autoComplete="off"
              className="bg-black border-0 outline-none placeholder:text-dark-gray w-full"
            />
          </div>
          <button className="flex items-center border border-[#00000021] px-4 m-4 mr-6 rounded-xl h-8">
            <span className="mr-2 text-[0.625rem]"> Select board</span>
            <svg
              width="10"
              height="5"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 6.75L0.75 0.5H13.25L7 6.75Z" fill="black" />
            </svg>
          </button>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex ml-2 sm:ml-16">
            <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
              <AiOutlineFileImage size={20} />
            </Link>
            <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
              <AiOutlineFileGif size={20} />
            </Link>
            <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
              <BiPoll size={20} />
            </Link>
            <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
              <BsEmojiSmile size={20} />
            </Link>
            <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
              <TbCalendarTime size={20} />
            </Link>
            <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
              <HiOutlineLocationMarker size={20} />
            </Link>
          </div>
          <div className="flex items-center mr-4">
            <Link
              to="#"
              className={`flex bg-primary text-white hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1`}
            >
              Share
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;