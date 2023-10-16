import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header_container">
      <div className="header_title">
        <h1>Fichas</h1>
      </div>
      <div className="header_button">
        <button>New</button>
      </div>
    </div>
  );
};
