import { Button } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <nav className="nav row">
            <Link className="navbar-brand" to="/">
              Shopping
            </Link>
            <div className="">
              <ul className="navbar">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
