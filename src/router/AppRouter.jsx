import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MovieDetail from "../pages/moviedetail/MovieDetail";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import { useMovieContext } from "../context/MovieContextProvider";

const AppRouter = () => {
  const { detailMovies } = useMovieContext();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/" + detailMovies.id} element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
