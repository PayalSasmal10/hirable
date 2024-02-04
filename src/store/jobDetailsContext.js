import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/JobDetailsMockData.json";

export const JobDetailsContext = createContext();

export const JobDetailsProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setJobDetails(data);
    setFilteredData(data);
  },[]);

  return (
    <JobDetailsContext.Provider value={{ jobDetails, setJobDetails, filteredData, setFilteredData }}>
      {children}
    </JobDetailsContext.Provider>
  );
};
