"use client";

import React from "react";
import styles from "./Skills.module.css";
import Items from "./Skill_Items.jsx";
import { motion } from "framer-motion";
import "@/index.css";

function Skills({ skills }) {
  return (
    <div className={styles.container}>
      <div className={styles.tickerContainer}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className={styles.tickerContent}
        >
          {skills &&
            [...skills, ...skills].map((skill, i) => (
              <Items key={i} className={styles.skillItem} title={skill} />
            ))}
        </motion.div>
      </div>

      <hr className={styles.line} />

      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
    </div>
  );
}

export default Skills;
