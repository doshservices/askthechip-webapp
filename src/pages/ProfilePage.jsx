import { Header } from "../components/home/header";
import { Posts } from "../components/home/feed/posts";
import { Share } from "../components/home/share/share";

import { Profile, SideNav } from "../components";
import { useState } from "react";

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className="grid grid-cols-12 justify-between">
      <div className="col-span-3 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <SideNav />
      </div>
      <div className="col-span-5 h-screen overflow-y-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Share />
        <Posts
          bgColor={darkMode ? "#79878D" : "white"}
          color={darkMode ? "white" : "black"}
        />
      </div>
      <div className="col-span-4 h-screen overflow-y-auto">
        <Profile />
      </div>
    </section>
  );
};
export default ProfilePage;
