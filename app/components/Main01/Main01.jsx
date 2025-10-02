"use client";

import { motion } from "framer-motion";
import React from "react";
import "./_main01.scss";

const Main01 = () => {
  return (
    <main className="main01">
      <section className="for-center-main01">
        {/* 👇 div-one animates when user scrolls to it */}
        <motion.div
          className="div-one"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // viewport={{ once: true }}
          // remove "once: true" if you want it to play every time it's scrolled into view
        >
          <h2>What is DaMeta1?</h2>
          <ul className="paragraphs-ul">
            <li>
              <p>Take that first step towards a connected digital world</p>
            </li>
            <li>
              <p>
                It’s where the virtual and physical world converge to unleash a
                new era or possibilities. Backed by cutting edge technologies
                like AI, Blockchain and RealTech, DaMeta1 is designed as a
                thriving digital ecosystem that mirrors the complexity and
                vibrance of real life but unlimited scalability.
              </p>
            </li>
            <li>
              <p>
                At its core, DaMeta1 is structured around 5 interconnected
                continents, each tailored to meet the needs of a modern digital
                society.
              </p>
            </li>
          </ul>
        </motion.div>

        <div className="div-two">
          <motion.img
            src="/pics/Background2.jpg" alt="background2"
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            //  viewport={{ once: true }}
          >
           
          </motion.img>
        </div>
      </section>

      <img className="big-circle" src="/pics/bigcircle.png" alt="big circle" />
      <img className="circle1" src="/pics/circle1.png" alt="circle" />
      <img className="circle2" src="/pics/circle2.png" alt="circle" />
      <img className="circle3" src="/pics/circle3.png" alt="circle" />
      <img className="circle4" src="/pics/circle4.png" alt="circle" />
      <img className="circle5" src="/pics/circle5.png" alt="circle" />
    </main>
  );
};

export default Main01;
