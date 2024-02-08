import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./index.css";
import { HirableContext } from "../../store/hirableContext";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Modal, Popover, Space } from "antd";
import Search from "antd/es/input/Search";

export default function Header({ name, logout, onClickHandler, role, onSearchHandler }) {
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
          enterButton
          allowClear
        />
      </Space>
      {/* <button type="submit" onClick={onClickHandler}>
        <BsSearch size="1.5rem" />
      </button> */}
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
