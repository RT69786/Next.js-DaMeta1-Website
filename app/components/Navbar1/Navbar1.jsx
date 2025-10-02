import React from "react";
import "./_navbar1.scss";

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <section className="for-center-navbar1">
        <ul className="three-icons">
          <li>
            <i className="ri-facebook-fill"></i>
          </li>
          <li>
            <i className="ri-twitter-x-line"></i>
          </li>
          <li>
            <i className="ri-youtube-line"></i>
          </li>
        </ul>

        <img src="/pics/logo.png" alt="logo" />

        <ul className="one-burger-effect">
          <li>
            <i className="ri-menu-3-line"></i>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar1;
