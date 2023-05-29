// import profile from "../../../assets/Profile Picture.png";
import postImg from "../../../assets/post-img.png";
import profileImage from "../../../assets/images/profile-picture.png";
import like from "../../../assets/icons/like-icon.svg";
import share from "../../../assets/icons/share-icon.svg";
import comment from "../../../assets/icons/comment-icon.svg";
import reply from "../../../assets/icons/reply-icon.svg";

const reactions = [
  {
    icon: like,
    value: 61,
  },
  {
    icon: comment,
    value: 61,
  },
  {
    icon: share,
    value: 61,
  },
];

const Posts = ({ bgColor, color }) => {
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
              <div>
                Devon Lane{" "}
              </div>
              <div className="font-light opacity-70">
                Architect
              </div>
            </div>
          </div>
        </div>
        <div className="font-light opacity-50">
          10mins ago
        </div>
      </div>
      <div className="col-span-12 ml-3 mt-3">
        <h4 className="font-medium mb-3">Tom is in a big hurry</h4>
        <img src={postImg} alt="post-img" className="w-full" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          {reactions.map((rxn) => (
            <div className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center justify-center">
              <div className="mr-3">
                <img src={rxn.icon} alt="Comment" />
              </div>
              <span className="text-center mt-1 mr-10">{rxn.value}</span>
            </div>
          ))}
        </div>
        <div className="flex text-dark2D/80 text-[13px] font-medium font-DMSans items-center">
          <div className="mr-3">
            <img src={reply} alt="Reply" />
          </div>
          <span className="text-center mt-1">Reply</span>
        </div>
      </div>
    </section>
  );
};

export default Posts;
