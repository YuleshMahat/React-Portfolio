"use client";

import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import Items from "./Skill_Items.jsx";
import { fetchSkillsAction } from "@/features/skills/skillsActions";
import { motion } from "framer-motion";
import "@/index.css";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      const result = await fetchSkillsAction();
      if (result.status === "success") setSkills(result.data);
      else setError("An error occured");
      setLoading(false);
    };
    fetchSkills();
  }, []);

  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.spinnerOverlay}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
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
            {[...skills, ...skills].map((skill, i) => (
              <Items key={i} className={styles.skillItem} title={skill} />
            ))}
          </motion.div>
        </div>
      )}

      <hr className={styles.line} />

      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
    </div>
  );
}

export default Skills;
