import "../Styles/ProductDetail.css";
export default function ProductDetail() {
  return (
    <>
      <div className="product-detail">
        <div className="card">
          <div className="img">
            <img
              src="https://img.freepik.com/premium-photo/climbing-shoes-adventurers-with-advanced-grip-tech-s-footwear-fashion-isolated-design-cyber_655090-3392321.jpg?uid=R135886057&ga=GA1.1.1721391294.1723280839&semt=ais_hybrid"
              alt=""
            />
          </div>

          <div className="prd-details">
            <div className="brand">
              <h3>Nike</h3>
            </div>
            <div className="prd-name">
              <h3>Sports Shoe</h3>
            </div>
            
            <div class="star-rating">
                <span className="star" >
                  &#9733;
                </span>
                <span className="star" >
                  &#9733;
                </span>
                <span className="star" >
                  &#9733;
                </span>
                <span className="star" >
                  &#9733;
                </span>
                <span className="star" >
                  &#9733;
                </span>
            </div>
            
            <div className="price">
              <h3>
                Price:<h4>$254</h4>
              </h3>
            </div>
            <div className="stock">
              <h3>
                In Stock: <h4>35</h4>
              </h3>
            </div>
            <div className="prd-qty">
              <h3 className="qty-count"> Quantity: </h3>
              <button className="btn-blue">+</button>
              <h3>3</h3>
              <button className="btn-red">-</button>
            </div>
            <div className="prd-detail">
              <h3>Product Description</h3>
              <p>
                OPPO F21s Pro 5G is a powerful device with a RAM extension
                feature, that offers brilliant operational speed to users.
              </p>
            </div>
            <button className="buy-now-btn"> 🛒 Buy Now⚡</button>
          </div>
        </div>
      </div>
    </>
  );
}
