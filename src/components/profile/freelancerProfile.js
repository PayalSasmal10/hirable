import React, { useContext } from "react";
import Header from "../header";
import { CgProfile } from "react-icons/cg";
import "./freelancerProfile.css";
import { Card } from "antd";
import { HirableContext } from "../../store/hirableContext";

export function FreelancerProfile() {
  const { name, email, phone, role } = useContext(HirableContext);
  return (
    <div className="card-profile-layout">
      <Card className="card-profile">
        <div className="content-profile">
          <CgProfile size="4rem" />
          <h4>{name}</h4>
          <h6>{role}</h6>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </Card>
    </div>
  );
}
