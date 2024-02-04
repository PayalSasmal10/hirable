import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./freelancerProfile.css";

export function FreelancerProfile() {
  const skillLists = [
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Redux",
    "Angular",
    "Vue.js",
    "Java",
    "Node.js",
    "Python",
    "Express.js",
    "Spring Boot",
    "Django",
    "Flask",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "React Native",
    "Flutter (Dart)",
    "Swift (iOS)",
    "Kotlin (Android)",
    "MERN Stack",
    "MEAN Stack",
    "LAMP Stack",
    "Django + React",
    "Flask + Vue.js",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jest",
    "Mocha",
    "Selenium",
    "Travis CI",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "RESTful API Design",
    "GraphQL",
    "Webpack",
    "NPM/Yarn",
  ];
  const [takeInput, setTakeInput] = useState("");
  const [selectSkills, setSelectSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  const onChangeHandler = (e) => {
    setTakeInput(e.target.value);
  };

  const showSelectedData = () => {
    if (takeInput.trim() !== "") {
      const data = skillLists.filter((skill) =>
        skill.toLowerCase().includes(takeInput.toLowerCase())
      );
      setFilteredSkills(data);
    } else {
      setFilteredSkills([]);
    }
  };

  useEffect(() => {
    showSelectedData();
  }, [takeInput]);

  return (
    <div className="">
      <input type="text" value={takeInput} onChange={onChangeHandler} />
      {filteredSkills.length > 0 &&
        filteredSkills.map((skill) => (
          <ul key={skill}>
            <li>{skill}</li>
          </ul>
        ))}
    </div>
  );
}
