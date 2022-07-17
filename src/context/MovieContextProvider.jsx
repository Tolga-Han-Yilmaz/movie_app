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
  const [search, setSearch] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  //  details
  const getMovies = async (id, navigate) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=12703b02c36476b0b7413bc8dc2a926e`
      );
      const data = res.data;
      setDetailMovies(data);
      navigate(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // search
  //
  const searchMovies = async (query) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=12703b02c36476b0b7413bc8dc2a926e&query=${query}`
      );
      const data = res.data.results;
      setSearch(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    showBtn,
    setShowBtn,
    getMovies,
    detailMovies,
    searchMovies,
    search,
    setSearch,
    showFilter,
    setShowFilter,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
