import profile from "../../../assets/Profile Picture.png";
import postImg from "../../../assets/post-img.png";

export const Posts = () => {
  return (
    <section className="p-5">
      <img src={profile} alt="profile" className="rounded-[50%]" />
      <div>
        <h3>
          Devon Lane <span>Architect . 23s</span>
        </h3>
        <h4>Tom is in a big hurry</h4>
        <img src={postImg} alt="post-img" className="w-full" />
      </div>
    </section>
  );
};
