import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/images/profile-picture.png";
import { BsEmojiSmile } from "react-icons/bs";
// import gifIcon from "../../../assets/icons/gif-icon.svg";
import imageIcon from "../../../assets/icons/image-icon.svg";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { notify, warn } from "../../../App";
import { fileToBase64 } from "../../FileUploadInput";
import Loader from "../../Loader/Loader";
import { usePosts } from "../../../contexts/PostContext/PostContext";

const Share = ({handleGetPosts}) => {
  const fileInputRef = useRef(null);
  const [postStatus, setPostStatus] = useState("");
  const [board, setBoard] = useState("WHITE_BOARD");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { user } = useAuth();

  // console.log(file);
  const handleTypePost = (e) => {
    setPostStatus(e.target.value);
  };
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleFileSelect = async (e) => {
    const selectedFile = e.target.files[0];
    // setFile(selectedFile);
    try {
      const base64String = await fileToBase64(selectedFile);
      setFile(base64String);
      notify("File uploaded successfully");
    } catch (error) {
      console.error('Error converting file to base64:', error);
      warn('An error has occured, pls try again!');
    }
  };
  const handleChangeBoard = (e) => {
    setBoard(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const res = await fetch(
        "https://askthechip-endpoint-production.up.railway.app/api/create-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify({
            content: postStatus,
            board,
            postImg: file,
          }),
        }
      );
      if (res.ok) {
        console.log("Successfully published a post!");
        notify("Successfully published a post!");
        const resData = await res.json();
        console.log(resData);
        handleGetPosts();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      warn("Failed to publish your post!");
      setLoading(false);
    }

    setPostStatus("");
    setFile(null)
    setLoading(false);
  };
  return (
    <section className="px-1">
      <div className="grid grid-cols-12 sm:flex bg-[#f4f4f4] py-2.5 px-5 rounded-lg">
        <div className="col-span-2 justify-center items-center flex mr-1 sm:mr-2 mb-auto w-full sm:w-14 h-full">
          <img
            src={profileImg}
            alt={profileImg}
            className={`rounded-full h-fit`}
          />
        </div>
        <form onSubmit={handleSubmit} className="col-span-10 ml-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-lg bg-grey  border border-black/10">
          <div className="flex w-full justify-between">
            <div className="flex ml-2 w-[80%]">
              <textarea
                placeholder="Share a post"
                onChange={handleTypePost}
                value={postStatus}
                name="post"
                id="post"
                cols="100"
                rows="1"
                className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-4"
              />
            </div>
            {/* <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
                <img src={imageIcon} alt="Image" />
              </Link>
              <Link className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
                <img src={gifIcon} alt="Gif" />
              </Link>
              <Link className="flex text-dark2D/70 p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center">
                <BsEmojiSmile size={18} />
              </Link> */}
            <div className="flex items-center mr-2">
              <div>
                <div
                  onClick={handleUploadClick}
                  className="flex text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={imageIcon} alt="Image" />
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </div>
              <div className="ml-2 mr-1 hidden sm:flex">
                <select
                  className="my-auto py-0.5 border border-primary100/50 outline-none rounded-lg"
                  value={board}
                  onChange={handleChangeBoard}
                >
                  <option value="WHITE_BOARD">White Board</option>
                  <option value="BLACK_BOARD">Black Board</option>
                </select>
              </div>
              <div className="flex items-center ml-2">
                <button
                  type="submit"
                  disabled={!postStatus || loading}
                  className={`flex bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1.5`}
                >
                  {loading? <Loader width="30" height="20" /> : "Post"}
                </button>
              </div>
            </div>
          </div>
            {file && (
              <div className="flex items-center mx-2 mb-2 text-primary">
                File Uploaded Successfully!
              </div>
          )}
          
            <div className="flex flex-col justify-end items-end sm:hidden sm:justify-between w-full">
              {postStatus && (
              <div>
              <div className="ml-2 mr-1">
                <select
                  className="my-auto py-0.5 border border-primary100/50 outline-none rounded-lg"
                  value={board}
                  onChange={handleChangeBoard}
                >
                  <option value="WHITE_BOARD">White Board</option>
                  <option value="BLACK_BOARD">Black Board</option>
                </select>
              </div>
              </div>
              )}
              {file && (
              <div className="flex items-center mx-2 mb-2 text-primary">
                File Uploaded<span className="hidden sm:flex"> Successfully</span>!
              </div>
          )}
            </div>
        </form>

      </div>
    </section>
  );
};

export default Share;
