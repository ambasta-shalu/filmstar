import React from "react";
import Logo from "./Logo";
import userAvatar from "../assests/user-avatar.png";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-contents">
        <Logo />
        <div className="nav-avatar">
          <img className="avatar" src={userAvatar} alt="User Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
