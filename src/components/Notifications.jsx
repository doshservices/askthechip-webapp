import like from "./../assets/icons/like-icon.svg";
import share from "./../assets/icons/share-icon.svg";
import comment from "./../assets/icons/comment-icon.svg";
import reply from "./../assets/icons/reply-icon.svg";
import user from "./../assets/blog-img.svg";
import SideNav from "./SideNav";

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
const Notifications = () => {
  return (
    <section className="pageLayout notifications bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        <div className="notifications__wrapper">
          <div className="notifications__preview">
            <section className="notification">
              <img src={user} alt="User" className="rounded-full" />
              <div className="">
                <h3>Lex Murphy liked your post</h3>
                <p role="time" className="text-[#A5ACB8] text-xs font-medium">Today at 9:42 AM</p>
              </div>
            </section>
          </div>
          <section className="notifications__details">

          </section>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
