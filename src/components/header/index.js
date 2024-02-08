import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Popover, Space } from "antd";
import Search from "antd/es/input/Search";
import "./index.css";

export default function Header({
  name,
  logout,
  onClickHandler,
  role,
  onSearchHandler,
  searchFieldData,
}) {
  const [openPopOver, setOpenPopOver] = useState(false);
  const content = (
    <div>
      {role === "Freelancer" ? (
        <>
          <Link to="/freelancerprofile">
            <p>View Profile</p>
          </Link>
          <Link to="/">
            <p onClick={logout}>Logout</p>
          </Link>
        </>
      ) : (
        <Link to="/">
          <p onClick={logout}>Logout</p>
        </Link>
      )}
    </div>
  );
  const handleOpenChange = (newOpen) => {
    setOpenPopOver(newOpen);
  };

  return (
    <div className="header">
      <Link to="/">HIRABLE</Link>
      <Space direction="vertical">
        <Search
          placeholder="Search jobs here"
          onChange={onSearchHandler}
          onSearch={onClickHandler}
          enterButton="Search"
          size="large"
          value={searchFieldData}
        />
      </Space>
      <Popover
        title={name}
        content={content}
        trigger="click"
        open={openPopOver}
        onOpenChange={handleOpenChange}
      >
        <HiOutlineUserCircle
          size="3em"
          style={{ marginRight: "2rem", cursor: "pointer" }}
        />
      </Popover>
    </div>
  );
}
