"use client";

import { motion } from "framer-motion";

import React from "react";
import "./_main06.scss";

const Main06 = () => {
  return (
    <main className="main06">
      <section className="for-center-main06">
        <div className="div-one">
          <motion.ul
            className="ul-one"
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            // viewport={{ once: true }}
          >
            <img src="/pics/pic11.png" alt="pic11" />
            <h3>Creator Economy</h3>
            <p>
              Build, share, and monetize your ideas in a space designed for
              developers and digital pioneers.
            </p>
          </motion.ul>

          <motion.ul
            className="ul-two"
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            // viewport={{ once: true }}
          >
            <img src="/pics/pic6.png" alt="pic6" />
            <h3>Virtual Real Estate</h3>
            <p>
              Buy, lease, or showcase Blockchain backed properties with long
              term value in an ever expanding digital economy.
            </p>
          </motion.ul>

          <motion.ul
            className="ul-three"
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            // viewport={{ once: true }}
          >
            <img src="/pics/pic7.png" alt="pic7" />
            <h3>Gaming Tournaments</h3>
            <p>
              Join global competitions, earn rewards, and experience play to
              earn like never before.
            </p>
          </motion.ul>
        </div>
        <div className="div-two">
          <motion.ul
            className="ul-four"
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            // viewport={{ once: true }}
          >
            <img src="/pics/pic10.png" alt="pic10" />
            <h3>Immersive Learning</h3>
            <p>
              Step into the future of education with VR classrooms and
              AI-personalized learning paths.
            </p>
          </motion.ul>

          <motion.ul
            className="ul-five"
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            // viewport={{ once: true }}
          >
            <img src="/pics/pic9.png" alt="pic9" />
            <h3>Innovation Labs</h3>
            <p>
              Explore AI, Blockchain and digital real estate through community
              driven labs and experimental zones.
            </p>
          </motion.ul>

          <motion.ul
            className="ul-six"
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            // viewport={{ once: true }}
          >
            <img src="/pics/pic8.png" alt="pic8" />
            <h3>AI-Driven Communication</h3>
            <p>
              Master business networking and leadership with intelligent, real
              time coaching in virtual environments.
            </p>
          </motion.ul>
        </div>
      </section>
    </main>
  );
};

export default Main06;
