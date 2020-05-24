import React from 'react';
import './navbar.scss';
import SearchBar from '../search-home';

const Navbar = (props) =>{
  const {toggleSearch, arrow} = props

  return(
   <navbar className="navbar__container">
     <div className="navbar__div"></div>
      <figure className="navbar__figure">
        <img src='/images/logo-green.png'
        className="navbar__logo" 
        alt="logo de spotify"/>
      </figure>
      <button className="navbar__button" onClick={toggleSearch}>
        <img className="navbar__search--icon" alt="search logo" src="/images/search-solid.svg"/>
        <img className="navbar__arrow--icon" src={arrow} alt="arrow"/>
      </button>
      <div className="navbar__top-bar">
        <SearchBar
        type="text" 
        placeholder="Search for another artist"
        name="artist" classnameWrite="navbar__top-bar--write" classname="navbar__top-bar-style"/>
      </div>  
   </navbar>
 )
}

export default Navbar;