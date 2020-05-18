import React, { Fragment } from 'react';
import Footer from '../footer';
import MainHeader from '../header';
import '../layout/layout.scss';

const LayoutHome = props =>{
  return(
    <Fragment>
      <div className="layout__container">
        <MainHeader/>
        {props.children}
        <Footer/>
      </div>
    </Fragment>
  )

}

export default LayoutHome