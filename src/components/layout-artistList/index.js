import React,{Fragment, useState} from 'react';
import '../../App';
import Navbar from '../navbar';
import InputSearch from '../search';
import '../layout/layout.scss';
import MainHeader from '../header';
/* import Footer from '../footer'; */

const LayoutList = props =>{

  const [search, setSearch] = useState(false);
  const [drop, setDrop] = useState("/images/arrow.png");

  const toggleSearch = (props) => {
    if(!search) {
      setSearch((prevState) => {
      return {searchBar: !prevState.searchBar}
      });
    setDrop("/images/arrow-up.png")
      } else {
      setSearch(false);
      setDrop("/images/arrow.png");
  }
}

  return(
    <Fragment>
      <div className="layout__container">
      <Navbar toggleSearch={toggleSearch} arrow={drop}/>
      {/* <MainHeader className={props.show}/> */}
      <InputSearch search={search}/>
      {props.children}
     {/*  <Footer/>  */}
      </div>
    </Fragment>
 )
}

export default LayoutList;