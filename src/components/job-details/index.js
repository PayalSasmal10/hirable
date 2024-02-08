import React, { useContext, useState } from "react";
import { LuDot } from "react-icons/lu";
import { PiDotOutlineFill } from "react-icons/pi";
import { HirableContext } from "../../store/hirableContext";
import { JobFilter } from "../job-details/jobFilter";
import { Button, Pagination, Skeleton } from "antd";
import "./index.css";

export default function JobDetails() {
  const { filteredData, isLoading } = useContext(HirableContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //calculate the index range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // get data from currentPage
  const currentPageData = filteredData.slice(startIndex, endIndex);
  return (
    <div className="job-details">
      <JobFilter />
      <div className="card-layout">
        <h1>Recommended jobs for you</h1>
        {isLoading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <div className="card" key={index}>
                <Skeleton active paragraph={{ row: 4 }} />
              </div>
            ))
          : currentPageData.map((jobdetail) => {
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
                  <Button type="primary">Easy Apply</Button>
                </div>
              );
            })}
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={filteredData.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
          style={{ margin: "1rem 0" }}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
