import ProductCard from "../pages/ProductCard";
import "../Styles/Product.css";
import "../Styles/Home.css";
import { useSearchParams } from "react-router-dom";
import home1 from "../Assets/home-c1.jpg";
import home2 from "../Assets/home-c2.jpg";
import home3 from "../Assets/home-c3.jpg";
import home4 from "../Assets/home-c4.jpg";
import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useSearchParams("");
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/product?" + searchValue)
      .then((response) => response.json())
      .then((res) => setProduct(res.products));
  }, [searchValue]);
  return (
    <Fragment>
      <>
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

        <h6 id="prd" name="our-prd">
          Our Products
        </h6>
        <div className="container">
          {products.map((product) => (
            <ProductCard eachProduct={product} />
          ))}
        </div>
      </>
    </Fragment>
  );
}
