import { useState, useRef } from "react";
import imageIcon from "../../../assets/icons/image-icon.svg";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import Loader from "../../Loader/Loader";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";

const Share = ({ handleGetPosts }) => {
  const fileInputRef = useRef(null);
  const [postStatus, setPostStatus] = useState("");
  const [board, setBoard] = useState("WHITE_BOARD");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { user, token } = useAuth();
  const { profile } = useProfile();

  const handleTypePost = (e) => {
    setPostStatus(e.target.value);
  };

  // useEffect(() => {
  // console.log(file);
  // }, [file])

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = async (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
          // console.error("No file selected.");
          return;
        }
        setFile(selectedFile);
        setFile(selectedFile);
      } else {
        // console.error("No file selected.");
      }
    } catch (error) {
      // console.error("Error selecting file:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("content", postStatus);
      formData.append("board", board);
      if (file) {
        formData.append("postImg", file);
      }

      const res = await fetch(
        "https://askthechip-hvp93.ondigitalocean.app/api/create-post",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (res.ok) {
        const resData = await res.json();
        handleGetPosts();
        setTimeout(() => {
          localStorage.removeItem("upk");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setPostStatus("");
      setFile(null);
    }
  };

  const handleChangeBoard = (e) => {
    setBoard(e.target.value);
  };

  const me = user;
  const username =
    me.role === "USER" ? `${me.firstName} ${me.lastName}` : `${me.companyName}`;
  // const dp = false;

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
          onChange={handleFileSelect}
          className={postStatus ? "col-span-10 ml-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-2xl bg-grey  border border-black/10" : "col-span-10 ml-2 pt-0 pl-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-lg sm:rounded-lg sm:bg-grey border border-black/10"}
        >
          <div className="flex w-full justify-between">
            <div className="flex items-center ml-2 w-[80%]">
              <textarea
                placeholder="Share a post"
                onChange={handleTypePost}
                value={postStatus}
                name="content"
                id="content"
                cols="100"
                rows="1"
                className="bg-transparent sm:bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray placeholder:text-xs w-full resize-none mt-2 mb-2 sm:mb-2 sm:mt-2"
              />
            </div>
            <div className="flex items-center mr-2">
              <div className="hidden sm:flex">
                <div onClick={handleUploadClick}
                  id="upload-button"
                  className="flex text-primary p-0 mx-0 my-2 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={imageIcon} alt="Image" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileSelect}
                    name="postImg"
                    id="postImg"
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
                      name="board"
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
                  onClick={handleUploadClick}
                  id="upload-button"
                  className="flex text-primary p-0 mx-0 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center"
                >
                  <img src={imageIcon} alt="Image" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileSelect}
                    name="postImg"
                    id="postImg"
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
