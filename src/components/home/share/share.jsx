import imageIcon from "../../../assets/icons/image-icon.svg";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useSelector } from "react-redux";
import { fileToBase64 } from "../../Profile";
import { useState, useRef, useEffect } from "react";
import useClickOutside from "../../../utils/useClickOiutside";
import { api } from "../../../contexts";

const Share = ({ handleGetPosts }) => {
  const fileInputRef = useRef(null);
  const [postStatus, setPostStatus] = useState("");
  const [board, setBoard] = useState("WHITE_BOARD");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { user, token } = useAuth();
  const [modal, setModal] = useState(false)
  const [showBoardSelect, setShowBoardSelect] = useState(false)
  const userDetails = useSelector((state) => state?.user?.user);
  const [previewFile, setPreviewFile] = useState([])
  // console.log(file);

  const handleTypePost = (e) => {
    setPostStatus(e.target.value);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = async (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFiles = Array.from(e.target.files);

        const filesWithBase64 = await Promise.all(
          selectedFiles.map(async (selectedFile) => {
            const base64String = await fileToBase64(selectedFile);
            return {
              file: selectedFile,
              base64: base64String,
            };
          })
        );
        setFile(selectedFiles)
        setPreviewFile((prevFiles) => [...prevFiles, ...filesWithBase64]);
        // console.log('Updated Preview Files:', previewFile);
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

      const url = `${api}/api/create-post`;

      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      handleGetPosts();
      setFile(null)
      setModal(false)
      setPreviewFile("")
      setPostStatus("")
      setLoading(false)
    } catch (error) {
      setLoading(false);
    } finally {
    }
  };

  const handleChangeBoard = (e) => {
    setBoard(e.target.value);
  };

  const username =
    userDetails?.role === "USER"
      ? `${userDetails?.firstName} ${userDetails?.lastName}`
      : `${userDetails?.companyName}`;

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
            <p className="text-white">{username[0]}</p>
          ) : (
            <img
              src={userDetails?.profileImg}
              alt={username}
              className={`rounded-full w-[52px] aspect-square h-[50px]`}
            />
          )}
        </figure>
        <input type="text" disabled={modal} placeholder="Share a post" />
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
                      alt={username}
                      className={`rounded-full w-[40px] aspect-square h-fit`}
                    />
                  )}
                </figure>
                <p className="text-[.9rem] text-500 my-[3px]">{username}</p>
                <div className="post__select__dropdown">
                  <input
                    value={board}
                    onChange={handleChangeBoard}
                  />
                  <p onClick={() => setShowBoardSelect(!showBoardSelect)} className="input">
                    <span>{board}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                      <path d="M5.5 6.48542L0 0.985416L0.985417 0L5.5 4.5375L10.0146 0.0229163L11 1.00833L5.5 6.48542Z" fill="#F8F8F8" />
                    </svg>
                  </p>
                  {showBoardSelect ?
                    <div>
                      <p onClick={() => {
                        setBoard("WHITE_BOARD")
                        setShowBoardSelect(!showBoardSelect)
                      }}>White Board</p>
                      <p onClick={() => {
                        setBoard("BLACK_BOARD")
                        setShowBoardSelect(!showBoardSelect)
                      }}>Black Board</p>
                    </div>
                    : null
                  }
                </div>
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
                    multiple
                  />
                </div>
              </div>
              {file ?
                <figure className="preview__img">
                  {previewFile?.map((images, index) => {
                    return (
                      <div key={index}>
                        <img src={images?.base64} className="max-w-[100%]" alt={images?.file?.name} />
                      </div>
                    )
                  })}
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
