import React from 'react';
import './navbar.scss';

const Navbar = (props) =>{
  const {toggleSearch, arrow} = props
  return(
   <navbar className="navbar__container">
     <div className="navbar__div"></div>
     <figure className="navbar__figure"><img src='/images/logo-green.png'
      className="navbar__logo" alt="logo de sporify"/>
     </figure>
     <button className="navbar__button" onClick={toggleSearch}>
        <img className="navbar__search--icon" alt="search logo" src="/images/search-solid.svg"/>
        <img className="navbar__arrow--icon" src={arrow} alt="arrow"/>
      </button>
   </navbar>
 )
}

export default Navbar;