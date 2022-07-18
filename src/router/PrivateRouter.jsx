import { Navigate, Outlet } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";

const PrivateRouter = () => {
  const { showBtn, currentUser } = useMovieContext();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
