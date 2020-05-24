import React, { Fragment } from 'react';
import './profile.scss';

const Profile = ({photo,name,follow,word}) => {

  return(
    <Fragment>
      <div className="profile__container">
        <div className="box2">
          <img src={photo} alt={name} className="profile__photo"/>
        </div>
        <div className="profile__text">
        <h1 className="profile__name">{name}</h1>
        <p className="profile__follows">{word} {follow}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile;