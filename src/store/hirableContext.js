import { createContext, useEffect, useState } from "react";
import data from "../data/JobDetailsMockData.json";

export const HirableContext = createContext({
  token: "",
  isLoggedIn: false,
  name: "",
  login: (token) => {},
  logout: () => {},
  firsNameSetter: (name) => {},
});
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return { token: storedToken };
};

export const HirableContextProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  
  let initialToken;
  if (retrieveStoredToken()) {
    initialToken = retrieveStoredToken().token;
  }
  const [token, setToken] = useState(initialToken);

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

  console.log("initialToken", initialToken);
  
  const userIsLoggedIn = !!token;
  console.log("token from context", token);
  //name data setup
  const initialName = localStorage.getItem("name");
  const [name, setName] = useState(initialName);
  
  // login handler
  const loginHandler = (token) => {
    setToken(token);
    console.log("auth context", token);
    localStorage.setItem("token", token);
    console.log("check it is storing or not", localStorage.getItem(token));
  };
  console.log("from context", userIsLoggedIn);
  
  // name handler
  const nameHandler = (name) => {
    setName(name);
    localStorage.setItem("name", name);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    name: name,
    login: loginHandler,
    logout: logoutHandler,
    firsNameSetter: nameHandler,
    jobDetails,
    setJobDetails,
    filteredData,
    setFilteredData,
    searchData,
    updatedSearchData,
    selectedSalaries,
    updatedSelectedSalaries,
  };

  return (
    <HirableContext.Provider value={contextValue}>
      {children}
    </HirableContext.Provider>
  );
};
