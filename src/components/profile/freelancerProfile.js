import React from "react";
import Header from "../header";
import { CgProfile } from "react-icons/cg";
import "./freelancerProfile.css";
import { Card } from "antd";

export function FreelancerProfile() {
  return (
      <div className="card-profile-layout">
        <Card className="card-profile">
          <div className="content-profile">
            <CgProfile size="4rem"/>
            <h4>Payal Sasmal</h4>
            <h6>Freelancer</h6>
            <p>8101689544</p>
            <p>sasmalpayal@gmail.com</p>
          </div>
        </Card>
      </div>
  );
}
