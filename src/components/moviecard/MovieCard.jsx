import React from "react";
// import { Link } from "react-router-dom";
import "./moviecard.css";
import { useNavigate, Link } from "react-router-dom";
import { useMovieContext } from "../../context/MovieContextProvider";

const MovieCard = ({ movies, setMovies }) => {
  const navigate = useNavigate();
  const { getMovies } = useMovieContext();

  return (
    <div className="moviecard my-2">
      <div className="row">
        {movies?.map((movie) => {
          return (
            <div
              className=" card col-xl-3 col-lg-4 col-md-6 col-cm-12"
              key={movie.id}
              onClick={() => getMovies(movie.id, navigate)}
            >
              <div className="div-img">
                <img
                  className="card-img-top"
                  src={
                    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` +
                    movie.poster_path
                  }
                  alt={movie.title}
                />
                {/* <div className="overview">
                  <h5>overview</h5>
                  <p>{movie.overview}</p>
                </div> */}
                <div className="card-body bg-warning">
                  <h5 className="card-text">{movie.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
