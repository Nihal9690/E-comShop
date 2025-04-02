import React, { useEffect, useState , useMemo} from "react";
import UserContext from "./UserContext";
import { ToastContainer, toast } from "react-toastify";

const UserState = (props) => {
  const [allProduct, setAllProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [viewItem, setViewItem] = useState({});
  const[slick , setSlick] 
=useState([])


  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=0");
      const data = await res.json();
      setAllProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };



  const [images, setImages] = useState([
    {
      id: 1,
      title: "Shopping Fun",
      thumbnail: "https://img.freepik.com/free-photo/young-woman-shopping_23-2148578524.jpg?w=996&t=st=1711121115~exp=1711121715~hmac=d0e1733f5b14b5a0a57c45f139c351514e82a49e927d7b3dd1d345832b126c9f",
    },
    {
      id: 2,
      title: "Online Shopping Banner",
      thumbnail: "https://as2.ftcdn.net/v2/jpg/03/20/68/66/1000_F_320686681_TQZ2YZCoJtXAvD7MfeOAJN9hvXbIjUl4.jpg",
    },
    {
      id: 3,
      title: "Pink Shopping Bags",
      thumbnail: "https://as1.ftcdn.net/v2/jpg/03/55/12/37/1000_F_355123783_t6jvTCGJhHlRy4m0CqL0pSsd26BPu4TY.jpg",
    },
    {
      id: 4,
      title: "Happy Woman with Bags",
      thumbnail: "https://as1.ftcdn.net/v2/jpg/06/39/64/64/1000_F_639646452_dQbmXZVWrO4hUImVxd7LS2s6ILg09kHO.jpg",
    },
  ]);
  

  


//   const filteredCategory = allProduct.filter((item)=>item.category==='groceries')
//  const cartSlick = ()=>{
// if(!filteredCategory){
//   return "no";

// }else{
//   setSlick(filteredCategory)
// }

//  }

//  useEffect(()=>{
//   cartSlick()
//  },[])

const filteredCategory = useMemo(() => {
  return allProduct.filter((item) => item.category === "groceries");
}, [allProduct]);

// Update slick state when allProduct changes
useEffect(() => {
  if (filteredCategory.length > 0) {
    setSlick(filteredCategory);
  }
}, [filteredCategory]);

  useEffect(() => {
    fetchData();
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }

    const storedViewItem = localStorage.getItem("viewItem")
    if(storedViewItem){
      setViewItem(JSON.parse(storedViewItem))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("viewItem", JSON.stringify(viewItem));
  }, [viewItem]);
  

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);


  const memo = useMemo(() => {
    let sum = 0;
    for (let val of cartItem) {
      sum = sum + val.price*val.quantity
    }
    return sum;
  }, [cartItem]);

  const AddToCart = (item) => {
 
    const isAlreadyInCart = cartItem.find((cartProduct) => cartProduct.id === item.id);
    // object ko direct compaire nhi krte kuki usse unke address compare hote hai isliye obj ki id , title ya koi same key se compare karte hai ==> so item === cartProduct (is wrong) ,, item.id === cartProduct.id (is right way)---->
    item.quantity =1;
    if (isAlreadyInCart) {
      toast.warning("Already added to cart", { position: "top-center" });
    } else {
      toast.success("Item added successfully", { position: "top-center" });
      setCartItem([...cartItem,item]);
    }

    
  };

  const ViewCart = (item) => {
    setViewItem(item);
  };


 
  const removeCart = (index) => {
    const updatedCart = [...cartItem];
    updatedCart.splice(index, 1);
    setCartItem(updatedCart);
  };

 
  const handleIncrement = (i) => {
    const updatedCart = [...cartItem];
    updatedCart[i] = { ...updatedCart[i], quantity: updatedCart[i].quantity + 1 };

    updatedCart[i].price = updatedCart[i].price + (updatedCart[i].price / updatedCart[i].quantity)
    setCartItem(updatedCart);
  };

  const handleDecrement = (i) => {
    const updatedCart = [...cartItem];
    if (updatedCart[i].quantity > 1) {
      updatedCart[i].price = updatedCart[i].price - (updatedCart[i].price / updatedCart[i].quantity)
        updatedCart[i] = { ...updatedCart[i], quantity: updatedCart[i].quantity - 1 };
      
    } else {
      updatedCart.splice(i, 1);
    }
    setCartItem(updatedCart);
  };


  


  
  console.log(filteredCategory)







  return (
    <UserContext.Provider
    value={{
      allProduct,
      AddToCart,
      cartItem,
      ViewCart,
      viewItem,
      setCartItem,
      removeCart,
      handleIncrement,
      handleDecrement,
      memo,
      slick,
      images
     
    }}
    >
      {props.children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default UserState;
