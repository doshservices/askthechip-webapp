import 'react-lazy-load-image-component/src/effects/blur.css';
import like from "../../../assets/icons/like-icon.svg";
import axios from "axios";
import comment from "../../../assets/icons/comment-icon.svg";
import dislike from "../../../assets/icons/dislike-icon.svg";
import Comment from "./Comment";
import editIcon from "../../../assets/icons/edit-icon.svg";
import EditPost from "../../EditPost/EditPost";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import DeleteModal from "../../DeletePost/DeleteModal";
import useClickOutside from '../../../utils/useClickOiutside';
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";
import { useNavigate } from "react-router-dom";
import { CommentModal } from "./commentModal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState, useRef } from "react";
import { CommentIcon, LikeIcon, ReplyIcon, ShareIcon, ThreeDots, UnLikeIcon } from "../../../assets/icons";

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
    return months === 1 ? "1mon ago" : `${months}m ago`;
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
  const [showCommentModal, setShowCommentModal] = useState(false)

  useEffect(() => {
    if (showCommentModal || openDeleteModal === true) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.style.overflow = 'unset';
  }, [showCommentModal, openDeleteModal])

  const authUserId = profile?._id;
  const postUserId = post?.userId?._id;
  const myPost = authUserId === postUserId;

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
  const role = poster.role === "USER" ? "User" : "Service Provider";

  const singleComment = comments?.slice(0, 1);
  useEffect(() => {
    setSingleCommenter(singleComment?.[0]?.userId);
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
        setLikes(likesData);
      }
    } catch (error) {
    }
  };

  const handleLikePost = async () => {
    try {
      const response = await axios.post(
        `https://askthechip-hvp93.ondigitalocean.app/api/post/like-post?postId=${post._id}`,
        null,
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
        null,
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

  const commentModalDisplay = () => {
    setShowCommentModal(!showCommentModal)
  }

  return (
    <article className={index === 0 || pathname === "/profile" ? `relative bg-[#f4f4f4] posts` : `relative posts`} style={{ backgroundColor: post?.board === "BLACK_BOARD" ? "#2f2f2f" : "#f4f4f4", color: post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d" }}>
      <div className="posts__poster">
        <div className="posts__poster__details">
          <div className="dp" onClick={navigateToProfile}>
            {!poster?.profileImg ? (
              <p>{username[0]}</p>
            ) : (
              <img
                src={poster?.profileImg}
                alt="profile"
                className="rounded-[50%] w-[48px] h-auto aspect-square"
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
              <div className="actions__toggler" onClick={() => setShowMore(!showMore)}>
                <ThreeDots fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2D2D2DCC"} />
              </div>

              {showMore && (
                <div className="post-show-more absolute z-10 top-8 right-0 w-28 p-3 rounded-lg bg-white shadow">
                  <div
                    onClick={handleOpenEditModal}
                    className="hover:bg-primary/20 flex cursor-pointer justify-center text-primary mb-2"
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
          action="Post"
        />
      )}
      {openEditModal && (
        <EditPost
          setOpenEditModal={setOpenEditModal}
          handleGetPosts={handleGetPosts}
          postId={post?._id}
        />
      )}
      <div className="col-span-12 mt-3">
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
              onClick={commentModalDisplay}
              key={index}
              className="cursor-pointer flex items-center text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center"
            >
              <div className="mr-1">
                <CommentIcon fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d"} />
              </div>
              <span style={{ color: post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d" }} className="mt-1">{comments?.length}</span>
            </div>
            <div style={{ background: usersLikes.includes(myId) ? "#068978" : "transparent", color: usersLikes.includes(myId) || post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2" }} className="rounded-[4px] flex ml-3 px-3 py-1 text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center">
              <div onClick={handleLikePost} className="mr-1 w-5 cursor-pointer">
                <LikeIcon fill={post?.board === "BLACK_BOARD" || usersLikes.includes(myId) ? "#f8f8f8" : "#2d2d2d"} />
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
              <ReplyIcon fill={post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d"} />
            </div>
            <span style={{ color: post?.board === "BLACK_BOARD" ? "#f8f8f8" : "#2d2d2d" }} className="text-center mt-1">Reply</span>
          </div>
        </div>
        {showCommentModal ?
          <CommentModal post={post}
            handleGetPosts={handleGetPosts}
            setComments={setComments}
            border={post?.board === "BLACK_BOARD" ? "hsla(0, 0%, 97%, 0.1)" : "rgba(0, 0, 0, 0.10)"} close={commentModalDisplay} />
          : null
        }
        <div>
          <Comment
            post={post}
            handleGetPosts={handleGetPosts}
            setComments={setComments}
            border={post?.board === "BLACK_BOARD" ? "hsla(0, 0%, 97%, 0.1)" : "rgba(0, 0, 0, 0.10)"}
          />
        </div>
      </div>
    </article>
  );
};

export default Posts;
