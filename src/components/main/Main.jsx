import { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import Filter from "../filter/Filter";
import MovieCard from "../moviecard/MovieCard";
import ReactLoading from "../loading.gif/Loading";

// 12703b02c36476b0b7413bc8dc2a926e

const Main = () => {
  const [movies, setMovies] = useState({});
  const [load, setLoad] = useState(false);
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=12703b02c36476b0b7413bc8dc2a926e";

  const getResponse = async () => {
    try {
      const res = await axios(url);
      const data = await res.data.results;
      setMovies(data);
      setLoad(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResponse();
    setLoad(true);
  }, []);
  if (!load) {
    return (
      <div>
        <ReactLoading type="spin" color="black" />
      </div>
    );
  }
  return (
    <div>
      <div className="search">
        <Filter />
      </div>
      <div className="container">
        <MovieCard movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
};

export default Main;
