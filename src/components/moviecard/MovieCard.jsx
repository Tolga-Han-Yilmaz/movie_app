import React from "react";
// import { Link } from "react-router-dom";
import "./moviecard.css";
// import { useNavigate } from "react-router-dom";

const MovieCard = ({ movies, setMovies }) => {
  // const navigate = useNavigate();

  console.log(movies);
  // https://www.themoviedb.org/t/p/w600_and_h900_bestv2/x6tTeF2cSwinSXBLqRwy7Byiqy1.jpg
  return (
    <div className="moviecard my-2">
      <div className="row">
        {movies?.map((movie) => {
          return (
            <div
              className=" card col-xl-3 col-lg-4 col-md-6 col-cm-12"
              key={movie.id}
            >
              <img
                className="card-img-top"
                src={
                  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` +
                  movie.poster_path
                }
                alt={movie.title}
              />
              <div className="card-body bg-warning">
                <h5 className="card-text">
                  <button
                  // onClick={() =>
                  //   navigate("detail", { state: movie, replace: false })
                  // }
                  >
                    {movie.title}
                  </button>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;

// {movies.map((movie, index) => {
//   return (
//     <div className="card" key={index}>
//       {/* <img src={movie.poster_path} className="card-img-top" alt="..." /> */}
//       <div className="card-body">
//         <h5 className="card-text">{movie.title}</h5>
//       </div>
//     </div>
//   );
// })}
