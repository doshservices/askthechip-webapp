import { Header } from "../components/home/header";
import { Posts } from "../components/home/feed/posts";
import { Share } from "../components/home/share/share";
import { Search } from "../components/home/search/search";
import ServiceProviders from "../components/home/serviceProviders/explore";
import { MobileLayout, SideNav } from "../components";
import { useState } from "react";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <section className="hidden sm:grid grid-cols-12 justify-between">
      <div className="col-span-1 sm:col-span-1 xm:col-span-3 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <SideNav />
      </div>
      <div className="col-span-11 sm:col-span-11 xm:col-span-5 h-screen overflow-y-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Share />
        <Posts
          bgColor={darkMode ? "#79878D" : "white"}
          color={darkMode ? "white" : "black"}
          />
      </div>
      <div className="hidden xm:flex flex-col col-span-4 h-screen overflow-y-auto pt-2 mr-4">
        <Search background={"#EBEEF0"} />
        <ServiceProviders />
      </div>
    </section>
    <MobileLayout>
      <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Share />
        <Posts
          bgColor={darkMode ? "#79878D" : "white"}
          color={darkMode ? "white" : "black"}
          />
      </div>
    </MobileLayout>
    </>
  );
};
export default HomePage;
