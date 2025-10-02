"use client";

import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup"; // 👈 Ensure this is installed: npm install react-countup
import "./_main02.scss";

const Main02 = () => {
  const transitionSettings = { duration: 0.5, ease: "easeOut" };

  // Component to wrap the CountUp logic
  const AnimatedNumber = ({ end, suffix = "", duration, delay = 0 }) => (
    <h2 className="count-up-number">
      <CountUp
        start={0} // Always start from 0 for the animation
        end={end}
        duration={duration} // Controls the speed (3 seconds is slow)
        separator=","
        suffix={suffix}
        delay={delay}
        // KEY SETTINGS FOR REPEAT ON SCROLL
        enableScrollSpy={true} // Triggers when entering the viewport
        scrollSpyOnce={false} // 👈 Setting this to FALSE makes it repeat on every scroll into view
      />
    </h2>
  );

  return (
    <main className="main02">
      <div className="one-h2">
        <h2>Our First MVP Impact</h2>
      </div>

      <section className="for-center-main02">
        <div className="handling-two-divs">
          <div className="div-one">
            {/* Institutes */}
            <motion.ul
              className="ul-one"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ...transitionSettings, delay: 0 }}
              // viewport={{ once: true }} // Framer Motion entrance animation only plays once
            >
              <li>
                <AnimatedNumber end={400} suffix="+" duration={6} delay={0.1} />
              </li>
              <li>
                <p>Institutes</p>
              </li>
            </motion.ul>

            {/* Continents Live */}
            <motion.ul
              className="ul-two"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ...transitionSettings, delay: 0.2 }}
              // viewport={{ once: true }}
            >
              <li>
                <AnimatedNumber end={2} duration={6} delay={0.2} />
              </li>
              <li>
                <p>Continents Live</p>
              </li>
            </motion.ul>
          </div>

          <div className="div-two">
            {/* Users */}
            <motion.ul
              className="ul-three"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ...transitionSettings, delay: 0.1 }}
              // viewport={{ once: true }}
            >
              <li>
                <AnimatedNumber end={500000} duration={6} delay={0.1} />
              </li>
              <li>
                <p>Users</p>
              </li>
            </motion.ul>

            {/* Students */}
            <motion.ul
              className="ul-four"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ...transitionSettings, delay: 0.3 }}
              // viewport={{ once: true }}
            >
              <li>
                <AnimatedNumber
                  end={400000}
                  suffix="+"
                  duration={6}
                  delay={0.2}
                />
              </li>
              <li>
                <p>Students</p>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main02;
