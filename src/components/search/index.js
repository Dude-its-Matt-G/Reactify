import React from "react";
import "./search.scss";
import SearchBar from "../search-home";

const InputSearch = (props) => {
  let inputClass = "input";
  if (props.search) {
    inputClass = "input open";
  }

  return (
    <div className={inputClass}>
      <img
        src="/images/search-solid-black.svg"
        alt="search logo"
        className="input__icon-drop"
      />
      <SearchBar
        type="text"
        placeholder="Search for another artist"
        name="artist"
        classnameWrite="search__write--bar"
        classname="search--bar"
        button="input__button"
      />
    </div>
  );
};

export default InputSearch;
