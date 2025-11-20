import React from "react";
import styles from "./Skill_Items.module.css";
const skill_items = ({ title, experience }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.experience}>{experience}2 Years Experience</p>
    </div>
  );
};

export default skill_items;
