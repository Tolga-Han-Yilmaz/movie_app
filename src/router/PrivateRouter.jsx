import { Navigate, Outlet } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";

const PrivateRouter = () => {
  const { showBtn } = useMovieContext();

  return showBtn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
