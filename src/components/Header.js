import React from "react";
import "./Header.css";

export const Header = ({ newGame }) => {
  return (
    <div id="header_container">
      <div className="header_title">
        <h1>Fichas</h1>
      </div>

      <div className="header_button">
        <button onClick={newGame}>New</button>
      </div>
    </div>
  );
};
