import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map(item =>  {
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
    <h1>Actors Page</h1>
    {displayActors}
  </div>
  );
}

export default Actors;
