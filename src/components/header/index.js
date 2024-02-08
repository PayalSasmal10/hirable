import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Popover, Space, Button } from "antd";
import Search from "antd/es/input/Search";
import { HirableContext } from "../../store/hirableContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import "./index.css";

export default function Header({
  name,
  logout,
  onClickHandler,
  onSearchHandler,
  searchFieldData,
}) {
  const [openPopOver, setOpenPopOver] = useState(false);
  const { theme, setTheme, role } = useContext(HirableContext);
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

  // theme selector
  const themeChangeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`header ${theme}`}>
      <Link to="/" className={`title ${theme}`}>
        HIRABLE
      </Link>
      <Space direction="vertical">
        <Search
          placeholder="Search jobs here"
          onChange={onSearchHandler}
          onSearch={onClickHandler}
          enterButton="Search"
          size="large"
          value={searchFieldData}
          style={{ width: "100" }}
        />
      </Space>
      <Button onClick={themeChangeHandler}>
        {theme === "light" ? <SunOutlined /> : <MoonOutlined />}
      </Button>
      <Popover
        title={name}
        content={content}
        trigger="click"
        open={openPopOver}
        onOpenChange={handleOpenChange}
      >
        <HiOutlineUserCircle
          size="3em"
          style={{ margin: "0 2rem", cursor: "pointer" }}
        />
      </Popover>
    </div>
  );
}
