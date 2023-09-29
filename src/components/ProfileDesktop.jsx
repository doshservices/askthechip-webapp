import { Profile } from ".";
import { useState } from "react";
import { Share, Posts, Search } from "./home";

const ProfileDesktop = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="grid grid-cols-12">
      <div className="col-span-12 xm:col-span-12 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <div className="hidden xm:flex py-4 border-b border-[#EBEEF0] pr-20 pl-10">
          <Search />
        </div>
        <div className=" pr-20 pl-10">
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default ProfileDesktop;
