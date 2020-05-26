import React from "react";
import "./track.scss";

const TracksContainer = ({ number, children }) => {
  return (
    <section className="tracks-container">
      <h2 className="tracks-container__title">CD {number}</h2>
      {children}
    </section>
  );
};

export default TracksContainer;
