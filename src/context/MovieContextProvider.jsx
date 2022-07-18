import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { userCurrent } from "../firebase";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const MovieContextProvider = ({ children }) => {
  const [detailMovies, setDetailMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    userCurrent(setCurrentUser);
  }, []);

  //  details
  const getMovies = async (id, navigate) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      const data = res.data;
      setDetailMovies(data);
      navigate(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // search
  const searchMovies = async (query) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}`
      );
      const data = res.data.results;
      setSearch(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getMovies,
    detailMovies,
    searchMovies,
    search,
    setSearch,
    showFilter,
    setShowFilter,
    currentUser,
    setCurrentUser,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
