import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import "../../components/profile/userProfile.css";
import { Card } from "antd";
import { HirableContext } from "../../store/hirableContext";

export function UserProfile() {
  const { name, email, phone, role, theme } = useContext(HirableContext);
  return (
    <div className="card-profile-layout profile-job">
      <Card className={`card-profile ${theme}`}>
        <div className="content-profile">
          <CgProfile size="4rem" />
          <h2>{name}</h2>
          <h3>{role}</h3>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </Card>
    </div>
  );
}
