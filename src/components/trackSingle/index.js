import React, { useState } from "react";
import "../tracks_container/track.scss";
import useAudio from "../../audioHooks";
import useFavorites from "../../context/favs";

const TrackSingle = ({ url, name, id }) => {
  const [playing, toggle] = useAudio(url);
  const { favorites, setFavorites } = useFavorites();
  const [liked, setLiked] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    return favs.includes(id.toString());
  });
  const [stars, setStars] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    return favs.includes(id.toString()) ? "fas fa-star" : "far fa-star";
  });

  const doLike = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    localStorage.removeItem("favs");

    if (!liked) {
      favs.push(id.toString());
      localStorage.setItem("favs", JSON.stringify(favs));
      setStars("fas fa-star");
      setLiked(true);
    } else {
      localStorage.setItem(
        "favs",
        JSON.stringify(favs.filter((fav) => fav !== id.toString()))
      );
      setStars("far fa-star");
      setLiked(false);
    }
  };

  console.log(favorites);
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
