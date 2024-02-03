import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./index.css";

export default function Header() {
  const [inputField, setInputField] = useState("");

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
