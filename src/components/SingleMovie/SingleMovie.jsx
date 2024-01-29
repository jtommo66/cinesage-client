import "./SingleMovie.scss";
import Reviews from "../Reviews/Reviews";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function SingleMovie() {
  const [singleMovie, setSingleMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await axios.get(`${API_URL}/movies/${movieId}`);
        setSingleMovie(movie.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!singleMovie) {
    return <main>Finding Movie...</main>;
  }

  return (
    <main className="single-movie">
      <div className="single-movie__wrap">
        <div className="single-movie__image-wrap">
          <img
            className="single-movie__image"
            src={singleMovie.image}
            alt="movie poster"
          />
        </div>
        <div className="single-movie__info-wrap">
          <h2 className="single-movie__title">{singleMovie.title} </h2>
          <h3 className="single-movie__director">{singleMovie.director}</h3>
          <h3 className="single-movie__genre">{singleMovie.genre}</h3>
        </div>
      </div>
      <h3 className="single-movie__description">{singleMovie.synopsis}</h3>
      <div className="single-movie__reviews-wrap">
        <Reviews />
      </div>
    </main>
  );
}

export default SingleMovie;
