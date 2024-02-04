import React, { useContext, useEffect } from "react";
import { LuDot } from "react-icons/lu";
import { PiDotOutlineFill } from "react-icons/pi";
import "./index.css";
import { JobDetailsContext } from "../../store/jobDetailsContext";
import {JobFilter} from "../job-details/jobFilter"

export default function JobDetails() {
  const { filteredData } = useContext(JobDetailsContext);

  useEffect(() => {
    console.log("Filetered Data from ", filteredData);
  }, [filteredData]);

  return (
    <div className="card-layout">
      <h1>Recommended jobs for you</h1>
      <JobFilter/>
      {filteredData.map((jobdetail) => {
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
            <div className="easy-apply-btn">
              <button type="button">Easy Apply</button>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}
