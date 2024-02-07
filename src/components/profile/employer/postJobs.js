import { Button, Cascader, DatePicker, Form, Input, Select, Tag } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { skillLists } from "../../../data/skillsLists";
import { HirableContext } from "../../../store/hirableContext";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function PostJobs() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(null);
  const [takeInput, setTakeInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [form] = Form.useForm();

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

  console.log("skillLists", skillLists);
  const fileChangeHandler = (e) => {
    const selectfile = e.target.files[0];
    if (selectfile) {
      const maxSize = 16 * 1024;
      if (selectfile.size > maxSize) {
        setFileSizeError("Maximum size allowed 16KB");
      } else {
        setSelectedFile(selectedFile);
        setFileSizeError(null);
      }
    }
  };

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  // form css
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  return (
    <Form
      {...formItemLayout}
      variant="filled"
      style={{
        maxWidth: 600,
      }}
      form={form}
      onFinish={onSubmitHandler}
    >
      <Form.Item
        label="Company Name"
        name="company-name"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contact Info"
        name="company-info"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Job Requirements"
        name="requirements"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Tags">
        {selectedSkillsSets()}
        <Input
          placeholder="Add Tags"
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
      </Form.Item>
      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Job Description"
        name="fileupload"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input type="file" onChange={fileChangeHandler} />
        {fileSizeError && <div style={{ color: "red" }}>{fileSizeError}</div>}
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
