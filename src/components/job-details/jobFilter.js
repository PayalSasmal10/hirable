import React from "react";
import { LiaDollarSignSolid } from "react-icons/lia";

export function JobFilter() {
  const salaryRange = [
    "0k-3k",
    "3k-5k",
    "5k-10k",
    "10k-20k",
    "20k-30k",
    "30k-50k",
    "50k-70k",
    "70k-80k",
    "100k +",
  ];



  return (
    <div>
      <div>
        <h3>All Filters</h3>
        {salaryRange.map((salary) => (
          <div key={salary}>
            <input type="checkbox" />
            <LiaDollarSignSolid />
            <span>{salary} /hr</span>
          </div>
        ))}
      </div>
    </div>
  );
}
