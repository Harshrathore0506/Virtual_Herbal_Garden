import React, { useContext, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import "./PlaceOrder.css";
import { ShopContext } from "../../Context/ShopContext";
import CartTotal from "../CartTotal/CartTotal";
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    cartItems,
    token,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="place-order-form">
      {/* Left Side - Delivery Information */}
      <div className="delivery-section">
        <div className="">
          <h1>DELIVERY INFORMATION</h1>
        </div>
        <div className="input-group">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="FIRST NAME"
            required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="LAST NAME"
            required
          />
        </div>
        <div className="input-group">
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="EMAIL ADDRESS"
            required
          />
        </div>
        <div className="input-group">
          <input
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            type="text"
            placeholder="STREET"
            required
          />
        </div>
        <div className="input-group">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="CITY"
            required
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            type="text"
            placeholder="STATE"
            required
          />
        </div>
        <div className="input-group">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="text"
            placeholder="ZIPCODE"
            required
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="COUNTRY"
            required
          />
        </div>
        <div>
          <input
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            type="tel"
            placeholder="PHONE"
            required
          />
        </div>
      </div>

      {/* Right Side - Cart & Payment */}
      <div className="right-section">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <h1>PAYMENT METHOD </h1>
          {/* Payment Method Selection */}
          <div className="payment-methods">
            <div
              onClick={() => setMethod("cod")}
              className={`payment-option ${
                method === "cod" ? "selected-method" : ""
              }`}
            >
              <p className="min-w-3.5 h-3.5 border rounded-full"></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end">
            <button type="submit" className="place-order-btn">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
