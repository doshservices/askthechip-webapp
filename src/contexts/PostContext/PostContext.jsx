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

