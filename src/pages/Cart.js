import "../Styles/Cart.css";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Cart({ cartItems, setCartItem }) {
  const [complete, setComplete] = useState(false);

  function increaseQty(item) {
    if (item.product.stock === item.qty) {
      return;
    } else {
      const addValue = cartItems.map((eachValue) => {
        if (eachValue.product._id === item.product._id) {
          eachValue.qty++;
        }
        return eachValue;
      });
      setCartItem(addValue);
    }
  }

  function decreaseQty(item) {
    if (item.qty > 1) {
      const addValue = cartItems.map((eachValue) => {
        if (eachValue.product._id === item.product._id) {
          eachValue.qty--;
        }
        return eachValue;
      });
      setCartItem(addValue);
    }
  }

  function removeCartItem(item) {
    const addValue = cartItems.filter((i) => {
      console.log(i);
      if (i.product._id === item.product._id) {
        return false;
      } else return true;
    });
    setCartItem(addValue);
  }

  function orderHandler() {
    fetch(process.env.REACT_APP_API_URL + "/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    }).then(() => {
      setCartItem([]);
      setComplete(true);
      toast.success("Order Placed!!");
    });
  }

  return cartItems.length > 0 ? (
    <Fragment>
      <div className="cart">
        <div className="cart-column">
          <div className="cart-heading">
            <h5>Your Cart Items:</h5>
            <p>{cartItems.length}</p>
          </div>
          {cartItems.map((item) => (
            <Fragment>
              <div className="cart-list">
                <div className="cart-img">
                  <img src={item.product.image} alt="" />
                </div>
                <div className="cart-prd-name">
                  <h3>
                    {" "}
                    <Link to={"/" + item.product._id}>{item.product.name}</Link>
                  </h3>
                </div>
                <div className="cart-prd-price">
                  <p>₹{item.product.price}</p>
                </div>
                <div className="cart-prd-qty">
                  <button className="btn-red" onClick={() => decreaseQty(item)}>
                    -
                  </button>
                  <input type="number" className="" value={item.qty} readOnly />
                  <button
                    className="btn-blue"
                    onClick={() => increaseQty(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-delete">
                  <button
                    className="delete-btn"
                    onClick={() => removeCartItem(item)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="xl"
                      style={{ color: "red" }}
                    />
                  </button>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="cart-total">Total</div>
      </div>
    </Fragment>
  ) : !complete ? (
    <h1 className="empt-res">Your Cart Item is Empty</h1>
  ) : (
    <Fragment>
      <h1 className="succ-msg">Your order is placed successfully!!</h1>
    </Fragment>
  );
}
