import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-total-container">
      <div className="cart-total-title">
        <h1>CART TOTALS</h1>
      </div>
      <div className="cart-total-details">
        <div className="cart-total-row">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr className="cart-total-separator" />
        <div className="cart-total-row">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr className="cart-total-separator" />
        <div className="cart-total-row">
          <b className="cart-total-bold">Total</b>
          <b className="cart-total-bold">
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
