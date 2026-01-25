import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="tm-top-header">
      <div className="container">
        <div className="tm-top-header-inner">

          {/* LOGO */}
          <div className="tm-logo-container">
            <img
              src="/img/logo.png"
              alt="Cafe House Logo"
              className="tm-site-logo"
            />
            <h1 className="tm-site-name tm-handwriting-font">
              Cafe House
            </h1>
          </div>

          {/* MOBILE ICON */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa fa-bars" />
          </div>

          {/* NAVIGATION */}
          <nav className={`tm-nav ${menuOpen ? "open" : ""}`}>
            <ul onClick={() => setMenuOpen(false)}>
              <li>
                <NavLink
                  to="/"
                  className={
                    location.pathname === "/" ||
                    location.pathname.startsWith("/menuitem")
                      ? "active"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              {!isLoggedIn && (
                <li>
                  <NavLink to="/authentication">Login</NavLink>
                </li>
              )}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
