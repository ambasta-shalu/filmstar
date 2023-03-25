import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Logo.css";

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = function () {
    navigate("/");
  };

  return (
    <div className="logo">
      <h1 className="logo-title" onClick={handleLogoClick}>
        Filmstar
      </h1>
    </div>
  );
}

export default Logo;
