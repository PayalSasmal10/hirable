import React, { useContext } from "react";
import { UserProfile } from "../components/profile/userProfile";
import { FreelancerSkills } from "../components/profile/freelancer/freelancerSkills";
import Header from "../components/header";
import { HirableContext } from "../store/hirableContext";
import GithubProjectList from "../components/profile/github-project-list";

export default function Freelancerpage() {
  const { theme, logout } = useContext(HirableContext);
  return (
    <>
      <Header logout={logout} />
      <UserProfile />
      <FreelancerSkills />
      <GithubProjectList theme={theme} />
    </>
  );
}
