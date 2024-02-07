import React from "react";
import { UserProfile } from "../components/profile/userProfile";
import { FreelancerSkills } from "../components/profile/freelancer/freelancerSkills";
import Header from "../components/header";

export default function Freelancerpage() {
  return (
    <>
      <Header />
      <UserProfile />
      <FreelancerSkills />
    </>
  );
}
