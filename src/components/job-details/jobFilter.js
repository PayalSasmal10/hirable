import React, { useContext, useEffect, useState } from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import { JobDetailsContext } from "../../store/jobDetailsContext";

export function JobFilter() {
  const {
    jobDetails,
    filteredData,
    setFilteredData,
    selectedSalaries,
    updatedSelectedSalaries,
    searchData
  } = useContext(JobDetailsContext);
//   const [selectedSalaries, setSelectedSalaries] = useState([]);
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
      updatedSelectedSalaries(
        selectedSalaries.filter((salary) => salary !== value)
      );
      console.log("inside selected salaries if", selectedSalaries);
    } else {
      updatedSelectedSalaries([...selectedSalaries, value]);
      console.log("inside selected salaries else", selectedSalaries);
    }
  };

  const applySalaryFilters = () => {
    if (selectedSalaries.length === 0) {
      setFilteredData(jobDetails);
    } else {
      const data = jobDetails.filter((filterSalary) =>
        selectedSalaries.some((selectSalary) =>
          filterSalary.salary.includes(selectSalary)
        )
      );
      setFilteredData(data);
    }
  };

  useEffect(() => {
    applySalaryFilters();
  }, [selectedSalaries]);

  const onChangeFilterButtonApplyHandler = () => {
    console.log("filteredData", filteredData);
    let dataToFilter =
      selectedSalaries.length > 0 ? filteredData : jobDetails;
    if (selectedSalaries.length === 0) {
      setFilteredData(dataToFilter);
      console.log("selectedSalaries.length", selectedSalaries.length);
      return;
    }
    console.log("button click", selectedSalaries);

    const data = dataToFilter.filter((filterSalary) =>
      selectedSalaries.some((selectsalary) =>
        filterSalary.salary.includes(selectsalary)
      )
    );
    console.log("data", data);
    setFilteredData(data);
    console.log("salary Range", salaryRange);
  };

  return (
    <div>
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
      <button type="button" onClick={onChangeFilterButtonApplyHandler}>
        Apply
      </button>
    </div>
  );
}
