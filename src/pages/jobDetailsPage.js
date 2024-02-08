import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../components/header";
import JobDetails from "../components/job-details";
import { HirableContext } from "../store/hirableContext";

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

export default function JobDetailsPage() {
  const {
    jobDetails,
    filteredData,
    setFilteredData,
    updatedSearchData,
    name,
    logout,
    isLoading,
    role,
  } = useContext(HirableContext);
  const [searchFieldData, setSearchFieldData] = useState("");
  const [selectedSalaries, setSelectedSalaries] = useState([]);

  const onSearchHandler = (e) => {
    setSearchFieldData(e.target.value);
  };

  const onFilteredDataChangeHandler = (valueToBeSearched) => {
    if (valueToBeSearched !== "" && selectedSalaries.length === 0) {
      console.log("First if");
      const data = jobDetails.filter((jobdetail) => {
        return jobdetail.skills
          .join(", ")
          .toLowerCase()
          .includes(valueToBeSearched.toLowerCase());
      });
      setFilteredData(data);
      updatedSearchData(valueToBeSearched);
    } else if (
      (valueToBeSearched === "" && selectedSalaries.length > 0) ||
      (valueToBeSearched !== "" && selectedSalaries.length > 0)
    ) {
      console.log("2nd if");
      const data = jobDetails.filter((jobDetail) => {
        return (
          jobDetail.skills
            .join(", ")
            .toLowerCase()
            .includes(valueToBeSearched.toLowerCase()) &&
          selectedSalaries?.includes(jobDetail.salary)
        );
      });
      setFilteredData(data);
    } else if (
      valueToBeSearched.trim() === "" &&
      selectedSalaries.length === 0
    ) {
      console.log("3rd if");
      setFilteredData(jobDetails);
      updatedSearchData("");
    }
  };

  const onClickHandler = () => {
    onFilteredDataChangeHandler(searchFieldData);
    setSearchFieldData('');

  };

  // useEffect(() => {
  //   onFilteredDataChangeHandler(searchFieldData);
  // }, [searchFieldData, onFilteredDataChangeHandler]);

  return (
    <>
      <Header
        name={name}
        logout={logout}
        onClickHandler={onClickHandler}
        role={role}
        onSearchHandler={onSearchHandler}
        searchFieldData={searchFieldData}
      />
      <JobDetails
        filteredData={filteredData}
        isLoading={isLoading}
        selectedSalaries={selectedSalaries}
        setSelectedSalaries={setSelectedSalaries}
        salaryRange={salaryRange}
        onClickHandler={onClickHandler}
      />
    </>
  );
}
