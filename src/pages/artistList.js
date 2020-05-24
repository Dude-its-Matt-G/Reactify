import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LayoutList from '../components/layout-artistList';
import Currently from '../components/currently';
import '../pages/pages.scss';
import useArtist from '../context/artist';
import Card from '../components/card';

const ArtistList = (props) => {
  const {artist} = useArtist();
  console.log(artist)

  const content = artist.map((data) => (
      <Card key={data.id} 
      name={data.name} id={data.id} route={'/artist/'}
      image={data.images.length > 0 ? data.images[0].url : '/images/Spotify.jpg'}
      genres={data.genres[0]}
      />
))

  return(
    <Fragment>
      <LayoutList show="show">
        <div className="page__container">
          <div className="home__titles">
            <h1 className="home__h1">Artist</h1>
          </div>
          <div className="home__text--container--currently">
            <Currently search={artist.map((data)=>(data.genres[1]))}/>
          </div>
          <div className="link__container">
            <p className="link--p"><Link to='/' className="link">Home ></Link> <strong>Artists</strong></p>
          </div>
          <div className="line"></div>
          </div>
          <div className="artist-list">
            {content}
        </div>  
      </LayoutList>
    </Fragment>
  )
}

export default ArtistList;