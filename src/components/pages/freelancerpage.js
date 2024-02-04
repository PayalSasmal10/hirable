import React from 'react';
import { FreelancerProfile } from '../profile/freelancerProfile';
import { FreelancerSkills } from '../profile/freelancerSkills';
import Header from '../header';


export default function Freelancerpage() {
  return (
    <>
        <Header/>
        <FreelancerProfile/>
        <FreelancerSkills/>
    </>
  )
}
