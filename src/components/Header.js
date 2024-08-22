import { Link } from "react-router-dom";
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

        <div className="nav-list">
          <Link to="/">Home</Link>

          <Link to="/about">AboutUs</Link>

          <span className="search">
            <input
              type="text"
              id="search_field"
              className="search-input"
              name="text"
              placeholder="Type..."
              onChange={(e) => setKeyword(e.target.value)}
              onBlur={searchButton}
            />

            <button onClick={searchButton} className="search-icon">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                style={{ color: "#838891" }}
              />
            </button>
          </span>

          <div className="cart-icon">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="lg"
                style={{ color: "#838891" }}
              />
            </Link>
          </div>

          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </header>
    </>
  );
}
