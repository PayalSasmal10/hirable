import { createContext, useState } from "react";

export const ProfileDetailsContext = createContext();

export const ProfileDetailsProvider = ({ children }) => {
  const [userSkills, setUserSkills] = useState([]);
  return (
    <ProfileDetailsContext.Provider
      value={{userSkills, setUserSkills }}
    >
      {children}
    </ProfileDetailsContext.Provider>
  );
};
