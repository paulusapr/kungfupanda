import React from "react";
import { MovieType } from "interfaces/movie";

export const MovieDetail = (props: MovieType) => {
  return (
    <div className="movie-detail">
      <img src={props?.poster} alt='movie-picture' />
      <h3>
        {props?.title} ({props?.year})
      </h3>
      <div className="author">
        <div className="dt-author">
          <h4>Director:</h4>
          <h4>{props?.director}</h4>
        </div>
        <div className="dt-author">
          <h4>Casts:</h4>
          <h4>{props?.casts}</h4>
        </div>
        <div className="dt-author">
          <h4>Genre:</h4>
          <h4>{props?.genre}</h4>
        </div>
      </div>
    </div>
  );
};
