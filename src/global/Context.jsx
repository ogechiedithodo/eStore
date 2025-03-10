import { useContext, createContext } from "react";

const PostsContext = createContext();
export const usePost = () => useContext(PostsContext);


export const PostProvider = ({ children }) => {

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};


