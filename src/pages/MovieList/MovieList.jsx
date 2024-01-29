import "./MovieList.scss";
import MovieList from "../../components/MovieList/MovieList";

const MovieListPage = () => {
  return (
    <main className="movie-list-page">
      <div className="movie-list-page__container">
        <MovieList />
      </div>
    </main>
  );
};

export default MovieListPage;
