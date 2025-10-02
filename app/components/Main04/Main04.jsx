"use client";

import { motion } from "framer-motion";

import React from "react";
import "./_main04.scss";
import Button2 from "../Button2/Button2";

const Main04 = () => {
  return (
    <main className="main04">
      <section className="for-center-main04">
        <div className="div-one">
          <motion.ul
            className="ul-one"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // viewport={{ once: true }}
          >
            <li>
              <img src="/pics/pic1.jpg" alt="pic1" />
            </li>

            <ul className="inner-ul-one">
              <li>
                <h2>Bussiness Bay - Live</h2>
              </li>
              <li>
                <p>
                  The Global Digital Economy Hub The first ever virtual real
                  estate ecosystem where you can rent, buy or showcase
                  properties in a digital world.
                </p>
              </li>
              <li>
                <div className="button1">
                  <Button2 />
                </div>
              </li>
            </ul>
          </motion.ul>

          <motion.ul
            className="ul-two"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            // viewport={{ once: true }}
          >
            <li>
              <img src="/pics/pic2.jpg" alt="pic2" />
            </li>

            <ul className="inner-ul-two">
              <li>
                <h2>Da1ilmverse -Live</h2>
              </li>
              <li>
                <p>
                  The Future of Learning AI empowered virtual classrooms,
                  personalized learning and smart learning environments.
                </p>
              </li>
              <li>
                <div className="button2">
                  <Button2 />
                </div>
              </li>
            </ul>
          </motion.ul>

          <motion.ul
            className="ul-three"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            // viewport={{ once: true }}
          >
            <li>
              <img src="/pics/pic3.jpg" alt="pic3" />
            </li>

            <ul className="inner-ul-three">
              <li>
                <h2>Eureka - Coming Soon</h2>
              </li>
              <li>
                <p>
                  The Creator’s Innovation Hub A digital lab for innovators,
                  developers, and content creatore to collaborate and push the
                  boundaries of Metaverse and AI technology
                </p>
              </li>
              <li>
                <div className="button3">
                  <Button2 />
                </div>
              </li>
            </ul>
          </motion.ul>
        </div>
        <div className="div-two">
          <motion.ul
            className="ul-four"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            // viewport={{ once: true }}
          >
            <li>
              <img src="/pics/pic4.jpg" alt="pic4" />
            </li>

            <ul className="inner-ul-four">
              <li>
                <h2>Gameaholic - Coming Soon</h2>
              </li>
              <li>
                <p>
                  The Ultimate Gaming Universe Experience play to earn gaming
                  opportunities, immersive E-Sports arenas, and user generated
                  adventures.
                </p>
              </li>
              <li>
                <div className="button4">
                  <Button2 />
                </div>
              </li>
            </ul>
          </motion.ul>

          <motion.ul
            className="ul-five"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            // viewport={{ once: true }}
          >
            <li>
              <img src="/pics/pic5.jpg" alt="pic5" />
            </li>

            <ul className="inner-ul-five">
              <li>
                <h2>Dope - Coming Soon</h2>
              </li>
              <li>
                <p>
                  The Entertainment & Sports Capital The ultimate hotspot for
                  live concerts, digital cinemas and immersive musical events.
                </p>
              </li>
              <li>
                <div className="button5">
                  <Button2 />
                </div>
              </li>
            </ul>
          </motion.ul>
        </div>
      </section>
    </main>
  );
};

export default Main04;
