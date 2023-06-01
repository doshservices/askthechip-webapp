import { useState } from "react";
import { Header } from "../components/home";
import { Posts } from "../components/home";
import { Share } from "../components/home";
import { MobileLayout, SideNav } from "../components";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState("All Posts");
  const handleAllPost = () => {
    if(darkMode!== "All Posts"){
      setDarkMode("All Posts")
    }
  }
  const handleLightMode = () => {
    if (darkMode !== "White Board") {
      setDarkMode("White Board");
    }
  };
  const handleDarkMode = () => {
    if (darkMode !== "Black Board") {
      setDarkMode("Black Board");
    }
  };

  return (
    <>
      <section className="hidden sm:grid grid-cols-24 justify-between bg-light">
        <div className="col-span-3 sm:col-span-3 xm:col-span-4 h-screen overflow-y-auto border-r border-[#EBEEF0]">
          <SideNav />
        </div>
        <div className="col-span-21 sm:col-span-21 xm:col-span-20 h-screen overflow-y-auto pl-10 pr-[3.75rem] border-r border-[#EBEEF0]">
          <div className="mt-5">
            <Share />
            <Header darkMode={darkMode} setDarkMode={setDarkMode} handleAllPost={handleAllPost} handleDarkMode={handleDarkMode} handleLightMode={handleLightMode} />
          </div>
          <Posts
            bgColor={darkMode === "Black Board" ? "#79878D" : "#f4f4f4"}
            color={darkMode === "Black Board" ? "white" : "#00000090"}
          />
          <Posts
            bgColor={darkMode === "Black Board" ? "#79878D" : "#f4f4f4"}
            color={darkMode === "Black Board" ? "white" : "#00000090"}
          />
        </div>
      </section>
      <MobileLayout>
        <div className="overflow-x-hidden px-1 sm:px-4">
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
