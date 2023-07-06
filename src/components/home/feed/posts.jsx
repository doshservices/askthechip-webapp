import { useState } from "react";
// import profile from "../../../assets/Profile Picture.png";
import postImg from "../../../assets/post-img.png";
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

const reactions = [
  {
    icon: comment,
    value: 61,
  },
  {
    icon: like,
    value: 61,
  },
  {
    icon: dislike,
    value: 61,
  },
  {
    icon: share,
    value: 61,
  },
];

const Posts = ({ bgColor, color, post, handleGetPosts }) => {
  const [showMore, setShowMore] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    setShowMore(false)
  }
  return (
    <section
      className="p-1 sm:p-5 mt-4 mx-1 sm:mx-2.5 grid grid-cols-12 font-DMSans"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="col-span-12 flex justify-between">
        <div className="flex">
          <div className="w-10 mr-2">
            <img src={profileImage} alt="profile" className="rounded-[50%]" />
          </div>
          <div className="flex">
            <div className="font-bold">
              <div>Devon Lane </div>
              <div className="font-light opacity-70">Architect</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="font-light opacity-50 mr-2 items-center flex">10mins ago</div>
          <div className={showMore?`flex relative text-primary p-0 mx-1/2 my-3 bg-primary/10 w-8 h-8 rounded-full justify-center items-center`: `flex relative text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center`}>
            <img onClick={()=>setShowMore(!showMore)} src={threeDotsIcon} alt="delete" className="w-4" />
           {showMore && <div className="absolute top-8 right-0 w-20 bg-white shadow">
            <div className="hover:bg-primary/20 flex cursor-pointer justify-center text-primary">
              <img src={editIcon} alt="edit" className="w-4 mr-2 text-primary" />
              Edit
            </div>
            <div onClick={handleOpenDeleteModal} className="hover:bg-red/20 flex cursor-pointer justify-center text-[#EB5757]">
              <img src={deleteIcon} alt="delete" className="w-4 mr-2" />
              Delete
            </div>
           </div>
            }
          </div>
        </div>
      </div>
      {openDeleteModal && (<DeleteModal setOpenDeleteModal={setOpenDeleteModal} handleGetPosts={handleGetPosts} postId={post?._id} />)}
      <div className="col-span-12 ml-3 mt-3">
        <h4 className="font-medium mb-3">{post?.content}</h4>
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

// board: "WHITE_BOARD"
// content: "Lorem ipsum is placeholder text commonly used in t…stries for previewing layouts and visual mockups"
// postImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI8SURBVHgBrVW7blNBFJxj3SZpjEhJZJpQxpRpHCmidFJB6ZQ0BCmU8AUxoSMIkR+w+AFilxSJkFJiStM4CmUMCRJQsbmz9t59ZNe+ljLSSr7ex5xzZvasXP5TChEI5ofZ0+4p7HWBnQ1g/4lAUiTupnlIDIHB+RtBNs9BxwPgqK8wHAGXf4HqArBVBxorgvtLwF5O0HYIdjZEr5GrKZkYDC+AZx2Fk0F6TeMBvPnWmuBwe/x7JgkJNg8UzkYoDZeAyOYlaK0xakHtLvDtR65BV+nSGaznGX3Y9s/JyhJUF4GPT0UfYnDy3Scg+ufA1UQv45xKWYLurk/QDkTmGoKk7z8ruBpUyhKs3rNrOqe+TanB/mP7zTISajKysgSu1asLMtluRR6O7H8smQuP5HUvnYGb/mad4oquPW81cXZh53lnRCIkzKJzaicOW36JQtBlbnYsoQGdF82EN9mAt5iD/5TpCAzwU99+bz30dxXCG7GIxoofoRtlARmP4U+g+c5aubY0DtDLJBap9jh8m/76o/D8kb+aPaz5VhV6UMfei5snZuHBJqvwHtxZFE99logZhAShHjrp33nv4l42t+ZBvI2FvUgTBFYnQcoohSary342t0VAZCZ28za4Nibqyyp/R0QLezxQet6IrAl2pxMQRasPNZiFKEHC75UYATOiFVNYzy3+5WUkAxWMCbKQgBqY94ClOfqqiqd2fAdsNxbn7GmQ2qv/ytjQJYguTnzPIqnwsU8RSDBCBFVJ4hrWiBsRHolr/wAAAABJRU5ErkJggg=="
// userId: {_id: '64a53313f4a0282fe8e59af5', gender: 'MALE', email: 'abdrahmanoladimejitest@gmail.com', phoneNumber: '08109672785', password: '$2b$10$FpNudvGXYuB/GrTRPNe2cuzFktLNmdoiZ/oygCMRv1MmndPgs81Wy', …}
// __v: 0
// _id: "64a5f94ef4a0282fe8e59b27"
