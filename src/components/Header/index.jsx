import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <div className="header">
        <NavLink to="/">
          <img src="./images/elsa.svg" alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
