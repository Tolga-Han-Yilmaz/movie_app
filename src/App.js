import "./App.css";
import MovieContextProvider from "./context/MovieContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <MovieContextProvider>
      <AppRouter />
    </MovieContextProvider>
  );
}

export default App;
