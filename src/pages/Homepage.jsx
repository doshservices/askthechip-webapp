import { useEffect, useState } from "react";
import { Header, Search } from "../components/home";
import { Posts } from "../components/home";
import { Share } from "../components/home";
import { CircleLoader, SideNav } from "../components";
import { warn } from "../App";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { usePosts } from "../contexts/PostContext/PostContext";
import axios from "axios";
import { useWindowWidth } from "../utils/windowWidth";
import { api } from "../contexts";
import { SideColumn } from "../components/SideColumn";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState("All Posts");
  const [postCategory, setPostCategory] = useState("all")
  const { posts, setPosts } = usePosts();
  const reversedPosts = [...posts].reverse();
  const [error, setError] = useState("")

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
    // setLoading(true);
    const url = `${api}/api/post?limit=0&skip=0`;
    await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log(response);
      const getPosts = response?.data?.data?.post;
      setPosts(getPosts);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      if (error?.message === "Network Error") {
        warn("Network Error. Please turn on mobile or connect to internet");
      }
    })
  }

  useEffect(() => {
    handleGetPosts();
  }, [setPosts]);

  const width = useWindowWidth()

  return (
    <>
      <section className="pageLayout homepage xsm:gap-[2rem] xsm:pr-[2rem] xs:pr-[4rem]">
        <SideNav />
        <div className="xsm:pt-4 pageLayout__wrapper__container">
          {width <= 480 ?
            <Header
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              handleAllPost={handleAllPost}
              handleDarkMode={handleDarkMode}
              handleLightMode={handleLightMode}
            /> : <></>
          }
          <Share handleGetPosts={handleGetPosts} />
          <div className="home-container">
            <div>
              <div className="p-wrap">
                <div className="post__category__toggler xsm:mt-4">
                  <button onClick={() => setPostCategory("all")} className={postCategory === "all" ? "active" : ""}>All Post</button>
                  <button onClick={() => setPostCategory("white-board")} className={postCategory === "white-board" ? "active" : ""}>White Board</button>
                  <button onClick={() => setPostCategory("black-board")} className={postCategory === "black-board" ? "active" : ""}>Black Board</button>
                </div>
              </div>
              {postCategory === "all" ?
                <>
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
                          <h2 className="mt-4 ml-4 font-semibold text-lg text-dark2D font-Inter">No Posts Found</h2>
                          <p className="mt-2 ml-4 font-semibold text-base text-dark2D font-Inter">Be the first to create a post</p>
                        </>
                      }
                    </>
                  )}
                </>
                :
                null
              }
              {postCategory === "white-board" ?
                <>
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
                          {reversedPosts?.filter(post => post.board === "WHITE_BOARD").map((post, index) => (
                            <Posts
                              key={index}
                              index={index}
                              post={post}
                              handleGetPosts={handleGetPosts}
                            />
                          ))}
                        </> :
                        <>
                          <h2 className="mt-4 ml-4 font-semibold text-lg text-dark2D font-Inter">No Posts Found</h2>
                          <p className="mt-2 ml-4 font-semibold text-base text-dark2D font-Inter">Be the first to create a post</p>
                        </>
                      }
                    </>
                  )}
                </>
                :
                null
              }
              {postCategory === "black-board" ?
                <>
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
                          {reversedPosts?.filter(post => post.board === "BLACK_BOARD").map((post, index) => (
                            <Posts
                              key={index}
                              index={index}
                              post={post}
                              handleGetPosts={handleGetPosts}
                            />
                          ))}
                        </> :
                        <>
                          <h2 className="mt-4 ml-4 font-semibold text-lg text-dark2D font-Inter">No Posts Found</h2>
                          <p className="mt-2 ml-4 font-semibold text-base text-dark2D font-Inter">Be the first to create a post</p>
                        </>
                      }
                    </>
                  )}
                </>
                :
                null
              }
            </div>
            {width >= 920 ?
              <div className="mt-4">
                <SideColumn />
              </div>
              : null
            }
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
