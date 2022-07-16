import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movie = movies.map((movie) => movie);

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=12703b02c36476b0b7413bc8dc2a926e`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const values = { movies };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
