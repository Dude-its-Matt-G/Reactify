import React, { Fragment, useState } from "react";
import "../../App";
import Navbar2 from "../navbar2";
import InputSearch from "../search";
import "../layout/layout.scss";
import Footer from "../footer";

const LayoutList = (props) => {
  const [search, setSearch] = useState(false);
  const [drop, setDrop] = useState("/images/arrow.png");

  const toggleSearch = () => {
    if (!search) {
      setSearch((prevState) => {
        return { searchBar: !prevState.searchBar };
      });
      setDrop("/images/arrow-up.png");
    } else {
      setSearch(false);
      setDrop("/images/arrow.png");
    }
  };

  return (
    <Fragment>
      <div className="layout__container">
        <Navbar2 toggleSearch={toggleSearch} arrow={drop} />
        <InputSearch search={search} />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default LayoutList;
