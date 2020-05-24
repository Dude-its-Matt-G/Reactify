import React from 'react';
import '../tracks_container/track.scss';
import useAudio from '../../audioHooks';

const TrackSingle = ({url, cd, name}) => {
  const [playing, toggle] = useAudio(url);

  return(
    <section>
      <div className="track__container">
        <div className="track__box">
          <div className="track__container--button">
            <button className="track--button" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
          </div>
          <div className="track__container--name">
            <p className="track--name">{name}</p>
          </div>
        </div>
        <div className="track__container--img">
          <i class="far fa-star"></i>
          </div>    
      </div>
    </section>
  )
}

export default TrackSingle;






