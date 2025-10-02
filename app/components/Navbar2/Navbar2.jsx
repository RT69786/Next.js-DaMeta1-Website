import React from "react";
import "./_navbar2.scss";
import Button from "../Button/Button";

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <div className="img-anchor">
        <a href="#home"><span data-text="Home">Home</span></a>
        <a href="#about"><span data-text="About">About</span></a>
        <img src="/pics/logo.png" alt="logo" />
        <a href="#vision"><span data-text="Vision">Vision</span></a>
        <a href="#blogs"><span data-text="Blogs">Blogs</span></a>
      </div>

      <div className="small-button">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar2;
