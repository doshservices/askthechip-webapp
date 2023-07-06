import { createContext, useContext, useEffect, useState } from "react";

export const PostContext = createContext({
  posts: null,
  setPosts: () => null,
});

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://askthechip-endpoint-production.up.railway.app/api/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (res.ok) {
        const resData = await res.json();
        console.log(resData.data.post);
        const newPost = resData.data.post;
        setPosts(...posts, newPost);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      warn("An error has occured, pls try again!");
    }
  };

  const value = {
    posts,
    setPosts,
  };
  return (
    <PostContext.Provider value={value}>
      {loading ? (
        <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <CircleLoader color="#05675A" />
        </div>
      ) : (
        children
      )}
    </PostContext.Provider>
  );
};
export const usePosts = () => useContext(PostContext);
export default PostProvider;
