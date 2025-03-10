import { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const PostsContext = createContext();

export const PostProvider = ({ children }) => {
  const [allPost, setAllPost] = useState([]);

  const value = {
    allPost,
    setAllPost,
    getPost,
  };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePost = () => useContext(PostsContext);
