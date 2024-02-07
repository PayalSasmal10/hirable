import React, { useContext, useEffect, useState } from "react";
import { HirableContext } from "../../../store/hirableContext";
import { Card, Flex, Tag } from "antd";
import Column from "antd/es/table/Column";

export default function EmployerJobPost() {
  const { jobDetails, role, name, email } = useContext(HirableContext);
  const [jobsOfEmployer, setJobsOfEmployer] = useState([]);
  function fetchPostedJobs() {
    let user = jobDetails.filter(
      (user) =>
        user.name_of_the_recruiter === name &&
        user.email === email &&
        role === "Employer"
    );
    setJobsOfEmployer(user);
    console.log("user from employer", user);
  }
  useEffect(() => {
    fetchPostedJobs();
  }, []);
  return (
    <div className="card-profile-layout" >
      {jobsOfEmployer.map((job) => {
        return (
          <Card
            style={{ width: "90%", display: "flex", marginTop: "1rem" }}
            className="card-profile"
          >
            <div key={job.email}>
              <div>
                <h2>{job.company}</h2>
              </div>
              <div>
                <h3>{job.email}</h3>
              </div>
              <div>
                <h2>Job Requirements</h2>
                {job.job_requirement}
              </div>
              <div>
                <h2>Job Description</h2>
                {job.job_description}
              </div>
              {job.skills.map((skill) => {
                return (
                  <Tag color="blue" style={{ marginTop: "1rem" }}>
                    {skill}
                  </Tag>
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
