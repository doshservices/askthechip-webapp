import { Header } from "../components/home/header";
import { Posts } from "../components/home/feed/posts";
import { Share } from "../components/home/share/share";
import  Navbar  from "../components/NavHome";

import { Profile } from "../components";

const ProfilePage = () => {
  return (
    <section className="grid grid-cols-12 justify-between">
        <div className="col-span-3">
          <Navbar />
        </div>
      <div className="col-span-5">
        <Header />
        <Share />
        <Posts />
      </div>
      <div className="col-span-4">
        <Profile />
      </div>
    </section>
  );
};
export default ProfilePage;
