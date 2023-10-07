import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/images/profile-picture.png";
import { BsEmojiSmile } from "react-icons/bs";
import attachIcon from "../../../assets/icons/gif-icon.svg";
import gifIcon from "../../../assets/icons/gif-icon.svg";
import imageIcon from "../../../assets/icons/image-icon.svg";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { notify, warn, inform } from "../../../App";
import { fileToBase64 } from "../../FileUploadInput";
import Loader from "../../Loader/Loader";
import { usePosts } from "../../../contexts/PostContext/PostContext";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";

const Share = ({ handleGetPosts }) => {
  const fileInputRef = useRef(null);
  const [postStatus, setPostStatus] = useState("");
  const [board, setBoard] = useState("WHITE_BOARD");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { user, token } = useAuth();
  const { profile } = useProfile();
  // console.log(postStatus);

  const handleTypePost = (e) => {
    setPostStatus(e.target.value);
  };
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (cloudinary) {
      cloudinary.setCloudName('pebbles-signature');
    }

    const handleUpload = () => {
      cloudinary.openUploadWidget(
        {
          cloudName: 'pebbles-signature',
          uploadPreset: 'pebbles',
          sources: ['local', 'url', 'camera'],
          showAdvancedOptions: true,
        }, (error, result) => {
          if (!error && result && result.event === 'success') {
            // console.log('Uploaded image URL:', result.info.secure_url);
            localStorage.setItem("upk", JSON.stringify(result.info.secure_url))
          }
        }
      );
    };
    const uploadButton = document.getElementById('upload-button');
    uploadButton.addEventListener('click', handleUpload);
  }, []);

  // const handleFileSelect = async (e) => {
  // const selectedFile = e.target.files[0];
  // try {
  //   const base64String = await fileToBase64(selectedFile);
  //   console.log(base64String);
  // notify("File uploaded successfully");
  // } catch (error) {
  //   console.error("Error converting file to base64:", error);
  //   inform("File not uploaded, try again!");
  // }
  // };

  const handleChangeBoard = (e) => {
    setBoard(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        "https://askthechip-hvp93.ondigitalocean.app/api/create-post",
        {
          method: "POST",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            content: postStatus,
            board,
            postImg: JSON.parse(localStorage.getItem("upk")),
          }),
        }
      );
      if (res.ok) {
        // console.log("Successfully published a post!");
        // notify("Successfully published a post!");
        const resData = await res.json();
        // console.log(resData);
        handleGetPosts();
        setTimeout(() => {
          localStorage.removeItem("upk")
        }, 1000)
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      // warn("Failed to publish your post!");
      setLoading(false);
    }

    setPostStatus("");
    setFile(null);
    setLoading(false);
  };
  const me = user;
  const username =
    me.role === "USER" ? `${me.firstName} ${me.lastName}` : `${me.companyName}`;
  const dp = false;

  return (
    <section className="px-1 sm:px-0 border-b-[3px] sm:border-b-0 border-[#bebebe]">
      <div className="grid grid-cols-12 sm:flex sm:bg-[#f4f4f4] py-2.5 px-5 rounded-lg mb-0 sm:mb-5">
        <div className="col-span-2 justify-center items-center flex mr-1 sm:mr-2 my-auto w-full sm:w-14 h-full">
          {!profile?.profileImg ? (
            <div className="flex items-center justify-center w-[52px] h-fit aspect-square rounded-full bg-primary100 font-bold text-xl">
              <span className="text-white">{username[0]}</span>
            </div>
          ) : (
            <img
              src={profile?.profileImg}
              alt={username}
              className={`rounded-full w-[52px] aspect-square h-fit`}
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className={postStatus ? "col-span-10 ml-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-2xl bg-grey  border border-black/10" : "col-span-10 ml-2 pt-0 pl-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-lg sm:rounded-lg sm:bg-grey border border-black/10"}
        >
          <div className="flex w-full justify-between">
            <div className="flex items-center ml-2 w-[80%]">
              <textarea
                placeholder="Share a post"
                onChange={handleTypePost}
                value={postStatus}
                name="post"
                id="post"
                cols="100"
                rows="1"
                className="bg-transparent sm:bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray placeholder:text-xs w-full resize-none mt-2 mb-2 sm:mb-2 sm:mt-2"
              />
            </div>
            <div className="flex items-center mr-2">
              <div className="hidden sm:flex">
                <div
                  id="upload-button"
                  className="flex text-primary p-0 mx-0 my-2 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={imageIcon} alt="Image" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleUploadClick}
                    className="hidden"
                  />
                </div>
                {/* <div
                  onClick={handleUploadClick}
                  className="flex text-dark2D p-0 mx-0 my-2 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <BsEmojiSmile />
                </div>
                <div
                  className="flex text-primary p-0 mx-0 my-2 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={gifIcon} alt="Image" />
                </div> */}
                {postStatus && (
                  <div className="ml-2 mr-1 hidden sm:flex">
                    <select
                      className="text-sm bg-transparent my-auto py-0.5 border border-primary100/50 outline-none rounded-lg"
                      value={board}
                      onChange={handleChangeBoard}
                    >
                      <option value="WHITE_BOARD">White Board</option>
                      <option value="BLACK_BOARD">Black Board</option>
                    </select>
                  </div>
                )}
              </div>
              {postStatus && (
                <div className="flex items-center ml-2">
                  <div className="ml-2 mr-1 flex sm:hidden">
                    <select
                      className="text-sm bg-transparent my-auto py-0.5 border border-primary100/50 outline-none rounded-lg"
                      value={board}
                      onChange={handleChangeBoard}
                    >
                      <option value="WHITE_BOARD">White Board</option>
                      <option value="BLACK_BOARD">Black Board</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={!postStatus || loading}
                    className={`hidden sm:flex bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1.5`}
                  >
                    {loading ? <Loader width="30" height="20" /> : "Post"}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-end items-end sm:hidden sm:justify-between w-full mb-2">
            <div className="flex items-center mr-2">
              <div className="flex">
                {/* <div
                  id="upload-button"
                  className="flex text-primary p-0 mx-0 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={imageIcon} alt="Image" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleUploadClick}
                    className="hidden"
                  />
                </div> */}
                <div
                  id="upload-button"
                  className="flex text-primary p-0 mx-0 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={imageIcon} alt="Image" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleUploadClick}
                    className="hidden"
                  />
                </div>
                {/* <div
                  onClick={handleUploadClick}
                  className="flex text-dark2D p-0 mx-0 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <BsEmojiSmile />
                </div>
                <div
                  className="flex text-primary p-0 mx-0 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={gifIcon} alt="Image" />
                </div> */}
              </div>
              {postStatus &&
                <div className="flex items-center ml-2">
                  <button
                    type="submit"
                    disabled={!postStatus || loading}
                    className={`flex sm:hidden bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1.5`}
                  >
                    {loading ? <Loader width="30" height="20" /> : "Post"}
                  </button>
                </div>
              }
            </div>
          </div>
          {/* )} */}
        </form>
      </div>
    </section>
  );
};

export default Share;
