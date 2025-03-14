
import { useContext, useState, createContext } from "react";

const PostsContext = createContext();
export const usePost = () => useContext(PostsContext);


export const PostProvider = ({ children }) => {

  const [dropmodalTwo, setDropModalTwo]= useState(false)
   const [dropModal, setDropModal]=useState(false)
  const [allPost, setAllPost] = useState([]);
  
  const drop = ()=>{
      setDropModal(!dropModal)
      setDropModalTwo(false)
  }
  
  const dropTwo = ()=>{
    setDropModalTwo(!dropmodalTwo)
    setDropModal(false)
  }

  const value = {
    allPost,
    setAllPost,
    drop,
    dropTwo,
    dropmodalTwo,
    dropModal,
  };



  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};


