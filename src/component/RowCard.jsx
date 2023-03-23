import React from "react";
import "../css/RowCard.css";

function RowCard(props) {
  const { movieObject, isLargeRow } = props;
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row-card" key={movieObject.id}>
      <img
        src={`${base_url}${
          isLargeRow ? movieObject.poster_path : movieObject.backdrop_path
        }`}
        alt={movieObject.name}
      />
    </div>
  );
}

export default RowCard;
