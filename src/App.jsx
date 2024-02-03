import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoulettePage from "./pages/Roulette/Roulette";
import RouletteGenresPage from "./pages/RouletteGenres/RouletteGenres";
import HomePage from "./pages/Home/Home";
import SingleMoviePage from "./pages/SingleMovie/SingleMovie";
import MovieListPage from "./pages/MovieList/MovieList";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roulette" element={<RoulettePage />} />
        <Route path="/roulette/:genre" element={<RouletteGenresPage />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />} />
        <Route path="/movies" element={<MovieListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
