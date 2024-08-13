import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
export default function Header() {
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
          <Link to="/product">Products</Link>

          <Link to="/about">AboutUs</Link>

          <span className="search">
            <input
              type="text"            
              className="search-input"
              name="text"  placeholder="Type..."
            />
          
            <div className="search-icon">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                style={{ color: "#838891" }}
              />
            </div>
          </span>

          <div className="cart-icon">
            
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              style={{ color: "#838891" }}
            />
          </div>

          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </header>
    </>
  );
}
