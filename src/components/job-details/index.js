import React, { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { JobFilter } from "../job-details/jobFilter";
import { Button, Pagination, Popover, Skeleton, Tag } from "antd";
import "./index.css";

export default function JobDetails({
  filteredData,
  selectedSalaries,
  isLoading,
  setSelectedSalaries,
  salaryRange,
  onClickHandler,
  theme,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  // State to track hovered job requirement
  const itemsPerPage = 10;

  //calculate the index range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // get data from currentPage
  const currentPageData = filteredData.slice(startIndex, endIndex);
  return (
    <div className="job-details">
      <JobFilter
        selectedSalaries={selectedSalaries}
        setSelectedSalaries={setSelectedSalaries}
        salaryRange={salaryRange}
        onClickHandler={onClickHandler}
        jobFilterStyle="filter-container"
      />
      <Popover
        placement="bottom"
        content={
          <JobFilter
            selectedSalaries={selectedSalaries}
            setSelectedSalaries={setSelectedSalaries}
            salaryRange={salaryRange}
            onClickHandler={onClickHandler}
          />
        }
        className="filter-container-popover"
      >
        <Button className="btn-filter-popover">Select Salary Range</Button>
      </Popover>
      <div className="card-layout">
        <h1>Job Lists</h1>
        {isLoading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <div className="card" key={index}>
                <Skeleton active paragraph={{ row: 4 }} />
              </div>
            ))
          : currentPageData.map((jobdetail) => {
              return (
                <div className={`card ${theme}`} key={jobdetail.guid}>
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
                      <span>{jobdetail.job_requirement}</span>
                    </div>
                    <div>
                      {jobdetail.skills.map((skill) => (
                        <Tag color="blue" key={skill}>
                          {skill}
                        </Tag>
                      ))}
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
