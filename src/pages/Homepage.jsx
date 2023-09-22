import { useEffect, useState } from "react";
import { Header } from "../components/home";
import { Posts } from "../components/home";
import { Share } from "../components/home";
import { CircleLoader, MobileLayout, SideNav } from "../components";
import { warn } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { usePosts } from "../contexts/PostContext/PostContext";
// import {data} from '../components/home/feed/data';
import BoardMobile from "../components/home/BoardMobile";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState("All Posts");
  const { posts, setPosts } = usePosts();
  const reversedPosts = [...posts].reverse();
  // const reversedPosts = [...data].reverse();
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleAllPost = () => {
    if (darkMode !== "All Posts") {
      setDarkMode("All Posts");
    }
  };
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

  const handleGetPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://askthechip-hvp93.ondigitalocean.app/api/post?limit=0&skip=0",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const resData = await res.json();
        const getPosts = resData.data.post;
        setPosts(getPosts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      warn("An error has occured, pls refresh your browser!");
    }
  };
  // Uncomment the next 3 lines when I'm about to push
  useEffect(() => {
    handleGetPosts();
  }, [setPosts]);
  return (
    <>
      <section className="hidden sm:grid grid-cols-24 justify-between bg-light">
        <div className="col-span-3 sm:col-span-3 xm:col-span-4 h-screen overflow-y-auto border-r border-[#EBEEF0]">
          <SideNav />
        </div>
        <div className="col-span-21 sm:col-span-21 xm:col-span-20 h-screen overflow-y-auto pl-10 pr-[3.75rem] border-r border-[#EBEEF0]">
          <div className="mt-5">
            <Share handleGetPosts={handleGetPosts} />
            <Header
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              handleAllPost={handleAllPost}
              handleDarkMode={handleDarkMode}
              handleLightMode={handleLightMode}
            />
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <CircleLoader color="#05675A" />
              </div>
            </div>
          ) : (
            <>
              {reversedPosts?.map((post, index) => (
                <Posts
                  key={index}
                  index={index}
                  post={post}
                  handleGetPosts={handleGetPosts}
                />
              ))}
            </>
          )}
        </div>
      </section>
      <MobileLayout>
        <div className="overflow-x-hidden px-0 bg-light sm:px-4">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleAllPost={handleAllPost}
            handleDarkMode={handleDarkMode}
            handleLightMode={handleLightMode}
          />
          <BoardMobile />
          <Share handleGetPosts={handleGetPosts} />
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <CircleLoader color="#05675A" />
              </div>
            </div>
          ) : (
            <>
              {reversedPosts?.map((post, index) => (
                <Posts
                  key={index}
                  post={post}
                  handleGetPosts={handleGetPosts}
                />
              ))}
            </>
          )}
        </div>
      </MobileLayout>
    </>
  );
};
export default HomePage;
