import React,{Fragment, useState} from 'react';
import '../../App';
import Navbar from '../navbar';
import InputSearch from '../search';
import './layout.scss';
import Footer from '../footer';

const Layout = props =>{

  const [search, setSearch] = useState(false);
  const [drop, setDrop] = useState("/images/arrow.png");

  const toggleSearch = () => {
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
      <InputSearch search={search}/>
      {props.children}
      </div>
      <Footer/> 
    </Fragment>
 )
}

export default Layout;