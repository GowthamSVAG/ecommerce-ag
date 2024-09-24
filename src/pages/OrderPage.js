import { useState, useEffect, Fragment } from "react";
import "../Styles/OrderPage.css";
import { Link } from "react-router-dom";

export default function OrderPage() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/order-list")
      .then((response) => response.json())
      .then((res) => setOrder(res.order));
  }, []);

  return (
    <div className="order-page">
      <h1>Order Page</h1>
      {order.map((ord) => (
        <div key={ord._id} className="order-container">
          {/* <h6>Status: {ord.status}</h6>   */}
          {/* <h5>Order Amount: ${ord.amount}</h5> */}
          <div className="order-items">
            {ord.orderItems.map((item) => (
              <div className="ord-list">
                <div className="ord-img">
                  <img src={item.product.image} alt="" />
                </div>
                <div className="ord-prd-name">
                  <h3>
                    <Link to={"/prod-detail/" + item.product._id}>
                      {item.product.name}
                    </Link>
                  </h3>
                </div>
                <div className="ord-prd-price">
                  <p>₹{item.product.price}</p>
                </div>
                <div className="ord-status">
                <h6>Status: {ord.status}</h6>
                </div>
                <div className="tot-amt"><h6>{ord.amount}</h6></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
