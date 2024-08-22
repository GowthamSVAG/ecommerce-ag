import "../Styles/ProductDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function ProductDetail({ cartItems, setCartItem }) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/product/" + id)
      .then((response) => response.json())
      .then(function (res) {
        setProduct(res.singleProduct);
      });
  }, []);

  function cartHandler() {
    const itemExist = cartItems.find((item) => item.product._id == product._id);
    if (!itemExist) {
      toast.success("Product is added successfully");
      const newItem = { qty, product };
      setCartItem((add) => [...add, newItem]);
    }
  }

  function increaseQty() {
    if (product.stock == qty) {
      return;
    }
    setQty((qty) => qty + 1);
  }

  function decreaseQty() {
    if (qty > 1) {
      return setQty((qty) => qty - 1);
    }
  }

  return (
    <>
      <div className="product-detail">
        <div className="card">
          <div className="img">
            <img src={product.image} alt="" />
          </div>

          <div className="prd-details">
            <div className="brand">
              <h3>{product.seller}</h3>
            </div>
            <div className="prd-name">
              <h3>{product.name}</h3>
            </div>

            <div class="star-rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>

            <div className="price">
              <h3>
                Price:<h4>₹{product.price}</h4>
              </h3>
            </div>
            <div className="stock">
              <h3>
                In Stock: <h4>{product.stock}</h4>
              </h3>
            </div>
            <div className="prd-qty">
              <h3 className="qty-count"> Quantity: </h3>
              <button className="btn-red"onClick={decreaseQty}>-</button>
               <input type="number" value={qty} readOnly />
              <button className="btn-blue" onClick={increaseQty}>+</button>
            </div>
            <div className="prd-detail">
              <h3>Product Description</h3>
              <p>
              {product.description}
              </p>
            </div>
            <button className="buy-now-btn" onClick={cartHandler} disabled={product.stock==0}> 🛒 Buy Now⚡</button>
          </div>
        </div>
      </div>
    </>
  );
}
