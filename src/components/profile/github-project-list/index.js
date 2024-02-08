import { Button, Card, Input, Modal } from "antd";
import React, { useState } from "react";
import "../userProfile.css";

const GithubProjectList = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [githubRepoLists, setGithubRepoLists] = useState([]);

  const handleOk = () => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setGithubRepoLists(data));

    setIsOpen(false);
  };

  return (
    <div className="card-profile-layout">
      <Card
        title={<p className={theme}>GitHub</p>}
        style={{
          width: "90%",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          borderRadius: "1rem",
          marginBottom: "1rem",
        }}
        className={theme}
      >
        {githubRepoLists.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {githubRepoLists.map((repo) => {
              return (
                <Card className={`repo-cards ${theme}`}>
                  <h2>{repo.name}</h2>
                  <p>{repo.description}</p>
                  <p>{repo.language}</p>
                </Card>
              );
            })}
          </div>
        )}
        {githubRepoLists.length === 0 ? (
          <Button type="dashed" onClick={() => setIsOpen(true)}>
            Add your github repos +
          </Button>
        ) : (
          <Button
            type="dashed"
            onClick={() => {
              setUsername("");
              setGithubRepoLists([]);
            }}
          >
            Delete
          </Button>
        )}
      </Card>
      <Modal
        title="Add your GitHub profile"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={[
          <Button key="back" onClick={() => setIsOpen(false)}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Add
          </Button>,
        ]}
      >
        <Input
          placeholder="Enter your GitHub username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default GithubProjectList;
