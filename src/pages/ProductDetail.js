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
            <div className="rating">Rating</div>
            <div className="price">
              <h3>Price: </h3>
              <h4>$254</h4>
            </div>
            <div className="status">
              <h3>In Stock: </h3>
              <h4>35</h4>
            </div>
            <div className="prd-detail">
              <h3>Product Descrption</h3>
              <p>
                OPPO F21s Pro 5G is a powerful device with a RAM extension
                feature, that offers brilliant operational speed to users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
