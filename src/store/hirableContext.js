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
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
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
  const [theme, setTheme] = useState("light");
  
  // theme change
  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme) {
    localStorage.setItem("theme", "light");
  }

  useEffect(() => {
    setTheme(storedTheme);
  }, [storedTheme]);

  let initialToken;
  if (retrieveStoredToken()) {
    initialToken = retrieveStoredToken().token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  // job data set and update
  useEffect(() => {
    setIsLoading(true);
    setJobDetails(data);
    setFilteredData(data);
  }, []);

  useEffect(() => {
    if (filteredData.length > 0) {
      setIsLoading(false);
    }
  }, [filteredData]);

  const updatedSearchData = (searchValue) => {
    setSearchData(searchValue);
  };

  // login handler
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

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

  //logout handler
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
      userSkills,
      setUserSkills,
      isLoading,
      setIsLoading,
      theme, 
      setTheme
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
      userSkills,
      isLoading,
      theme
    ]
  );

  return (
    <HirableContext.Provider value={contextValue}>
      {children}
    </HirableContext.Provider>
  );
};
