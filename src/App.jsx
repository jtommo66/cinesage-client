import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoulettePage from "./pages/Roulette/Roulette";
import HomePage from "./pages/Home/Home";
import SingleMoviePage from "./pages/SingleMovie/SingleMovie";
import MovieListPage from "./pages/MovieList/MovieList";
import Header from "./components/Header/Header";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
