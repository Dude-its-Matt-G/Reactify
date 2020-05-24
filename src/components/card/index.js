import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ name, genres, image, year,id,route}) =>{

  return(
    <Fragment>
      <div className="card__container">
        <div className="box">
          <img src={image}className="card__image" alt={name}/>
        </div>
        <div className="card__container--name">
          <Link to={`${route}${id}`} className="card__link"><h3 className="card__name">{name}</h3></Link>
          <p className="card__title">{genres}</p>
          <p className="card__year">{year}</p>
        </div>  
      </div>
    </Fragment>
  )
}

export default Card;

