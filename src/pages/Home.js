import { Link } from "react-router-dom";
import "../Styles/Product.css";
import "../Styles/Home.css";
import p1 from "../Assets/p2.png";
import home1 from "../Assets/home-c1.jpg";
import home2 from "../Assets/home-c2.jpg";
import home3 from "../Assets/home-c3.jpg";
import home4 from "../Assets/home-c4.jpg";
export default function Home() {
  return (
    <>


      <div className="home">
        <div class="slider">
          <figure>
            <div class="slide">
              <img src={home1} alt="" />
            </div>
            <div class="slide">
              <img src={home2} alt="" />
            </div>
            <div class="slide">
              <img src={home3} alt="" />
            </div>
            <div class="slide">
              <img src={home4} alt="" />
            </div>
          </figure>
        </div>
      </div>
      <h6 id="prd">Our Products</h6>
      <div className="container">
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="img-box">
              <img src={p1} />
            </div>
            <div className="detail">
              <div className="info">
                <h3>Shirt</h3>
                <p>₹ 152</p>
              </div>
              <div className="brand-button">
                <p>Nike</p>
                <Link to='/prod-detail' class="button" >
                  View Product
                  <div class="hoverEffect">
                    <div></div>
                  </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
