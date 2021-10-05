import React from "react";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <div className="logo">
        <span role="img" aria-label="dog">
          🐶
        </span>
        <span role="img" aria-label="cat">
          ❓
        </span>
        <span role="img" aria-label="cat">
          😺
        </span>
      </div>
    </header>
  );
}

export default Header;
