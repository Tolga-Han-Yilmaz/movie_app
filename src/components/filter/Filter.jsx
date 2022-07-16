import React from "react";
import "./filter.css";

const Filter = () => {
  return (
    <div className="d-flex justify-content-center filter">
      <form>
        <input className="p-1" type="text" placeholder="Search a movie" />
        <button type="button" className="btn btn-outline-dark">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
