import React, { useState, useEffect } from "react";
import axios from "../utils/Axios";
import requests from "../utils/Requests";
import "../css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  const truncate = function (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  };

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie.name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 200)}</h1>
      </div>
    </header>
  );
}

export default Banner;
