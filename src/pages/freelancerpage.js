import React from "react";
import { FreelancerProfile } from "../components/profile/freelancerProfile";
import { FreelancerSkills } from "../components/profile/freelancerSkills";
import Header from "../components/header";

export default function Freelancerpage() {
  return (
    <>
      <Header />
      <FreelancerProfile />
      <FreelancerSkills />
    </>
  );
}
