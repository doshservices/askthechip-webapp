import { useEffect, useState } from "react";
import { Header } from "../components/home";
import { Posts } from "../components/home";
import { Share } from "../components/home";
import { CircleLoader, MobileLayout, SideNav } from "../components";
import { warn } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { usePosts } from "../contexts/PostContext/PostContext";
import axios from "axios";
import { checkWidth } from "../utils/windowWidth";
// import {data} from '../components/home/feed/data';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState("All Posts");
  const { posts, setPosts } = usePosts();
  const reversedPosts = [...posts].reverse();

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
    const url = "https://askthechip-hvp93.ondigitalocean.app/api/post?limit=0&skip=0";
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response);
      const getPosts = response.data.data.post;
      setPosts(getPosts);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      warn("An error has occured, pls refresh your browser!");
    })
  }
  // Uncomment the next 3 lines when I'm about to push
  useEffect(() => {
    handleGetPosts();
  }, [setPosts]);

  const width = checkWidth()

  return (
    <>
      <section className="pageLayout homepage bg-light">
        <SideNav />
        <div className="border-r border-[#EBEEF0] pageLayout__wrapper__container">
          {width < 480 ?
            <Header
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              handleAllPost={handleAllPost}
              handleDarkMode={handleDarkMode}
              handleLightMode={handleLightMode}
            /> : <></>
          }
          <Share handleGetPosts={handleGetPosts} />
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <CircleLoader color="#05675A" />
              </div>
            </div>
          ) : (
            <>
              {reversedPosts.length > 0 ?
                <>
                  {reversedPosts?.map((post, index) => (
                    <Posts
                      key={index}
                      index={index}
                      post={post}
                      handleGetPosts={handleGetPosts}
                    />
                  ))}
                </> :
                <>
                  <h2 className="mt-4 font-semibold text-lg text-dark2D font-Inter">No Posts Found</h2>
                  <p className="mt-2 font-semibold text-base text-dark2D font-Inter">Be the first to create a post</p>
                </>
              }
            </>
          )}
        </div>
      </section>
    </>
  );
};
export default HomePage;
