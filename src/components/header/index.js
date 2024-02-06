import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./index.css";
import { HirableContext } from "../../store/hirableContext";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Modal, Popover } from "antd";

export default function Header() {
  const { jobDetails, filteredData, setFilteredData, updatedSearchData, name } =
    useContext(HirableContext);
  const [searchFieldData, setSearchFieldData] = useState("");
  const [open, setOpen] = useState([false, false]);

  const content = (
    <div>
      <Link to="/freelancerprofile">
        <p>View Profile</p>
      </Link>
      <Link>
        <p>Logout</p>
      </Link>
    </div>
  );
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onSearchHandler = (e) => {
    setSearchFieldData(e.target.value);
  };

  const onFilteredDataChangeHandler = (valueToBeSearched) => {
    if (valueToBeSearched !== "") {
      const data = jobDetails.filter((jobdetail) => {
        return jobdetail.skills
          .join(", ")
          .toLowerCase()
          .includes(valueToBeSearched.toLowerCase());
      });
      setFilteredData(data);
      updatedSearchData(valueToBeSearched);
    } else if (valueToBeSearched.trim() === "") {
      setFilteredData(jobDetails);
      updatedSearchData("");
    }
  };

  useEffect(() => {
    onFilteredDataChangeHandler(searchFieldData);
    console.log("FilteredData", filteredData);
  }, [searchFieldData]);

  const onClickHandler = () => {};

  return (
    <div className="header">
      <Link to="/">HIRABLE</Link>
      <div>
        <input
          placeholder="Search jobs here"
          type="text"
          onChange={onSearchHandler}
          className="input"
        />
        <button type="submit" onClick={onClickHandler}>
          <BsSearch size="1.5rem" />
        </button>
      </div>
      <Popover
        title={name}
        content={content}
        trigger="click"
        open={open}
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
