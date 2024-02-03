import React from "react";
import jobdetails from "../../data/JobDetailsMockData.json";
import "./index.css";

export default function JobDetails() {
  return jobdetails.map((jobdetail) => {
    return (
      <div className="card" key={jobdetail.guid}>
        <div className="content">
          <div>
            <h3>{jobdetail.role}</h3>
            <p>{jobdetail.company}</p>
          </div>
          <div>
            <span>{jobdetail.experience}</span>
            <span>{jobdetail.salary}</span>
            <span>{jobdetail.region}</span>
          </div>
          <div>
            <span>hi ther.........</span>
          </div>
          <div>
            <span>
              {jobdetail.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    );
  });
}
