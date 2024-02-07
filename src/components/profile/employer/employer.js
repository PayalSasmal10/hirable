import React, { useState } from "react";
import { UserProfile } from "../userProfile";
import Header from "../../header";
import { Button, Card, Flex, Modal } from "antd";
import "../userProfile.css";
import EmployerJobPost from "./employerJobPost";
import PostJobs from "./postJobs";

export function Employer() {
  const [jobBucket, setJobBucket] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="jobContainer">
          <h3>Job Posted By You</h3>
          <Button
            type="link"
            style={{ fontSize: "20px" }}
            onClick={() => setIsModalOpen(true)}
          >
            Post Jobs
          </Button>
        </div>
        <Modal
          title="Add Jobs"
          open={isModalOpen}
          // onOk={onModalOkHandler}
          onCancel={() => setIsModalOpen(false)}
          footer=""
        >
          <PostJobs setIsModalOpen={setIsModalOpen}/>
        </Modal>
      </div>
      <EmployerJobPost />
    </>
  );
}
