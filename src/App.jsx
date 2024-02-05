import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoulettePage from "./pages/Roulette/Roulette";
import HomePage from "./pages/Home/Home";
import SingleMoviePage from "./pages/SingleMovie/SingleMovie";
import MovieListPage from "./pages/MovieList/MovieList";
import Header from "./components/Header/Header";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roulette" element={<RoulettePage />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
