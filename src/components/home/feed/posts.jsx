import { useEffect, useState } from "react";
import like from "../../../assets/icons/like-icon.svg";
import dislike from "../../../assets/icons/dislike-icon.svg";
import comment from "../../../assets/icons/comment-icon.svg";
import reply from "../../../assets/icons/reply-icon.svg";
import threeDotsIcon from "../../../assets/icons/three-dots.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import DeleteModal from "../../DeletePost/DeleteModal";
import EditPost from "../../EditPost/EditPost";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";
import Comment from "./Comment";
import Comments from "./Comments";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { CommentIcon, LikeIcon, ShareIcon, UnLikeIcon } from "../../../assets/icons";

const reactions = [
  {
    icon: comment,
  },
  {
    icon: like,
  },
  {
    icon: dislike,
  },
];

function getTimeAgo(timestamp) {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);
  const timeDifference = currentTime.getTime() - pastTime.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return seconds === 1 ? "1s ago" : `${seconds}s ago`;
  } else if (minutes < 60) {
    return minutes === 1 ? "1m ago" : `${minutes}m ago`;
  } else if (hours < 24) {
    return hours === 1 ? "1h ago" : `${hours}h ago`;
  } else if (days < 30) {
    return days === 1 ? "Yesterday" : `${days}d ago`;
  } else if (months < 12) {
    return months === 1 ? "1m ago" : `${months}m ago`;
  } else {
    return years === 1 ? "1y ago" : `${years}y ago`;
  }
}

const Posts = ({ index, post, handleGetPosts }) => {
  const pathname = window.location.pathname;
  const [likes, setLikes] = useState(0);
  const [usersLikes, setUsersLikes] = useState([])
  const [comments, setComments] = useState([]);
  const [viewAllComments, setViewAllComments] = useState(false);
  const [loadingLikes, setLoadingLikes] = useState(false);
  const [likePost, setLikePost] = useState(null);
  const [loadingLikePost, setLoadingLikePost] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user, token } = useAuth();
  const { profile } = useProfile();
  const [singleCommenter, setSingleCommenter] = useState({});

  const authUserId = profile?._id;
  const postUserId = post?.userId?._id;
  const myPost = authUserId === postUserId;

  const myArray = [2, 3, 4, 2];

  // if (myArray.includes(2)) {
  //   console.log("The array contains 2.");
  // } else {
  //   console.log("The array does not contain 2.");
  // }

  const myId = user?._id;

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    setShowMore(false);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setShowMore(false);
  };
  const poster = post?.userId;
  const username =
    poster?.role === "USER"
      ? `${poster.firstName} ${poster.lastName}`
      : `${poster.companyName}`;
  const role = poster.role === "USER" ? "Private User" : "Service Provider";

  const singleComment = comments?.slice(0, 1);
  useEffect(() => {
    setSingleCommenter(singleComment[0]?.userId);
  }, [comments]);

  const sCommenterName =
    singleCommenter?.role === "USER"
      ? `${singleCommenter?.firstName} ${singleCommenter?.lastName}`
      : `${singleCommenter?.companyName}`;
  const getUsername = (user) => {
    return user?.role === "USER"
      ? `${user?.firstName} ${user?.lastName}`
      : `${user?.companyName}`;
  };

  const getLikesById = async () => {
    await axios.get(`https://askthechip-hvp93.ondigitalocean.app/api/post/get-likes?postId=${post._id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      setUsersLikes(res?.data?.data?.post.map(item => item?.userId?._id))
    }).catch((err) => {
      // console.log(err);
      setLoadingLikePost(false);
    })
  };

  useEffect(() => {
    getLikesById()
  }, [])

  const handleLikesValue = async () => {
    try {
      const res = await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/post/get-likes?postId=${post._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const likesRes = await res.json();
        const likesData = likesRes.data.post.length;
        // console.log('Likes response here', likesRes)
        setLikes(likesData);
      }
    } catch (error) {
    }
  };

  const handleLikePost = async () => {
    try {
      const response = await axios.post(
        `https://askthechip-hvp93.ondigitalocean.app/api/post/like-post?postId=${post._id}`,
        null, // No data being sent in the request body, pass null here
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setTimeout(() => {
        handleLikesValue();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnLikePost = async () => {
    try {
      const response = await axios.post(
        `https://askthechip-hvp93.ondigitalocean.app/api/post/unlike-post?postId=${post._id}`,
        null, // No data being sent in the request body, pass null here
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      setTimeout(() => {
        handleLikesValue();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    handleLikesValue()
    getLikesById()
  }, [likes])

  const handleViewAllComments = () => {
    setViewAllComments(!viewAllComments);
  };

  // useEffect(() => {
  //   handleLikePost();
  //   handleLikesValue();
  // }, [setLikes, setLikePost]);

  useEffect(() => {
    handleLikesValue();
  }, [likes]);

  const navigate = useNavigate()

  const navigateToProfile = () => {
    localStorage.setItem("ask-un-id", JSON.stringify(postUserId))
    setTimeout(() => {
      if (postUserId === profile?._id) {
        navigate("/profile")
      } else {
        navigate("/users-profile")
      }
    }, 1000)
  }

  return (
    <article className={index === 0 || pathname === "/profile" ? `bg-[#f4f4f4] posts` : `posts`} style={{ backgroundColor: post?.board === "BLACK_BOARD" ? "#2f2f2f" : "#f4f4f4", color: post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d" }}>
      <div className="posts__poster">
        <div className="posts__poster__details">
          <div className="dp" onClick={navigateToProfile}>
            {!poster?.profileImg ? (
              <p>{username[0]}</p>
            ) : (
              <img
                src={poster?.profileImg}
                alt="profile"
                className="rounded-[50%] w-[52px] h-auto aspect-square"
              />
            )}
          </div>
          <div className="user">
            <p className="user__name" onClick={navigateToProfile}>{username}</p>
            <p className="user__role">{role}</p>
          </div>
        </div>
        <div className="post__actions">
          <p role="time" className="post__actions__time">
            {getTimeAgo(post?.createdAt)}
          </p>
          {myPost && (
            <div
              className={
                showMore
                  ? `post__actions__actions flex relative text-primary p-0 mx-1/2 bg-primary/10 w-8 h-8 rounded-full justify-center items-center`
                  : `post__actions__actions flex relative text-primary p-0 mx-1/2 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center`
              }
            >
              <img
                onClick={() => setShowMore(!showMore)}
                src={threeDotsIcon}
                alt="delete"
                className="actions__toggler"
              />
              {showMore && (
                <div className="absolute top-8 right-0 w-28 p-4 rounded-lg bg-white shadow">
                  <div
                    onClick={handleOpenEditModal}
                    className="hover:bg-primary/20 flex cursor-pointer justify-center text-primary"
                  >
                    <img
                      src={editIcon}
                      alt="edit"
                      className="w-4 mr-2 text-primary"
                    />
                    Edit
                  </div>
                  <div
                    onClick={handleOpenDeleteModal}
                    className="hover:bg-red/20 flex cursor-pointer justify-center text-[#EB5757]"
                  >
                    <img src={deleteIcon} alt="delete" className="w-4 mr-2" />
                    Delete
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {openDeleteModal && (
        <DeleteModal
          setOpenDeleteModal={setOpenDeleteModal}
          handleGetPosts={handleGetPosts}
          postId={post?._id}
        />
      )}
      {openEditModal && (
        <EditPost
          setOpenEditModal={setOpenEditModal}
          handleGetPosts={handleGetPosts}
          postId={post?._id}
        />
      )}
      <div className="col-span-12 ml-3 mt-3">
        <p className="text-sm font-DMSans mb-3 text-inherit">
          {post?.content}
        </p>
        <div className="flex justify-center">
          {post?.postImg && (
            <LazyLoadImage
              effect='blur'
              src={post?.postImg}
              alt="post-img"
              className="w-auto max-h-[400px] sm:max-h-[600px]" />
          )}
        </div>
      </div>
      <div className="col-span-12 flex flex-col justify-between mt-5">
        <div className="flex justify-between">
          <div className="flex">
            <div
              key={index}
              className="flex items-center text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center"
            >
              <div className="mr-1">
                <CommentIcon fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d"} />
              </div>
              <span className="mt-1">{comments?.length}</span>
            </div>
            <div style={{ background: usersLikes.includes(myId) ? "#068978" : "transparent", color: usersLikes.includes(myId) ? "#f8f8f8" : "#2d2d2" }} className="rounded-[4px] flex ml-3 px-3 py-1 text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center">
              <div onClick={handleLikePost} className="mr-1 w-5 cursor-pointer">
                <LikeIcon fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d"} />
              </div>
              <span className="text-center mt-1 text-inherit">{likes}</span>
            </div>
            <div className="rounded-[4px] flex ml-3 px-3 py-1 text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center">
              <div onClick={handleUnLikePost} className="mr-1 w-5 cursor-pointer">
                <UnLikeIcon fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d"} />
              </div>
              <span className="text-center mt-1"></span>
            </div>
            <div className={`ml-3 flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center`}>
              <div className="cursor-pointer mt-1">
                <ShareIcon fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d"} />
              </div>
              <span className={`mt-1`}></span>
            </div>
          </div>
          <div className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center">
            <div className="mr-1">
              <img src={reply} alt="Reply" />
            </div>
            <span className="text-center mt-1">Reply</span>
          </div>
        </div>

        <div>
          {comments.length > 0 && (
            <>
              <div className="h-[0.062rem] w-[99%] mx-auto bg-black/10 mb-4 mt-8"></div>
              {!viewAllComments ? (
                <div>
                  <div className="flex">
                    <div className="w-10 mr-1">
                      {!singleCommenter?.profileImg ? (
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary100 font-bold text-xl">
                          <span className="text-white">
                            {sCommenterName[0]}
                          </span>
                        </div>
                      ) : (
                        <img src={singleCommenter?.profileImg} alt="profile" className="rounded-[50%]" />
                      )}
                    </div>
                    <div className="flex">
                      <div className="flex justify-center items-center font-bold">
                        <div>{getUsername(singleCommenter)}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mx-11 mt-3 text-sm text-[#2D2D2DCC] font-DMSans">{singleComment[0]?.text}</div>
                  </div>
                </div>
              ) : (
                <>
                  {comments.map((c, index) => (
                    <Comments
                      c={c}
                      key={index}
                      getUsername={getUsername}
                      handleGetPosts={handleGetPosts}
                    />
                  ))}
                </>
              )}
            </>
          )}
          <div className="mx-11 mt-3">{/* {comments?.slice(0, 1)} */}</div>
        </div>
        {comments?.length > 0 && (
          <div
            onClick={handleViewAllComments}
            className="cursor-pointer text-primary80 ml-5 mb-2.5 mt-5 font-medium"
          >
            View {viewAllComments ? "less" : `all ${comments?.length}`}{" "}
            comment(s)
          </div>
        )}
        <div>
          <Comment
            post={post}
            handleGetPosts={handleGetPosts}
            setComments={setComments}
          />
        </div>
      </div>
    </article>
  );
};

export default Posts;
