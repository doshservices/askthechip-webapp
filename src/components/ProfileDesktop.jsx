import { Profile, SideNav } from ".";
import { useState } from "react";
import { Header, Share, Posts } from "./home";

const ProfileDesktop = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className="grid grid-cols-12 justify-between">
      <div className="col-span-12 xm:col-span-6 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <Profile />
      </div>
      <div className="hidden xm:grid xm:col-span-6 h-screen overflow-y-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Share />
        <Posts
          bgColor={darkMode ? "#79878D" : "white"}
          color={darkMode ? "white" : "black"}
        />
      </div>
    </section>
  );
};

export default ProfileDesktop;
