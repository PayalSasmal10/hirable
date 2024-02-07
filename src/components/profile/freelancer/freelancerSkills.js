import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Input, Modal, Tag } from "antd";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { HirableContext } from "../../../store/hirableContext";
import { skillLists } from "../../../data/skillsLists";
import "../userProfile.css";


export function FreelancerSkills() {
  const { userSkills, setUserSkills } = useContext(HirableContext);
  const [takeInput, setTakeInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
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
      setSelectedIndex((prvIndex) => (prvIndex > 0 ? prvIndex - 1 : prvIndex));
    }
  };

  useEffect(() => {
    showSelectedData();
  }, [takeInput]);

  const onModalOkHandler = () => {
    setUserSkills(selectedSkills);
  };

  const selectedSkillsSets = () => {
    return (
      <>
        {selectedSkills.map((selectSkill) => (
          <Tag
            closeIcon={<CloseCircleOutlined />}
            onClose={() => console.log(selectSkill)}
            color="processing"
            style={{ fontSize: "1rem", padding: "0.5rem" }}
          >
            {selectSkill}
          </Tag>
        ))}
      </>
    );
  };

  return (
    <div className="listing">
      <Card style={{ width: "90%", display: "flex" }} className="card-profile">
        <h3>Key Skills</h3>
        <Button
          icon={
            <EditOutlined style={{ fontSize: "1.5rem", paddingLeft: "10px" }} />
          }
          style={{ border: "none" }}
          onClick={() => setIsModalOpen(true)}
        />
        <div>
          <span> </span>
          {userSkills}
        </div>
      </Card>

      <Modal
        title="Edit Skills"
        open={isModalOpen}
        onOk={onModalOkHandler}
        onCancel={() => setIsModalOpen(false)}
      >
        {/* {selectedSkills.map((selectSkill) => (
          <Tag
            closeIcon={<CloseCircleOutlined />}
            onClose={() => console.log(selectSkill)}
            color="processing"
            style={{ fontSize: "1rem", padding: "0.5rem" }}
          >
            {selectSkill}
          </Tag>
        ))} */}
        {selectedSkillsSets()}
        <Input
          placeholder="Add Skills"
          type="text"
          value={takeInput}
          onChange={onChangeHandler}
          onKeyDown={handleKeyPress}
          style={{ marginTop: "0.5rem" }}
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
      </Modal>
    </div>
  );
}