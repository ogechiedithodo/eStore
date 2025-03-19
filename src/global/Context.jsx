import axios from "axios";
import { useContext, useState, createContext } from "react";

const PostsContext = createContext();
export const usePost = () => useContext(PostsContext);

const baseUrl = 'https://colorlib.onrender.com/api/v1'


export const PostProvider = ({ children }) => {
  const [dropmodalTwo, setDropModalTwo]= useState(false)
   const [dropModal, setDropModal]=useState(false)
  const [allPost, setAllPost] = useState([]);
  const [addCart, setAddCart] = useState([])



  // const getAllProduct = async ()=>{
  //   try {
  //     const res = await axios.get(${baseUrl}/products)
      
  //   } catch (error) {
      
  //   }
  // }


  const addToCart = (item) => {
    setAddCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setAddCart((prevCart) => prevCart.filter(item => item.id !== item ));
  };

  // const clearCart = ()=>{
  //   setAddCart(addCart)
  // }
  
  const drop = ()=>{
      setDropModal(!dropModal)
      setDropModalTwo(false)
  }
  
  const dropTwo = ()=>{
    setDropModalTwo(!dropmodalTwo)
    setDropModal(false)
  }


  const allItems =[
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product6.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        tag:"New",
        price2: "$60.00"
    },
    {
        
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
      image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
        description:"Green Dress with Details",
        tag:"New",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png",
        description:"Green Dress with Details",
        tag:"New",
        price1: "$40.00",
        price2: "$60.00"
    }
  ]
  const value = {
    allPost,
    setAllPost,
    drop,
    dropTwo,
    dropmodalTwo,
    dropModal,
    addToCart,
    removeFromCart,
    allItems,
    addCart,
  };



  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};