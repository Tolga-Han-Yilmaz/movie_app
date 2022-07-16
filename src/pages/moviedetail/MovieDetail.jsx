import React from "react";
import "./moviedetail.css";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const { state } = useLocation();
  console.log(state);

  return <div>ads</div>;
};

export default MovieDetail;
