import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import carti from "../Assets/cart-icon.png";
import order from "../Assets/order.png";
import "../Styles/Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
export default function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchButton = () => {
    navigate("/?keyword=" + keyword);
  };
  return (
    <>
      <header>
        <div className="logo-group">
          <Link to="/" className="logo-name">
            AG_Cart
          </Link>
          <div className="hr-rule1"></div>
        </div>

        <div className="search-box">
          <form>
            <span className="search">
              <input
                type="text"
                id="search_field"
                name="text"
                placeholder="  Search a product..."
                onChange={(e) => setKeyword(e.target.value)}
                onClick={searchButton}
                onBlur={searchButton}
              />

              <Button
                to="our-prd"
                smooth={true}
                offset={-0}
                duration={500}
                onClick={searchButton}
                className="search-icon"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  style={{ color: "#838891" }}
                />
              </Button>
            </span>
          </form>
        </div>

        <div className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>

        <div className="cart-icon">
          <Link to="/cart">
            <img src={carti} alt="" />
          </Link>
          <Link to="/order">
            <img src={order} alt="" />
          </Link>
        </div>
      </header>
    </>
  );
}
