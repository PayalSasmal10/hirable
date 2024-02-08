import { createContext, useEffect, useMemo, useState } from "react";
import data from "../data/JobDetailsMockData.json";

export const HirableContext = createContext({
  token: "",
  isLoggedIn: false,
  name: "",
  login: (token) => {},
  logout: () => {},
  userDataSetter: (name, email, phone, role) => {},
});
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return { token: storedToken };
};

export const HirableContextProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [selectedSalaries, setSelectedSalaries] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  //user data setup
  const initialName = localStorage.getItem("name");
  const initialEmail = localStorage.getItem("email");
  const initialPhone = localStorage.getItem("phone");
  const initialrole = localStorage.getItem("role");
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [role, setRole] = useState(initialrole);

  let initialToken;
  if (retrieveStoredToken()) {
    initialToken = retrieveStoredToken().token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  // job data set and update
  useEffect(() => {
    setTimeout(() => {
      setJobDetails(data);
      setFilteredData(data);
      setIsLoading(false);
    }, 2000);
  }, []);

  const updatedSearchData = (searchValue) => {
    setSearchData(searchValue);
  };

  const updatedSelectedSalaries = (salaries) => {
    setSelectedSalaries(salaries);
  };

  // login handler
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  console.log("userIsLoggedIn from context", userIsLoggedIn);

  // user data handler
  const userDataHandler = (name, email, phone, role) => {
    setName(name);
    setEmail(email);
    setPhone(phone);
    setRole(role);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("role", role);
  };

  //
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("role");
  };

  const contextValue = useMemo(
    () => ({
      token: token,
      isLoggedIn: userIsLoggedIn,
      name: name,
      email: email,
      phone: phone,
      role: role,
      login: loginHandler,
      logout: logoutHandler,
      userDataSetter: userDataHandler,
      jobDetails,
      setJobDetails,
      filteredData,
      setFilteredData,
      searchData,
      updatedSearchData,
      selectedSalaries,
      updatedSelectedSalaries,
      userSkills,
      setUserSkills,
      isLoading,
      setIsLoading,
    }),
    [
      token,
      userIsLoggedIn,
      name,
      email,
      phone,
      role,
      jobDetails,
      filteredData,
      searchData,
      selectedSalaries,
      userSkills,
      isLoading,
    ]
  );

  return (
    <HirableContext.Provider value={contextValue}>
      {children}
    </HirableContext.Provider>
  );
};
