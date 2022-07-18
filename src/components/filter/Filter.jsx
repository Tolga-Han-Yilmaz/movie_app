import { useState } from "react";
import "./filter.css";
import { useMovieContext } from "../../context/MovieContextProvider";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();

  const { searchMovies, search, setShowFilter, getMovies } = useMovieContext();
  const [query, setQuery] = useState("");
  const searchHandle = (e) => {
    setQuery(e.target.value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    searchMovies(query);
    setShowFilter(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-center filter">
        <form onSubmit={handleFilter}>
          <input
            className="p-1"
            type="text"
            placeholder="Search a movie"
            value={query}
            onChange={(e) => searchHandle(e)}
          />
          <button type="button" className="btn btn-outline-dark">
            Search
          </button>
        </form>
      </div>
      <div className="container moviecard my-2">
        <div className="row">
          {search?.map((movie) => {
            return (
              <div
                className=" card col-xl-3 col-lg-4 col-md-6 col-cm-12"
                key={movie.id}
                onClick={() => getMovies(movie.id, navigate)}
              >
                <div className="div-img">
                  <img
                    className="card-img-top"
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${
                      movie.poster_path !== null
                        ? movie.poster_path
                        : "yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg"
                    }`}
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
    </div>
  );
};

export default Filter;
