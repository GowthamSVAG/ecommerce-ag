import { Link } from "react-router-dom";
import "../Styles/Product.css";
export default function ProductCard({ eachProduct }) {
  return (
    // <div className="container">
    // </div>
    <div className="box">
      <div className="content">
        <div className="img-box">
          <img src={eachProduct.image} />
        </div>
        <div className="detail">
          <div className="info">
            <h3>{eachProduct.name}</h3>
            <p>₹{eachProduct.price} </p>
          </div>
          <div className="brand-button">
            <p>{eachProduct.seller}</p>
            <Link to={'/prod-detail/'+eachProduct._id} class="button">
              View Product
              <div class="hoverEffect">
                <div></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
