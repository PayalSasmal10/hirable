import React from "react";
import { UserProfile } from "../components/profile/userProfile";
import Header from "../components/header";
import { Employer } from "../components/profile/employer/employer";

export function EmployerPage() {
  return (
    <>
      <Header />
      <UserProfile />
      <Employer/>
    </>
  );
}
