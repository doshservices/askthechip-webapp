import { Profile } from ".";
import { useState } from "react";
import { Share, Posts } from "./home";

const ProfileDesktop = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-12 xm:col-span-6 h-screen overflow-y-auto border-r border-[#EBEEF0] pl-10 pr-5">
        <div>
          <div className="font-DMSans text-2xl font-medium my-5 mb-6">
            Profile
          </div>
            <Profile />
        </div>
      </div>
      <div className="hidden xm:grid xm:col-span-6 h-screen overflow-y-auto overflow-x-hidden px-5">
        <div className="mt-10">
          <Share />
        </div>
        <Posts
          bgColor={darkMode ? "#79878D" : "white"}
          color={darkMode ? "white" : "black"}
        />
        <Posts
          bgColor={darkMode ? "#79878D" : "white"}
          color={darkMode ? "white" : "black"}
        />
      </div>
    </section>
  );
};

export default ProfileDesktop;
