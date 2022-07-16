import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const MovieContextProvider = ({ children }) => {};

export default MovieContextProvider;
