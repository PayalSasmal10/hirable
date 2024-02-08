import React, { useContext } from "react";
import { UserProfile } from "../components/profile/userProfile";
import { FreelancerSkills } from "../components/profile/freelancer/freelancerSkills";
import Header from "../components/header";
import { HirableContext } from "../store/hirableContext";

export default function Freelancerpage() {
  const { role, logout } = useContext(HirableContext);
  return (
    <>
      <Header role={role} logout={logout} />
      <UserProfile />
      <FreelancerSkills />
    </>
  );
}
