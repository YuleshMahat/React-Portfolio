import React, { useState, useEffect } from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  // State to hold API data, with default values matching your static content
  const [mainInfo, setMainInfo] = useState({
    title: "Nice to meet you!",
    name: "Yulesh Mahat",
    role: "A software Engineer",
    info: "Based in Sydney, I'm a fullstack developer that actually solves real-life problems.",
  });

  return (
    <div className={styles.container}>
      <img src="/Assets/images/profile.jpeg" className={styles.profileImg} />
      <div className={styles.secondContainer}>
        <h1 className={styles.title}>
          {mainInfo.title}
          <br />
          I'm <span>{mainInfo.name}</span>
          <br />
          {mainInfo.role}
        </h1>
        <p className={styles.info}>{mainInfo.info}</p>
        <div className={styles.contactButton}>
          <a href="#contact">CONTACT ME</a>
        </div>
        <hr className={styles.line} />
      </div>
      <img src="/Assets/images/pattern-rings.svg" alt="rings" />
      <img src="/Assets/images/pattern-circle.svg" alt="circle" />
    </div>
  );
};

export default Intro;
