import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useAuth } from "../../context/Auth";

function Header() {
  const [auth,setAuth] = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Navbar Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <FaShoppingBag className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
            <span>eCommerce App</span>
          </Link>
          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categories" className="nav-link">
                  Category
                </NavLink>
              </li>
             {!auth.user ? (<>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              </>):(<> <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Logout
                </NavLink>
              </li>
             </>)}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
