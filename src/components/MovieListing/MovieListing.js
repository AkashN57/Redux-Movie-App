import React from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import MoviesCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import './MovieListing.scss'

function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MoviesCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h1 className="error-text">Welcome to Movie App</h1>
        <h3 className="error-text-h3">Search for Movie Names</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;
