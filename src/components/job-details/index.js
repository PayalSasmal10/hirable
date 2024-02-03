import React, { useContext } from "react";
import { LuDot } from "react-icons/lu";
import { PiDotOutlineFill } from "react-icons/pi";
import "./index.css";
import { JobDetailsContext } from "../../store/jobDetailsContext";

export default function JobDetails() {
  const { jobDetails } = useContext(JobDetailsContext);
  console.log("JobDetails.role", jobDetails.role);
  return jobDetails.map((jobdetail) => {
    return (
      <div className="card" key={jobdetail.guid}>
        <div className="content">
          <div>
            <h3>{jobdetail.role}</h3>
            <p>{jobdetail.company}</p>
          </div>
          <div>
            <span>{jobdetail.experience}</span>
            <PiDotOutlineFill />
            <span>{jobdetail.salary}</span>
            <PiDotOutlineFill />
            <span>{jobdetail.region}</span>
          </div>
          <div>
            <span>hi ther.........</span>
          </div>
          <div>
            <span>
              {jobdetail.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                  <LuDot />
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    );
  });
}
