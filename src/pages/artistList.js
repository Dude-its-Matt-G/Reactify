import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LayoutList from "../components/layout-artistList";
import Currently from "../components/currently";
import "../pages/pages.scss";
import useArtist from "../context/artist";
import Card from "../components/card";
import SearchBar from "../components/search-home";
import useInput from "../context/input";

const ArtistList = () => {
  const { artist } = useArtist();
  console.log(artist);
  const { input } = useInput();

  const content = artist.map((data) => (
    <Card
      key={data.id}
      name={data.name}
      id={data.id}
      route={"/artist/"}
      image={
        data.images.length > 0 ? data.images[0].url : "/images/Spotify.jpg"
      }
      genres={data.genres[0]}
    />
  ));

  return (
    <Fragment>
      <LayoutList show="show">
        <div className="page__container">
          <div className="home__titles">
            <h1 className="home__h1">Artist</h1>
          </div>
          <div className="home__text--container--currently">
            <Currently search={input} />
          </div>
          <div className="home__searchbar">
            <SearchBar
              type="text"
              placeholder="Type the name of your favourite artist"
              name="artist"
              classname="search--artist"
              classnameWrite="search__write"
              button="search__button"
            />
          </div>
          <div className="link__container">
            <p className="link--p">
              <Link to="/" className="link">
                Home >
              </Link>{" "}
              <strong>Artists</strong>
            </p>
          </div>
          <div className="line"></div>
        </div>
        <div>
          <div className="artist-list">{content}</div>
        </div>
      </LayoutList>
    </Fragment>
  );
};

export default ArtistList;
