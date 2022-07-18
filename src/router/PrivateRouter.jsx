import { Navigate, Outlet } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";

const PrivateRouter = () => {
  // eslint-disable-next-line no-unused-vars
  const { currentUser } = useMovieContext();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
