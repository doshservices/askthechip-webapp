import { createContext, useContext, useState } from "react";

export const PostContext = createContext({
  posts: null,
  setPosts: () => null,
});

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const value = {
    posts,
    setPosts,
  };
  return (
    <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider>
  );
};
export const usePosts = () => useContext(PostContext);
export default PostProvider;

{/* <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <CircleLoader color="#05675A" />
        </div> */}
