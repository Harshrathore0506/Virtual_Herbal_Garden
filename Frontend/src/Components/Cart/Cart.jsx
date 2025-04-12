import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import CartTotal from "../CartTotal/CartTotal";
import bin from "../../assets/bin.png";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const { navigate, products, cartItems, setCartItems, updateQuantity } =
    useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="cart-container">
      <h1>PLACE PLANTS</h1>
      <div className="cart-flex">
        <div className="items">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return productData ? (
              <div className="cart-item" key={index}>
                <img
                  src={productData.Image}
                  alt="Plant"
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{productData.Name}</h3>
                  <p className="discounted-price">₹{productData.price}</p>
                </div>
                <div className="quantity-section">
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="quantity-input"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="bin"
                    src={bin}
                    alt=""
                  />
                </div>
              </div>
            ) : null;
          })}
        </div>

        {/* Price Details Section */}
        <CartTotal />
      </div>
      <button
        onClick={() => navigate("/PlaceOrder")}
        className="place-order-btn"
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;
