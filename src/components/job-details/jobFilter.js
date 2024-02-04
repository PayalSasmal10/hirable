import React, { useContext, useEffect, useState } from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import { JobDetailsContext } from "../../store/jobDetailsContext";
import { Button } from "antd";

export function JobFilter() {
  const { jobDetails, filteredData, setFilteredData, searchData } =
    useContext(JobDetailsContext);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [filterStoredData, setFilterStoredData] = useState(filteredData);

  // useEffect(() => {
  //   setFilterStoredData(filteredData);
  // }, [filteredData]);

  //   const [salaryFilteredData, setSalaryFilteredData] = useState([]);

  const salaryRange = [
    "0k-5k",
    "5k-10k",
    "10k-20k",
    "20k-30k",
    "30k-50k",
    "50k-70k",
    "70k-80k",
    "100k +",
  ];

  const onchangeHandler = (e) => {
    const value = e.target.value;
    console.log("value", value);
    if (selectedSalaries.includes(value)) {
      setSelectedSalaries(
        selectedSalaries.filter((salary) => salary !== value)
      );
      console.log("inside selected salaries if", selectedSalaries);
    } else {
      setSelectedSalaries([...selectedSalaries, value]);
      console.log("inside selected salaries else", selectedSalaries);
    }
  };

  console.log("searchData", searchData);
  console.log("filterStoredData", filterStoredData);

  //   const onChangeFilterButtonApplyHandler = () => {
  //     console.log("filteredData", filteredData);
  //     let dataToFilter = salaryFilteredData.length > 0 ? salaryFilteredData : jobDetails;
  //     if (selectedSalaries.length === 0) {
  //       setFilteredData(dataToFilter);
  //       console.log("selectedSalaries.length", selectedSalaries.length);
  //       return;
  //     }
  //     console.log("button click", selectedSalaries);

  //     const data = dataToFilter.filter((filterSalary) =>
  //       selectedSalaries.some((selectsalary) =>
  //         filterSalary.salary.includes(selectsalary)
  //       )
  //     );
  //     console.log("data", data);
  //     setFilteredData(data);
  //     console.log("salary Range", salaryRange);
  //   };

  // console.log("filteredData", filteredData);
  // const onChangeFilterButtonApplyHandler = () => {
  //   let dataToFilter =
  //     filterStoredData.length > 0 ? filterStoredData : filteredData;
  //   if (selectedSalaries.length === 0) {
  //     console.log("dataToFilter", filterStoredData);
  //     setFilteredData(filterStoredData);
  //     console.log("selectedSalaries.length", selectedSalaries.length);
  //     return;
  //   } else if (selectedSalaries.length > 0) {
  //     const data =
  //       searchData &&
  //       dataToFilter.filter((filterSalary) =>
  //         selectedSalaries.some((selectsalary) =>
  //           filterSalary.salary.includes(selectsalary)
  //         )
  //       );
  //     console.log("search Term", data);
  //     console.log("search", searchData);
  //     setFilteredData(data);
  //   }
  // };

  const onChangeFilterButtonApplyHandler = () => {
    if (selectedSalaries.length > 0) {
      const data = filterStoredData.filter((filterSalary) =>
        selectedSalaries.some((selectsalary) =>
          filterSalary.salary.includes(selectsalary)
        )
      );
      console.log("search Term", data);
      console.log("search", searchData);
      setFilteredData(data);
    } else {
      setFilteredData(filterStoredData);
    }
  };
  console.log(filteredData);

  return (
    <div className="filter-container">
      <div>
        <h3>All Filters</h3>
        {salaryRange.map((salary) => (
          <div key={salary}>
            <input
              type="checkbox"
              onChange={onchangeHandler}
              value={salary}
              checked={selectedSalaries.includes(salary)}
            />
            <LiaDollarSignSolid />
            <span>{salary} /hr</span>
          </div>
        ))}
      </div>
      <div className="easy-apply-btn">
        <Button type="primary" onClick={onChangeFilterButtonApplyHandler}>
          Apply
        </Button>
      </div>
    </div>
  );
}
