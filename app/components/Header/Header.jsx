"use client";

import { motion } from "framer-motion";
import React from "react";
import "./_header.scss";
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import GradiantButton from "../GradiantButton/GradiantButton";

const Header = () => {
  return (
    <header className="header">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="header__video"
      >
        <source src="/videos/matrix.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="two-navbars">
        <Navbar1 />
        <br />
        <Navbar2 />
      </div>

      {/* Content on top of video */}

      <motion.div
        className="three-heading-tags"
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <h1>The Next Generation Digital Immersive World Is Here!</h1>
        <h2>Enter the Future with DaMeta1</h2>
        <h3>Redefining how you Learn, Work, and Play</h3>
      </motion.div>

      <motion.div
        className="gradiant-button"
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <GradiantButton text="Explore DaMeta1" />
      </motion.div>
    </header>
  );
};

export default Header;
