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
      <div className="flex">
        <div className="mr-6 mt-2 w-12 h-12">
          <img src={profileImg} alt={profileImg} className={`rounded-full`} />
        </div>
        <div className="flex flex-col justify-between w-full rounded-lg bg-[#f4f4f4]">
          <div className="ml-2 flex w-full justify-between">
            <div className="flex ml-2 w-[80%]">
              <textarea placeholder="Share a post" name="post" id="post" cols="100" rows="2"
                className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-4"
              />
            </div>
            <div className="w-fit">
            <select name="board" id="board" className="bg-[#f4f4f4] border rounded-md border-[#2d2d2d]/80 outline-none text-xs w-fit h-fit py-1 px-1 mt-4 mr-6">
              <option value="select" disabled selected>Select Board</option>
              <option value="white">White Board</option>
              <option value="black">Black Board</option>
            </select>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex ml-2">
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
                className={`flex bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1`}
              >
                Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;