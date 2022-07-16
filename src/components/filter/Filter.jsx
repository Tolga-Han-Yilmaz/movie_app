import { useEffect, useState } from "react";
import "./filter.css";
import axios from "axios";

const Filter = ({ movies, setMovies, searchMovie }) => {
  // const [filterText, setFilterText] = useState("");
  // const [load, setLoad] = useState(false);

  // const url = `https://api.themoviedb.org/3/search/movie?api_key=12703b02c36476b0b7413bc8dc2a926e&query=Lightyear`;

  // const handleFilter = async (e) => {
  //   try {
  //     const res = await axios(url);
  //     const data = await res.data.results[0];
  //     console.log(data);
  //     setMovies(data);
  //     setLoad(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   handleFilter();
  //   setLoad(true);
  // }, []);
  // if (!load) {
  //   return (
  //     <div>
  //       {/* <ReactLoading type="spin" color="black" /> */}
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  const handleFilter = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center filter">
      <form onSubmit={handleFilter}>
        <input
          className="p-1"
          type="text"
          placeholder="Search a movie"
          // value={filterText}
          onChange={searchMovie}
        />
        <button type="button" className="btn btn-outline-dark">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
