import { useState, useRef } from "react";
import imageIcon from "../../../assets/icons/image-icon.svg";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import Loader from "../../Loader/Loader";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";
import axios from "axios";

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

      // console.log(response);
      handleGetPosts();
    } catch (error) {
      // console.error(error);
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

  return (
    <section className="share">
      <div>
        <div className="share__container">
          <figure className="profile__dp">
            {!profile?.profileImg ? (
              <p className="text-white">{username[0]}</p>
            ) : (
              <img
                src={profile?.profileImg}
                alt={username}
                className={`rounded-full w-[52px] aspect-square h-fit`}
              />
            )}
          </figure>
          <form onSubmit={handleSubmit} onChange={handleFileSelect}>
            <div className={postStatus ? "post-content column" : "post-content"}>
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
            {postStatus && (
              <div className="actions">
                <div className="flex">
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
                >
                  {loading ? <Loader width="30" height="20" /> : "Post"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Share;
