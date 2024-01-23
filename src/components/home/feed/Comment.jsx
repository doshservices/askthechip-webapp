import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import Loader from "../../Loader/Loader";
import { useSelector } from "react-redux";
import { api } from '../../../contexts/index'
import axios from "axios";

const Comment = ({ post, handleGetPosts, setComments, border }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, token } = useAuth();
  const userDetails = useSelector((state) => state?.user?.user);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const getComments = async () => {
    try {
      // setLoading(true);
      const res = await fetch(
        `${api}/api/comment?postId=${post._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const resData = await res.json();
        setComments(resData.data.comment);
      }
      // setLoading(false);
    } catch (err) {
      // console.log(err);
      // warn("Something went wrong!");
      // setLoading(false);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `${api}/api/comment?postId=${post._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: comment,
            docModel: "post"
          }),
        }
      );
      if (res.ok) {
        setComment("");
        handleGetPosts();
        getComments()
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, [setComments]);

  const me = user;
  const username =
    userDetails?.role === "USER"
      ? `${userDetails?.firstName} ${userDetails?.lastName}`
      : `${userDetails?.companyName}`;

  return (
    <div className="flex w-full py-2.5 rounded-lg mt-2">
      <div className="justify-center items-center flex mr-2 my-auto w-full max-w-fit h-full">
        {!userDetails?.profileImg ? (
          <div style={{ background: "hsla(172, 92%, 28%, 1)" }} className="flex items-center justify-center w-[30px] h-[30px] rounded-full font-bold text-xl">
            <span className="text-white">{username[0]}</span>
          </div>
        ) : (
          <img
            src={userDetails?.profileImg}
            alt={username}
            className={`rounded-full w-[30px] h-auto aspect-square`}
          />
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ border: `1px solid ${border}` }}
        className={`flex flex-col justify-between items-center rounded-lg w-full`}
      >
        <div className="flex w-full justify-between">
          <div className="flex m-1 w-[80%] pl-2">
            <textarea
              placeholder="Write a comment..."
              onChange={handleComment}
              value={comment}
              name="comment"
              id="comment"
              cols="100"
              rows="1"
              className="bg-transparent border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none my-2"
            />
          </div>
          {comment && (
            <div className="flex items-center m-1">
              <div className="flex items-center ml-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1.5`}
                >
                  {loading ? <Loader width="30" height="20" /> : "Comment"}
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comment;

