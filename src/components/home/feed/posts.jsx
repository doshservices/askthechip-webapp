// import profile from "../../../assets/Profile Picture.png";
import postImg from "../../../assets/post-img.png";
import profileImage from '../../../assets/images/profile-picture.png';

export const Posts = ({bgColor, color}) => {

  return (
    <section className="p-5 mt-4 mx-2.5 grid grid-cols-12" style={{backgroundColor: bgColor, color: color}}>
      <div className="col-span-1">
        <img src={profileImage} alt="profile" className="rounded-[50%]" />
      </div>
      <div className="col-span-11 ml-3">
        <h3 className="font-bold">
          Devon Lane <span className="font-light opacity-50">Architect <sup className="font-bold">.</sup> 23s</span>
        </h3>
        <h4 className="font-medium mb-4">Tom is in a big hurry</h4>
        <img src={postImg} alt="post-img" className="w-full" />
      </div>
    </section>
  );
};
