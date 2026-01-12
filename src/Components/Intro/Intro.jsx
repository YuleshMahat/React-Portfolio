import React, { useState } from "react";
import styles from "./Intro.module.css";
import { motion } from "framer-motion";

const Intro = () => {
  const line1 = "Nice to meet you!";
  const line2 = "I'm Yulesh Mahat";
  const line3 = "A Software Engineer";
  const line4 =
    "Based in Sydney, I'm a fullstack developer who loves solving problems.";

  const renderAnimatedText = (text, startDelay = 0, underlineWords = []) => {
    const words = text.split(" ");
    let charIndex = 0;

    return words.map((word, wordIndex) => {
      const shouldUnderline = underlineWords.includes(word);
      const wordChars = [...word].map((letter, i) => {
        const currentIndex = charIndex++;
        return (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (startDelay + currentIndex) * 0.05 }}
          >
            {letter}
          </motion.span>
        );
      });

      if (wordIndex < words.length - 1) {
        charIndex++;
      }

      return (
        <React.Fragment key={wordIndex}>
          <span className={shouldUnderline ? styles.textUnderline : ""}>
            {wordChars}
          </span>
          {wordIndex < words.length - 1 && " "}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={styles.container}>
      <img src="/Assets/images/profile.jpeg" className={styles.profileImg} />
      <div className={styles.secondContainer}>
        <p className={styles.title}>{renderAnimatedText(line1, 0)}</p>
        <p className={styles.title}>
          {renderAnimatedText(line2, line1.length, ["Yulesh", "Mahat"])}
        </p>
        <p className={styles.title}>
          {renderAnimatedText(line3, line1.length + line2.length, [
            "Software",
            "Engineer",
          ])}
        </p>
        <p className={styles.smallInformation}>{line4}</p>

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
