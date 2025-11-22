import React from "react";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({
  title,
  toolStack,
  imageSource,
  githubLink,
  liveLink,
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSource}
        height="281.483px"
        style={{ objectFit: "cover" }}
      />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.toolStack}>
        {toolStack.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className={styles.overlay}>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <p>VIEW PROJECT</p>
        </a>
        <p>VIEW CODE</p>
      </div>
    </div>
  );
};

export default ProjectCard;
