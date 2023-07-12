import { useEffect, useState } from "react";
import profileImg from "../../../assets/images/profile-picture.png";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { notify, warn } from "../../../App";
import Loader from "../../Loader/Loader";

const Comment = ({ post, handleGetPosts, setComments }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://askthechip-endpoint-production.up.railway.app/api/comment?postId=${post._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
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
        handleGetPosts();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      warn("Failed to post your comment!");
      setLoading(false);
    }
    setComment("");
    setLoading(false);
  };

  const getComments = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://askthechip-endpoint-production.up.railway.app/api/comment?postId=${post._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          }
        }
      );
      if (res.ok) {
        // console.log("These are the comments!");
        // notify("Successfully made a comment!");
        const resData = await res.json();
        // console.log("Ressponse here", resData);
        // console.log("Response data here", resData.data);
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

  useEffect(()=> {
    getComments();
  }, [])
  const me = user?.user;
  const username =
    me.role === "USER" ? `${me.firstName} ${me.lastName}` : `${me.companyName}`;
  const dp = false;

  return (
      <div className="grid grid-cols-12 col-span-12 w-full bg-[#f4f4f4] py-2.5 px-5 rounded-lg mt-2">
        <div className="col-span-1 justify-center items-center flex mr-1 sm:mr-2 my-auto w-full sm:w-14 h-full">
          {!dp ? (
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary100 font-bold text-xl">
              <span className="text-white">{username[0]}</span>
            </div>
          ) : (
            <img
              src={profileImg}
              alt={profileImg}
              className={`rounded-full h-fit`}
            />
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="col-span-11 flex flex-col justify-between items-center rounded-lg bg-grey border border-black/10"
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
                className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-3"
              />
            </div>
            {comment && (
              <div className="flex items-center mt-2 mr-2">
                <div className="flex items-center ml-2">
                  <button
                    type="submit"
                    disabled={!comment || loading}
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


[
  {
      "_id": "64adbd8b3ee3e861d4d09a64",
      "userId": {
          "_id": "64a2fc4bf4a0282fe8e59a77",
          "firstName": "Abdrahman",
          "lastName": "Oladimeji",
          "gender": "MALE",
          "email": "abdrahmanoladimeji02@gmail.com",
          "phoneNumber": "08109672784",
          "password": "$2b$10$L/wUb6Z9n3kVRoAhjGrUdOgrflOaO2pI1Y4IYAYCqrsfEgazFXl8m",
          "interest": [],
          "verified": false,
          "role": "USER",
          "googleSigned": true,
          "status": "active",
          "followers": [],
          "subscription": "FREE",
          "__v": 0
      },
      "docId": {
          "_id": "64ac71573ee3e861d4d05a9f",
          "userId": "64a67601f4a0282fe8e59cb6",
          "content": "hey hey",
          "board": "WHITE_BOARD",
          "postImg": null,
          "createdAt": "2023-07-10T21:00:07.976Z",
          "updatedAt": "2023-07-10T21:00:07.976Z",
          "__v": 0
      },
      "docModel": "post",
      "text": "Testing comment here",
      "__v": 0
  }
]