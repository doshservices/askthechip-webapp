import { useState } from "react";
// import profile from "../../../assets/Profile Picture.png";
import profileImage from "../../../assets/images/profile-picture.png";
import like from "../../../assets/icons/like-icon.svg";
import dislike from "../../../assets/icons/dislike-icon.svg";
import share from "../../../assets/icons/share-icon.svg";
import comment from "../../../assets/icons/comment-icon.svg";
import reply from "../../../assets/icons/reply-icon.svg";
import threeDotsIcon from "../../../assets/icons/three-dots.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import DeleteModal from "../../DeleteModal/DeleteModal";
import EditPost from "../../EditPost/EditPost";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useProfile } from "../../../contexts/ProfileContext/ProfileContext";

const reactions = [
  {
    icon: comment,
    value: 0,
  },
  {
    icon: like,
    value: 0,
  },
  {
    icon: dislike,
    value: 0,
  }
];

const Posts = ({ bgColor, color, index, post, handleGetPosts }) => {
  const pathname = window.location.pathname;
  const [showMore, setShowMore] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user } = useAuth();
  const {profile} = useProfile();
  
  const authUserId = profile?._id;
  const postUserId = post?.userId?._id;
  const myPost = authUserId === postUserId;
 
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    setShowMore(false);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setShowMore(false);
  };
  const poster = post?.userId;
  console.log(poster);
  const username = poster.role === "USER" ? `${poster.firstName} ${poster.lastName}` : `${poster.companyName}`
  const dp = false;
  const role = poster.role === "USER"? "Private User" : "Service Provider"
  
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
      return seconds === 1 ? '1s ago' : `${seconds}s ago`;
    } else if (minutes < 60) {
      return minutes === 1 ? '1m ago' : `${minutes}m ago`;
    } else if (hours < 24) {
      return hours === 1 ? '1h ago' : `${hours}h ago`;
    } else if (days < 30) {
      return days === 1 ? 'Yesterday' : `${days}d ago`;
    } else if (months < 12) {
      return months === 1 ? '1m ago' : `${months}m ago`;
    } else {
      return years === 1 ? '1y ago' : `${years}y ago`;
    }
  }
  
  return (
    <section
      className={index===0 || pathname === '/profile'?`bg-[#f4f4f4] rounded-[10px] p-3 sm:p-5 mt-0 sm:mt-5 mx-1 sm:mx-2.5 grid grid-cols-12 font-DMSans`: `bg-[#f4f4f4] rounded-[10px] p-3 sm:p-5 mt-5 sm:mt-10 mx-1 sm:mx-2.5 grid grid-cols-12 font-DMSans`}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="col-span-12 flex justify-between">
        <div className="flex">
          <div className="w-10 mr-2">
            {!dp? <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary100 font-bold text-xl"><span className="text-white">{username[0]}</span></div>: 
            <img src={profileImage} alt="profile" className="rounded-[50%]" />
            }
          </div>
          <div className="flex">
            <div className="font-bold">
              <div>{username}</div>
              <div className="font-light opacity-70">{role}</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="font-light opacity-50 mr-2 items-center flex">
            {getTimeAgo(post?.createdAt)}
          </div>
          {myPost && (
            <div
              className={
                showMore
                  ? `flex relative text-primary p-0 mx-1/2 my-3 bg-primary/10 w-8 h-8 rounded-full justify-center items-center`
                  : `flex relative text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center`
              }
            >
              <img
                onClick={() => setShowMore(!showMore)}
                src={threeDotsIcon}
                alt="delete"
                className="w-4"
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
        <h4 className="text-sm text-[#2D2D2DCC] font-DMSans mb-3">{post?.content}</h4>
        {post?.postImg && (
          <img src={post?.postImg} alt="post-img" className="w-full" />
        )}
      </div>
      <div className="col-span-12 flex justify-between mt-5">
        <div className="flex">
          {reactions.map((rxn, index) => (
            <div
              key={index}
              className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center"
            >
              <div className="ml-5 mr-1 w-5">
                <img src={`${rxn.icon}`} alt="Comment" />
              </div>
              <span className="text-center mt-1 mr-5">{rxn.value}</span>
            </div>
          ))}
        </div>
        <div className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center">
          <div className="mr-1">
            <img src={reply} alt="Reply" />
          </div>
          <span className="text-center mt-1">Reply</span>
        </div>
      </div>
    </section>
  );
};

export default Posts;

// const ServiceProvider = {
//   "_id": "64a53313f4a0282fe8e59af5",
//   "gender": "MALE",
//   "email": "abdrahmanoladimejitest@gmail.com",
//   "phoneNumber": "08109672785",
//   "password": "$2b$10$FpNudvGXYuB/GrTRPNe2cuzFktLNmdoiZ/oygCMRv1MmndPgs81Wy",
//   "interest": [],
//   "companyName": "Ladoke Akintola University Of Technology, Ogbomoso",
//   "cacDocument": "cacDocument",
//   "representativeId": "representativeId",
//   "otp": "191402",
//   "verified": false,
//   "role": "SERVICE_PROVIDER",
//   "googleSigned": false,
//   "serviceType": "TRAINING",
//   "status": "active",
//   "followers": [],
//   "subscription": "FREE",
//   "__v": 0
// }

// const user = {
//   "_id": "64a676f9f4a0282fe8e59cc8",
//   "userId": {
//       "_id": "64a67601f4a0282fe8e59cb6",
//       "firstName": "Ezra",
//       "lastName": "bernard",
//       "gender": "MALE",
//       "email": "bernardezra112@gmail.com",
//       "phoneNumber": "+2349135248299",
//       "password": "$2b$10$qguToz6cCqu1MRMaE7kJEua8IrrLifp8W0fCu/QpTBGkX/ARnknEO",
//       "interest": [],
//       "verified": false,
//       "role": "USER",
//       "googleSigned": true,
//       "status": "active",
//       "followers": [],
//       "subscription": "FREE",
//       "__v": 0
//   },
//   "content": "Testing testing ",
//   "board": "WHITE_BOARD",
//   "postImg": null,
//   "__v": 0
// }
