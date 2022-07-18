import "./App.css";
import MovieContextProvider from "./context/MovieContextProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MovieContextProvider>
      <AppRouter />
      <ToastContainer />
    </MovieContextProvider>
  );
}

export default App;
