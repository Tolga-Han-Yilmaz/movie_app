import React from "react";
import { useMovieContext } from "../../context/MovieContextProvider";
import "./moviedetail.css";

const MovieDetail = () => {
  //   const { state } = useLocation();
  const { detailMovies } = useMovieContext();
  console.log(detailMovies);
  return (
    <div className=" p-5 bg-warning">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` +
                detailMovies.poster_path
              }
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 bg-warning">
            <div className="card-body">
              <h5 className="card-title">{detailMovies.title}</h5>
              <p className="card-text">{detailMovies.overview}</p>
              <p className="card-text">
                <small className="text-muted">
                  <img
                    style={{ width: "100px" }}
                    src={
                      `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` +
                      detailMovies.production_companies[0].logo_path
                    }
                    alt=""
                  />
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
