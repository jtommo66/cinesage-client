import "./App.scss";
import Roulette from "../pages/Roulette/Roulette";
import Home from "../pages/Home/Home";
import SingleMovie from "../pages/SingleMovie/SingleMovie";
import MovieList from "../pages/MovieList/MovieList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
