import React, { useState } from "react";
import { Button, Modal } from "antd";
import EmployerJobPost from "./employerJobPost";
import PostJobs from "./postJobs";
import "../userProfile.css";

export function Employer() {
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
