import { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/images/profile-picture.png";
import { BsEmojiSmile } from "react-icons/bs";
import gifIcon from '../../../assets/icons/gif-icon.svg';
import imageIcon from '../../../assets/icons/image-icon.svg';

const Share = () => {
  const [postStatus, setPostStatus] = useState(null)
  const handleTypePost = (e) => {
    setPostStatus(e.target.value);
  }
  return (
    <section className="px-1">
      <div className="grid grid-cols-12 sm:flex bg-[#f4f4f4] py-2.5 px-5 rounded-lg">
        <div className="col-span-2 justify-center items-center flex mr-1 sm:mr-2 mb-auto w-full sm:w-14 h-full">
          <img src={profileImg} alt={profileImg} className={`rounded-full h-fit`} />
        </div>
        <div className="col-span-10 ml-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-lg bg-grey  border border-black/10">
          <div className="flex w-full justify-between">
            <div className="flex ml-2 w-[80%]">
              <textarea
                placeholder="Share a post"
                onChange={handleTypePost}
                name="post"
                id="post"
                cols="100"
                rows="1"
                className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-4"
              />
            </div>
            <div className="flex mr-2">
              <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
                <img src={imageIcon} alt="Image" />
              </Link>
              <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
                <img src={gifIcon} alt="Gif" />
              </Link>
              <Link className="flex text-dark2D/70 p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
                <BsEmojiSmile size={18} />
              </Link>
            </div>
          </div>
          {postStatus && 
          <div className="flex justify-between w-full">
            <div></div>
            <div className="flex items-center mr-4 mb-2">
              <Link
                to="#"
                className={`flex bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1`}
              >
                Post
              </Link>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Share;
