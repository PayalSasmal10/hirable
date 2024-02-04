import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/JobDetailsMockData.json";

export const JobDetailsContext = createContext();

export const JobDetailsProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);

  useEffect(() => {
    setJobDetails(data);
    setFilteredData(data);
  }, []);

  const updatedSearchData = (searchValue) => {
    setSearchData(searchValue);
  };

  const updatedSelectedSalaries = (salaries) => {
    setSelectedSalaries(salaries);
  };

  return (
    <JobDetailsContext.Provider
      value={{
        jobDetails,
        setJobDetails,
        filteredData,
        setFilteredData,
        searchData,
        updatedSearchData,
        selectedSalaries,
        updatedSelectedSalaries
      }}
    >
      {children}
    </JobDetailsContext.Provider>
  );
};
