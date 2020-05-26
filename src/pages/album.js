import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout";
import "../pages/pages.scss";
import { spotyArtist, header } from "../config";
import Profile from "../components/profile";
import TrackSingle from "../components/trackSingle";
import TracksContainer from "../components/tracks_container";
import useTracks from "../context/tracks";
import useAlbums from "../context/album";

const Album = (props) => {
  const { setTheTracks } = useTracks();
  const { id } = useParams();
  console.log(id);
  const { setAlbums } = useAlbums();

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
    setAlbums(lp);
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
    setTheTracks(songs);
  };

  const tracksCd = tracks.reduce((accumulator, track) => {
    const { disc_number } = track;
    const previousSongs = accumulator[disc_number] || [];
    return { ...accumulator, [disc_number]: [...previousSongs, track] };
  }, {});

  const list = Object.keys(tracksCd).map((key) => {
    return (
      <TracksContainer number={key}>
        {tracksCd[key].map((track) => (
          <TrackSingle
            key={track.id}
            name={track.name}
            id={track.id}
            url={track.preview_url}
          />
        ))}
      </TracksContainer>
    );
  });

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
          <div className="list">{list}</div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Album;
