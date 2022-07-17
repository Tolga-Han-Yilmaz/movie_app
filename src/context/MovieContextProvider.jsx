import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const MovieContextProvider = ({ children }) => {
  const [detailMovies, setDetailMovies] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  //  details
  const getMovies = async (id) => {
    try {
      const res = await axios(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=12703b02c36476b0b7413bc8dc2a926e`)
      const data = res.data;
      setDetailMovies(data));
    } catch (error) {
      console.log(error);
    }
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=12703b02c36476b0b7413bc8dc2a926e`
  )
    .then((res) => res.json())
    .then((data) => setDetailMovies(data));

  const values = { showBtn, setShowBtn };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
