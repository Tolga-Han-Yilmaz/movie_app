import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const movie = true;

  return movie ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
