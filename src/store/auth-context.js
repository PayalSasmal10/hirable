import React, { Children, createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  name: "",
  login: (token) => {},
  firsNameSetter : (name) => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return storedToken;
};

export function AuthContextProvider({ children }) {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (initialToken) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  //name data setup
  const initialName = localStorage.getItem("name");
  const [name, setName] = useState(initialName);

  const loginHandler = () => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  // name handler
  const nameHandler = (name) => {
    setName(name);
    localStorage.setItem("name", name);
  };

  const contextValue = {
    token: token,
    name: name,
    login: loginHandler,
    firsNameSetter: nameHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
