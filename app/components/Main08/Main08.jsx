"use client";

import { motion } from "framer-motion";
import React from "react";
import "./_main08.scss";

const Main08 = () => {
  return (
    <main className="main08">
      <div className="small-div">
        <h2>Ilmversity Integration</h2>
      </div>

      <section className="for-center-main08">
        <motion.div
          className="video-main08"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          // viewport={{ once: true }}
        >
          <iframe
            className="main08-iframe"
            src="https://www.youtube.com/embed/ZUa-HkrY_nI"
            title="Youtube"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          ;
        </motion.div>
        <motion.div
          className="text-main08"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p>
            Powering the Knowledge Continent with AI powered Academic
            Management: Through our partnership with Ilmversity, Da1Ilmverse
            brings forth a proven, school-tested Learning, Academic and
            Administrative Management System (LAAM) into the Metaverse,
            enriching every learning experience with real world educational
            rigor.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default Main08;
