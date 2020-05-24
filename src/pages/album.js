import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout";
import "../pages/pages.scss";
import { spotyArtist, header } from "../config";
import useAlbums from "../context/album";
import Profile from "../components/profile";
import Tracks from "../components/tracks_container";
import TrackSingle from "../components/trackSingle";

const Album = (props) => {
  const { albums } = useAlbums();
  const { id } = useParams();
  console.log(id);

  const [disco, setDisco] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getDataTheAlbum();
  }, [id]);

  useEffect(() => {
    getTheTracks();
  }, []);

  const getDataTheAlbum = async () => {
    const datas = await fetch(`${spotyArtist.url3}${id}`, { headers: header });
    const lp = await datas.json();
    setDisco(lp);
    console.log(lp);
  };

  const getTheTracks = async () => {
    const datos = await fetch(`${spotyArtist.url3}${id}/tracks?limit=50`, {
      headers: header,
    });
    const results = await datos.json();
    const songs = results.items;
    setTracks(songs);
    console.log(songs);
  };

  const cantidadDiscos = tracks.filter((track) => {
    return track.disc_number
  })
  console.log(cantidadDiscos)

/*   const cd1 = tracks.filter((track) => {
    return track.disc_number === 1
  })

  const cd2 = tracks.filter((track) => {
    return track.disc_number === 1
  })

  const cd3 = tracks.filter((track) => {
    return track.disc_number === 3
  }) */

    const list = tracks.map((data) => (
    <TrackSingle key={data.id} 
    name={data.name} id={data.id} 
    url={data.preview_url}
    />
))

 
  // console.log(list1);

  /*  const FirstCd = list1.map((data) => (
    <TrackSingle key={data.id} 
    name={data.name} id={data.id} 
    url={data.preview_url}
    />
  ))
  console.log (FirstCd); */

  return (
    <Fragment>
      <Layout>
        <div className="page__container">
          <div>
            <Profile
              photo={disco.images ? disco.images[0].url : "/images/Spotify.jpg"}
              name={disco.name}
            />
          </div>
          <div className="link__container">
            <p className="link--p">
              <Link to="/" className="link">
                Home >
              </Link>
              <Link to="/artistlist" className="link">
                Artists >
              </Link>
              <Link to="/artist/:id" className="link">
                Artista
              </Link>
              <strong>{props.album}</strong>
            </p>
          </div>
          <div className="line"></div>
          <div className="list">
            {/*  <Tracks content={list} cd={tracks.disc_number}/> */}
            {list}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Album;
