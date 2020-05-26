import React from "react";
import "../navbar/navbar.scss";
import "./header2.scss";
import SearchBar from "../search-home";

const Navbar2 = (props) => {
  const { toggleSearch, arrow } = props;

  return (
    <navbar className="navbar__container">
      <div className="navbar__div" className="navbar__div2"></div>
      <figure className="navbar__figure" className="navbar__figure2">
        <img
          src="/images/logo-green.png"
          className="navbar__logo2"
          alt="logo de spotify"
        />
      </figure>
      <button className="navbar__button" onClick={toggleSearch}>
        <img
          className="navbar__search--icon"
          alt="search logo"
          src="/images/search-solid.svg"
        />
        <img className="navbar__arrow--icon" src={arrow} alt="arrow" />
      </button>
      <div className="navbar__top-bar" className="show">
        <SearchBar
          type="text"
          placeholder="Search for another artist"
          name="artist"
          classnameWrite="navbar__top-bar--write"
          classname="navbar__top-bar-style"
        />
      </div>
    </navbar>
  );
};

export default Navbar2;
