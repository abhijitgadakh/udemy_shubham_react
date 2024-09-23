import React from "react";
import "./header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="" className="logo" />
    </div>
  );
};

export default Header;
