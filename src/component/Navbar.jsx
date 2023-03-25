import React from "react";
import Logo from "./Logo";
import userAvatar from "../assests/user-avatar.png";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleAvatarClick = function () {
    navigate("/profile");
  };

  return (
    <div className="navbar">
      <div className="nav-contents">
        <Logo />
        <div className="nav-avatar" onClick={handleAvatarClick}>
          <img className="avatar" src={userAvatar} alt="User Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
