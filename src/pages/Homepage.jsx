import { useState } from "react";
import { Header } from "../components/home";
import { Posts } from "../components/home";
import { Share } from "../components/home";
import { Search } from "../components/home";
import { ServiceProviders } from "../components/home";
import { MobileLayout, SideNav } from "../components";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <section className="hidden sm:grid grid-cols-24 justify-between">
        <div className="col-span-1 sm:col-span-1 xm:col-span-4 h-screen overflow-y-auto border-r border-[#EBEEF0]">
          <SideNav />
        </div>
        <div className="col-span-11 sm:col-span-11 xm:col-span-14 h-screen overflow-y-auto pl-10 pr-[3.75rem] border-r border-[#EBEEF0]">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Share />
          <Posts
            bgColor={darkMode ? "#79878D" : "white"}
            color={darkMode ? "white" : "black"}
          />
        </div>
        <div className="hidden xm:flex flex-col col-span-6 h-screen overflow-y-auto pt-5 mr-4 ml-5">
          <Search background={"#FCFCFC"} />
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
