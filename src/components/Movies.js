import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map(item => {
    const displayGenre = item.genres.map(genre =>{
      return <li key={genre}>{genre}</li>
    })
    return (
    <div key={item.title}>
      <h3>{item.title}</h3>
      <h4>{item.time}</h4>
      <ul>
        {displayGenre}
      </ul>
    </div>)
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;
