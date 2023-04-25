import React from "react";
import star from "../assets/star-icon.png";

const InfoForm = ({ data }) => {
  return (
    <div>
      <div className="info-container">
        <img src={data.Poster} className="poster" />
        <div className="information">
          <h1>{data.Title}</h1>
          <div className="rating">
            <h3>{data.imdbRating} / 10</h3>
            <img src={star} className="star" />
          </div>
          <div className="details">
            <span>{data.Rated}</span>
            <span>{data.Year}</span>
            <span>{data.Runtime}</span>
          </div>
          <div className="genre">
            <div>{data.Genre.split(",").join("")}</div>
          </div>
        </div>
      </div>
      <div className="extra">
        <p>
          <span>Plot:</span> {data.Plot}
        </p>
        <p>
          <span>Cast:</span> {data.Actors}
        </p>
      </div>
    </div>
  );
};

export default InfoForm;
