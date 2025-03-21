

import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";



const PostsContext = createContext();
export const usePost = () => useContext(PostsContext);

const baseUrl = 'https://colorlib.onrender.com/api/v1'


export const PostProvider = ({ children }) => {
  const [dropmodalTwo, setDropModalTwo]= useState(false)
  const [dropModal, setDropModal]=useState(false)
  const [allPost, setAllPost] = useState([]);
  const [addCart, setAddCart] = useState([])







  const addToCart = (item) => {
    setAddCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setAddCart((prevCart) => prevCart.filter(item => item.id !== item ));
  };


  
  const drop = ()=>{
      setDropModal(!dropModal)
      setDropModalTwo(false)
  }




  const addToCart = (items) =>{
    const id = items._id;
    const anything = 'quantity'
    if (addCart.find((item)=>item._id === id)) {
      addCart.map((int)=>{
        if(int._id === id){
          int = {...int, [anything]:int.quantity++}
          return int
        }else{
          return
        }
      })
    } else {
    setAddCart([...addCart, {...items,[anything]:1}])  
    }
  }
  console.log(addCart)
  
 const increaseQ =()=> {

 }
  
  const dropTwo = ()=>{
    setDropModalTwo(!dropmodalTwo)
    setDropModal(false)
  }


  const baseUrl = 'https://colorlib.onrender.com/api/v1'

  const getAllProduct = async (setProduct)=>{
    try {
      const res = await axios.get(`${baseUrl}/products`)
      setProduct(res.data.data)
      // console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [allProduct, setAllProduct] = useState([])

  useEffect(()=>{
    getAllProduct(setAllProduct)
  },[])

  


  
  const value = {
    allPost,
    setAllPost,
    drop,
    dropTwo,
    dropmodalTwo,
    dropModal,
    setAllProduct,
    allProduct,
    getAllProduct,
    setAddCart,
    addToCart,
    addCart,
    removeFromCart,
    allItems,
  };



  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};