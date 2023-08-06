import { useEffect, useState } from "react";
import profileImg from "../../../assets/images/profile-picture.png";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { notify, warn } from "../../../App";
import Loader from "../../Loader/Loader";

const Comment = ({ post, handleGetPosts, setComments }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, token } = useAuth();

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/comment?postId=${post._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: comment,
          }),
        }
      );
      if (res.ok) {
        console.log("Successfully made a comment!");
        notify("Successfully made a comment!");
        const resData = await res.json();
        console.log(resData);
        setComment("");
        handleGetPosts();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      warn("Failed to post your comment!");
      setLoading(false);
    }
    setLoading(false);
  };

  const getComments = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/comment?postId=${post._id}`,
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
      setLoading(false);
    } catch (err) {
      console.log(err);
      warn("Something went wrong!");
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, [setComments]);

  const me = user;
  const username =
    me.role === "USER" ? `${me.firstName} ${me.lastName}` : `${me.companyName}`;

  return (
    <div className="flex w-full sm:bg-[#f4f4f4] py-2.5 px-5 rounded-lg mt-2">
      <div className="justify-center items-center flex mr-2 my-auto w-full max-w-fit h-full">
        {!user?.profileImg ? (
          <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-primary100 font-bold text-xl">
            <span className="text-white">{username[0]}</span>
          </div>
        ) : (
          <img
            src={user?.profileImg}
            alt={username[0]}
            className={`rounded-full w-[52px] h-auto aspect-square`}
          />
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center rounded-lg sm:bg-grey border border-black/10 w-full"
      >
        <div className="flex w-full justify-between">
          <div className="flex ml-2 w-[80%]">
            <textarea
              placeholder="Write a comment..."
              onChange={handleComment}
              value={comment}
              name="comment"
              id="comment"
              cols="100"
              rows="1"
              className="bg-transparent sm:bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-3"
            />
          </div>
          {comment && (
            <div className="flex items-center mt-2 mr-2">
              <div className="flex items-center ml-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex bg-primary text-white text-xs hover:bg-primary/90 rounded-lg h-fit w-full px-4 py-1.5`}
                >
                  {!loading ? <Loader width="30" height="20" /> : "Comment"}
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

[
  {
    _id: "64adbd8b3ee3e861d4d09a64",
    userId: {
      _id: "64a2fc4bf4a0282fe8e59a77",
      firstName: "Abdrahman",
      lastName: "Oladimeji",
      gender: "MALE",
      email: "abdrahmanoladimeji02@gmail.com",
      phoneNumber: "08109672784",
      password: "$2b$10$L/wUb6Z9n3kVRoAhjGrUdOgrflOaO2pI1Y4IYAYCqrsfEgazFXl8m",
      interest: [],
      verified: false,
      role: "USER",
      googleSigned: true,
      status: "active",
      followers: [],
      subscription: "FREE",
      __v: 0,
    },
    docId: {
      _id: "64ac71573ee3e861d4d05a9f",
      userId: "64a67601f4a0282fe8e59cb6",
      content: "hey hey",
      board: "WHITE_BOARD",
      postImg: null,
      createdAt: "2023-07-10T21:00:07.976Z",
      updatedAt: "2023-07-10T21:00:07.976Z",
      __v: 0,
    },
    docModel: "post",
    text: "Testing comment here",
    __v: 0,
  },
];
