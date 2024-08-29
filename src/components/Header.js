import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import "../Styles/Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
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
            AG Cart
          </Link>
          <div className="hr-rule1"></div>
        </div>

        <div className="search-box">
          <span className="search">
            <input
              type="text"
              id="search_field"
              name="text"
              placeholder="  Search a product..."
              onChange={(e) => setKeyword(e.target.value)}
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
        </div>

        <div className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>

        <div className="cart-icon">
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              style={{ color: "#838891" }}
            />
          </Link>
        </div>
      </header>
    </>
  );
}
