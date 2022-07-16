import React from "react";
import { useMovieContext } from "../../context/MovieContextProvider";
import "./moviedetail.css";
// import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  //   const { state } = useLocation();
  const { movies } = useMovieContext();
  console.log(movies);
  return <div>ads</div>;
};

export default MovieDetail;
