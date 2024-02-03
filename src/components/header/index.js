import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./index.css";
import { JobDetailsContext } from "../../store/jobDetailsContext";

export default function Header() {
  const { jobDetails } = useContext(JobDetailsContext);
  const [inputField, setInputField] = useState("");

  console.log(jobDetails);

  const onChangeHandler = (e) => {
    setInputField(e.target.value);
  };
  const onClickHandler = () => {};
  return (
    <div className="header">
      <Link>HIRABLE</Link>
      <input
        placeholder="Search jobs here"
        type="text"
        onChange={onChangeHandler}
        className="input"
      />
      <button type="submit" onClick={onClickHandler}>
        <BsSearch />
      </button>
    </div>
  );
}
