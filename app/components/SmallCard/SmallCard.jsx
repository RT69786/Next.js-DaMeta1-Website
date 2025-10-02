"use client";

import { motion } from "framer-motion";

import React from "react";
import "./_smallcard.scss";

const SmallCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="small-card"
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      // viewport={{ once: true }}
    >
      <img className="chair-pic" src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default SmallCard;
