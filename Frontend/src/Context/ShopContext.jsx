import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext(); // Named export
import axios from "axios";
import { toast } from "react-toastify";

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const currency = "₹";
  const delivery_fee = 10;
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({}); //Empty Object
  const [products, setProducts] = useState([]);

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems); //Create Copy of Cart Item

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backendUrl + "/cart/add",
          { itemId, size },
          { headers: { token } }
        );
        toast.success("Item added to cart");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error + "Heelo");
      toast.error(error.message);
    }
  };

  const getProductData = async () => {
    try {
      const plant1 = await axios.get(backendUrl + "/cardiovascular-herbs");
      const plant2 = await axios.get(backendUrl + "/skin-herbs");
      const plant3 = await axios.get(backendUrl + "/digestion-herbs");
      const plant4 = await axios.get(backendUrl + "/respiratory-herbs");
      const plant5 = await axios.get(backendUrl + "/nervous-herbs");
      const plant6 = await axios.get(backendUrl + "/immune-herbs");

      setProducts([
        ...plant1.data,
        ...plant2.data,
        ...plant3.data,
        ...plant4.data,
        ...plant5.data,
        ...plant6.data,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    setCartItems,
    backendUrl,
    navigate,
    token,
    setToken,
    addToCart,
    getCartAmount,
    getCartCount,
    updateQuantity,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider; // Named export
