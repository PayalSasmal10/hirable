import React from "react";
import Header from "../header";
import "./freelancerProfile.css";

export function FreelancerProfile() {
  return (
    <div>
      <Header />
      <div className="card-profile-layout">
        <div className="card-profile">
          <div className="content-profile">
            <h4>Payal Sasmal</h4>
            <h6>Freelancer</h6>
            <p>8101689544</p>
            <p>sasmalpayal@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
