import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./index.css";
import { JobDetailsContext } from "../../store/jobDetailsContext";

export default function Header() {
  const { jobDetails, filteredData, setFilteredData } =
    useContext(JobDetailsContext);
  const [searchFieldData, setSearchFieldData] = useState("");

  const onSearchHandler = (e) => {
    setSearchFieldData(e.target.value);
  };

  const onFilteredDataChangeHandler = (valueToBeSearched) => {
    if (valueToBeSearched !== "") {
      const data = jobDetails.filter((jobdetail) => {
        return jobdetail.skills
          .join(", ")
          .toLowerCase()
          .includes(valueToBeSearched.toLowerCase());
      });
      setFilteredData(data);
    } else if (valueToBeSearched.trim() === "") {
      setFilteredData(jobDetails);
    }
  };

  useEffect(() => {
    onFilteredDataChangeHandler(searchFieldData);
    console.log("FilteredData", filteredData);
  }, [searchFieldData]);

  const onClickHandler = () => {};
  return (
    <div className="header">
      <Link>HIRABLE</Link>
      <div>
        <input
          placeholder="Search jobs here"
          type="text"
          onChange={onSearchHandler}
          className="input"
        />
        <button type="submit" onClick={onClickHandler}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
