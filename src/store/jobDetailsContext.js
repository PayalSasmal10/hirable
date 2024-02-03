import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/JobDetailsMockData.json";

export const JobDetailsContext = createContext();

export const JobDetailsProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    setJobDetails(data);
  });

  return (
    <JobDetailsContext.Provider value={{ jobDetails, setJobDetails }}>
      {children}
    </JobDetailsContext.Provider>
  );
};
