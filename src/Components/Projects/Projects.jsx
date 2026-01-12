"use client";
import React, { useEffect, useState } from "react";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard.jsx";
import { getProjectsAction } from "@/features/projects/projectActions";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const result = await getProjectsAction();
      console.log(result);
      if (result.status === "success") setProjects(result.data);
    };
    getProjects();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cardArea}>
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            imageSource={project.image}
            title={project.name}
            toolStack={project.skills}
            githubLink={project.github}
            liveLink={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
