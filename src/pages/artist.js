import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/layout';
import '../pages/pages.scss';
import { spotyArtist, header } from '../config';
import Card from '../components/card';
import Profile from '../components/profile';
import useAlbums from '../context/album';

const Artist = (props) => {
  const {id} = useParams();
  console.log(id);

  const [profile, setProfile] = useState([]);
  const [album, setAlbum] = useState([]);
  const { setAlbums } = useAlbums();


  useEffect(() => {
    getDataProfile()
    getDataAlbum()
  },[]);

  const getDataProfile = async () => {
    const data = await fetch(`${spotyArtist.url2}${id}`,{headers:header})
    const artist = await data.json()
    setProfile(artist)
    console.log(artist)
  }

  useEffect(() => {
    getDataAlbum()
  },[id]);

  const getDataAlbum = async () => {
    const datos = await fetch(`${spotyArtist.url2}${id}/albums`,{headers:header})
    const cd = await datos.json()
    const disco = cd.items
    setAlbum(disco)
    setAlbums(disco)
    console.log(disco)
  }

  const content = album.map((data) => (
    <Card key={data.id} 
    name={data.name} id={data.id} route={'/album/'}
    image={data.images.length > 0 ? data.images[0].url : '/images/Spotify.jpg'}
    year={data.total_tracks}
    />
))
    
  

  return(
    <Fragment>
      <Layout>
        <div className="page__container">
          <div>
          </div>
          <div>
           <Profile 
           name={profile.name}
           photo={profile.images ? profile.images[0].url : '/images/Spotify.jpg'}
           word='Followers'
            />
          </div>
          <div className="link__container">
          <p className="link--p"><Link to='/' className="link">Home ></Link>
          <Link to='/artistlist' className="link">Artists ></Link><strong>{props.artist}</strong></p>
          </div>
          <div className="line"></div>
          <div className="artist-list">
            {content}
          </div>
        </div>  
      </Layout>
    </Fragment>
  )
}

export default Artist;