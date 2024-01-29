import "./MovieList.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function MovieList() {
  const { movieId } = useParams;
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await axios.get(`${API_URL}/movies`);
        setMovieList(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!MovieList) {
    return <main>Finding Movies...</main>;
  }

  return <main></main>;
}

export default MovieList;
