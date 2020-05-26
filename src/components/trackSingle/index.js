import React, { useState, useEffect } from "react";
import "../tracks_container/track.scss";
import useAudio from "../../audioHooks";
import useTracks from "../../context/tracks";
import useFavs from "../../context/favs";

const TrackSingle = ({ url, name, id }) => {
  const [playing, toggle] = useAudio(url);
  const [liked, setLiked] = useState(false);
  const [stars, setStars] = useState("far fa-star");
  const { tracks } = useTracks();
  const { updateFavs } = useFavs();
  console.log(tracks);

  const doLike = () => {
    if (!liked) {
      setLiked((prevState) => {
        return { like: !prevState.like };
      });
      setStars("fas fa-star");
    } else {
      setStars("far fa-star");
      setLiked(false);
    }
  };

  return (
    <section>
      <div className="track__container">
        <div className="track__box">
          <div className="track__container--button">
            <button className="track--button" onClick={toggle}>
              {playing ? "Pause" : "Play"}
            </button>
          </div>
          <div className="track__container--name">
            <p className="track--name">{name}</p>
          </div>
        </div>
        <div className="track__container--button-like">
          <button className="track--like" onClick={doLike}>
            <span className="star">
              <i class={stars} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackSingle;
