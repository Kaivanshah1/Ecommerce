import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="outer">
      <div className="topp">
        <div className="shop"></div>
        <Link to={"/home"} className="nav-link">
          Home
        </Link>
        <Link to={"/category"} className="nav-link">
          Products
        </Link>
        <Link to={"/cart"} className="nav-link">
          Cart
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
