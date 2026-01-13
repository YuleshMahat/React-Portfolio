import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Intro from "../Intro/Intro.jsx";
import styles from "./App.module.css";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import { fetchSkillsAction } from "@/features/skills/skillsActions.js";

const App = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const result = await fetchSkillsAction();
      console.log(result);
      if (result.status === "success") setSkills(result.data);
      setLoading(false);
    };
    fetchSkills();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loadingScreen}>
          <h1>
            Loading<span className={styles.dots}></span>
          </h1>
        </div>
      ) : (
        <div>
          <div className={styles.container1}>
            <NavBar />
            <Intro />
            <Skills skills={skills} />
            <Projects />
          </div>
          <div className={styles.container2}>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
