import React, { useEffect, useState } from "react";
import RowCard from "./RowCard";
import axios from "../utils/Axios";
import "../css/Row.css";

function Row(props) {
  const { title, fetchUrl, isLargeRow = false } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-cards">
        {movies.map((it) => (
          <RowCard movieObject={it} isLargeRow={isLargeRow} />
        ))}
      </div>
    </div>
  );
}

export default Row;
