import "./MovieList.scss";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const URL = process.env.url;

function MovieList() {
  const { movieId } = useParams();
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await axios.get(`${API_URL}/movies`);
        setMovieList(movies.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movieList) {
    return <main>Finding Movies...</main>;
  }

  return (
    <main className="movie-list">
      {movieList.map((movie) => (
        <article key={movie.id} className="movie-list__movie">
          <Link to={`/movies/${movie.id}`}>
            <img
              className="movie-list__movie-image"
              src={movie.image}
              alt="movie poster"
            />
          </Link>
          <h2 className="movie-list__movie-title">{movie.title}</h2>
        </article>
      ))}
    </main>
  );
}

export default MovieList;
