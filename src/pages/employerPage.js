import React, { useContext } from "react";
import { UserProfile } from "../components/profile/userProfile";
import Header from "../components/header";
import { Employer } from "../components/profile/employer/employer";
import { HirableContext } from "../store/hirableContext";

export function EmployerPage() {
  const { role, logout } = useContext(HirableContext);
  return (
    <>
      <Header  role={role} logout={logout}/>
      <UserProfile />
      <Employer/>
    </>
  );
}
