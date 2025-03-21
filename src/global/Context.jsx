
import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";
import { Await } from "react-router-dom";

const PostsContext = createContext();
export const usePost = () => useContext(PostsContext);


export const PostProvider = ({ children }) => {

  const [dropmodalTwo, setDropModalTwo]= useState(false)
  const [dropModal, setDropModal]=useState(false)
  const [allPost, setAllPost] = useState([]);
  const [addCart, setAddCart] = useState([])
  
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
  // const allItems =[
  //   {
  //       image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png",
  //       description:"Green Dress with Details",
  //       price1: "$40.00",
  //       tag:"New",
  //       price2: "$60.00"
  //   },
  //   {
  //       image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
  //       description:"Green Dress with Details",
  //       price1: "$40.00",
        
  //       price2: "$60.00"
  //   },
  //   {
  //       image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png",
  //       description:"Green Dress with Details",
  //       tag:"New",
  //       price1: "$40.00",
  //       price2: "$60.00"
  //   },
  //   {
  //       image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product6.png",
  //       description:"Green Dress with Details",
  //       price1: "$40.00",
  //       price2: "$60.00"
  //   },
  //   {
  //       image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png",
  //       description:"Green Dress with Details",
  //       price1: "$40.00",
  //       price2: "$60.00"
  //   },
  //   {
  //       image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png",
  //       description:"Green Dress with Details",
  //       tag:"New",
  //       price1: "$40.00",
  //       price2: "$60.00"
  //   }
  // ]

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

  };



  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};


