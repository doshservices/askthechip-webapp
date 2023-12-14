import imageIcon from "../../../assets/icons/image-icon.svg";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";
import { useSelector } from "react-redux";
import { fileToBase64 } from "../../Profile";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "../../../utils/useClickOiutside";

const Share = ({ handleGetPosts }) => {
  const fileInputRef = useRef(null);
  const [postStatus, setPostStatus] = useState("");
  const [board, setBoard] = useState("WHITE_BOARD");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { user, token } = useAuth();
  const { profile } = useProfile();
  const [modal, setModal] = useState(false)
  const [previewFile, setPreviewFile] = useState("")
  const userDetails = useSelector((state) => state?.user?.user);

  const handleTypePost = (e) => {
    setPostStatus(e.target.value);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = async (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
          return;
        }
        setFile(selectedFile);
        const base64String = await fileToBase64(selectedFile);
        setPreviewFile(base64String);
      } else {
      }
    } catch (error) {
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

      const url = "https://askthechip-hvp93.ondigitalocean.app/api/create-post";

      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleGetPosts();
      setFile(null)
      setModal(false)
      setPreviewFile("")
    } catch (error) {
      setLoading(false);
    } finally {
    }
  };

  const handleChangeBoard = (e) => {
    setBoard(e.target.value);
  };

  const me = user;
  const username =
    me.role === "USER" ? `${me.firstName} ${me.lastName}` : `${me.companyName}`;

  const modalToggle = () => {
    setModal(!modal)
    setPreviewFile("")
    setFile(null)
  }

  const modalRef = useRef(null);

  useClickOutside(modalRef, modalToggle);

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.style.overflow = 'unset';
  }, [modal])

  return (
    <>
      <div className="share__preview" onClick={modalToggle}>
        <figure>
          {!userDetails?.profileImg ? (
            <p className="text-white">{userDetails?.firstName[0]}</p>
          ) : (
            <img
              src={userDetails?.profileImg}
              alt={userDetails?.firstName}
              className={`rounded-full w-[52px] aspect-square h-[50px]`}
            />
          )}
        </figure>
        <input type="text" placeholder="Share a post" />
      </div>
      {modal ?
        <section className="share">
          <div className="share__container">
            <svg className="cursor-pointer ml-auto block mb-2" onClick={modalToggle} width="35" height="35" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m13.59 12.002 4.454-4.453a1.126 1.126 0 0 0-1.59-1.594L12 10.408 7.547 5.955A1.127 1.127 0 1 0 5.953 7.55l4.453 4.453-4.453 4.453a1.127 1.127 0 1 0 1.594 1.594L12 13.596l4.453 4.453a1.127 1.127 0 1 0 1.594-1.594l-4.456-4.453Z"></path>
            </svg>
            <form ref={modalRef} onSubmit={handleSubmit} onChange={handleFileSelect}>
              <div className="flex items-center gap-2">
                <figure>
                  {!userDetails?.profileImg ? (
                    <p style={{ background: "hsla(172, 92%, 28%, 1)" }} className="text-white flex items-center justify-center h-[40px] w-[40px] rounded-full">{userDetails?.firstName[0]}</p>
                  ) : (
                    <img
                      src={userDetails?.profileImg}
                      alt={userDetails?.firstName}
                      className={`rounded-full w-[40px] aspect-square h-fit`}
                    />
                  )}
                </figure>
                {/* <div> */}
                <p className="text-[.9rem] text-500 my-[3px]">{userDetails?.firstName} {userDetails?.lastName}</p>
                <select
                  className="text-sm bg-transparent my-auto py-0.5 border border-primary100/50 outline-none rounded-lg ml-auto"
                  value={board}
                  onChange={handleChangeBoard}
                >
                  <option value="WHITE_BOARD">White Board</option>
                  <option value="BLACK_BOARD">Black Board</option>
                </select>
                {/* </div> */}
              </div>
              <div className="post-content">
                <textarea
                  placeholder="Share a post"
                  onChange={handleTypePost}
                  value={postStatus}
                  name="content"
                  id="content"
                />
                <div onClick={handleUploadClick} className="upload">
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
              </div>
              {file ?
                <figure className="preview__img">
                  <div>
                    <img src={previewFile} className="max-w-[100%]" alt="" />
                  </div>
                </figure>
                : null
              }
              <button
                type="submit"
                disabled={!postStatus && !file || loading}
              >
                {loading ? <Loader width="30" height="20" /> : "Post"}
              </button>
            </form>
          </div>
        </section>
        :
        null
      }
    </>
  );
};

export default Share;
