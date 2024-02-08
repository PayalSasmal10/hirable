import React, { useContext, useEffect, useState } from "react";
import { LiaDollarSignSolid } from "react-icons/lia";
import { HirableContext } from "../../store/hirableContext";
import { Button } from "antd";

export function JobFilter({selectedSalaries, setSelectedSalaries, salaryRange}) {

  const onchangeHandler = (e) => {
    const value = e.target.value;
    if (selectedSalaries.includes(value)) {
      setSelectedSalaries(
        selectedSalaries.filter((salary) => salary !== value)
      );
    } else {
      setSelectedSalaries([...selectedSalaries, value]);
    }
  };
 

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
    </div>
  );
}
