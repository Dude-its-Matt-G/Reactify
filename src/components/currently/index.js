import React from 'react';
import '../../pages/pages.scss';

const Currently = (props) => {
  return(
    <p className="home__text">You are currently searching:  <span className="home__currently">
        {props.search}</span></p>
    
  )
}

export default Currently;