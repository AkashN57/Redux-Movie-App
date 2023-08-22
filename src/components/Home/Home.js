import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import { getSearch } from "../../features/movies/searchSlice";
function Home() {

  const MovieText =  useSelector(getSearch);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${MovieText}&type=movie`)
        .catch((err) => console.log(err));
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, [MovieText]);

  return (
    <div>
      <div className="banner-image">
        <MovieListing />
      </div>
    </div>
  );
}

export default Home;
