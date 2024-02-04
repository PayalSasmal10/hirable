import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./freelancerProfile.css";

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
export function FreelancerSkills() {
  const [takeInput, setTakeInput] = useState("");
  const [selectSkills, setSelectSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onChangeHandler = (e) => {
    setTakeInput(e.target.value);
    setSelectedIndex(-1);
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

  const addSkills = (skill) => {
    if (!selectSkills.includes(skill)) {
      setSelectSkills([...selectSkills, skill]);
      setTakeInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && selectedIndex !== -1) {
      addSkills(filteredSkills[selectedIndex]);
      setSelectedIndex(-1);
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prvIndex) =>
        prvIndex < filteredSkills.length - 1 ? prvIndex + 1 : prvIndex
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prvIndex) => prvIndex > 0 ? prvIndex-1: prvIndex);
    }
  };

  useEffect(() => {
    showSelectedData();
  }, [takeInput]);

  return (
    <div className="">
      <div>
        {selectSkills.map((selectSkill) => (
          <ul key={selectSkill}>
            <li>{selectSkill}</li>
          </ul>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={takeInput}
          onChange={onChangeHandler}
          onKeyDown={handleKeyPress}
        />
        {filteredSkills.length > 0 &&
          filteredSkills.map((skill, index) => (
            <ul
              key={skill}
              onClick={() => addSkills(skill)}
              className={selectedIndex === index ? "selected" : ""}
              onMouseOver={() => setSelectedIndex(index)}
            >
              <li>{skill}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}
