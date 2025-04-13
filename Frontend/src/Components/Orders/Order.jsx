import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css"; // Import CSS file
import { ShopContext } from "../../Context/ShopContext";

const Order = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItem = response.data.orders.flatMap((order) =>
          order.items.map((item) => ({
            ...item,
            status: order.status,
            payment: order.payment,
            paymentMethod: order.paymentMethod,
            date: order.date,
          }))
        );
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (
    <div className="order-container">
      <div className="order-title">
        <h1>MY ORDERS</h1>
      </div>

      {orderData.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        orderData.map((item, index) => (
          <div key={index} className="order-item">
            <div className="order-details">
              <img className="order-image" src={item.Image} alt={item.Name} />
              <div>
                <p className="order-name">{item.Name}</p>
                <div className="order-info">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p>
                  Date:{" "}
                  <span className="order-text">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p>
                  Payment:{" "}
                  <span className="order-text">{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className="order-status-container">
              <div className="order-status">
                <span className="status-indicator"></span>
                <p>{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="track-button">
                Track Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
