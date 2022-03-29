import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map(item => {
    const displayMovies = item.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })
    return(
      <div key={item.name}>
        <h3>{item.name}</h3>
        <ul>
          {displayMovies}
        </ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {displayDirectors}
  </div>
  );
}

export default Directors;
