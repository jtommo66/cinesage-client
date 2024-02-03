import "./SingleMovie.scss";
import Reviews from "../Reviews/Reviews";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Popup from "reactjs-popup";

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
          <div className="single-movie__inner-wrap">
            <div className="single-movie__director-wrap">
              {singleMovie.director.map((director, i) => {
                return (
                  <h3 key={i} className="single-movie__director">
                    {director}
                  </h3>
                );
              })}
            </div>
            <div className="single-movie__genre-wrap">
              {singleMovie.genre.map((genre, i) => {
                return (
                  <h3 key={i} className="single-movie__genre">
                    {genre}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="single-movie__trailer-wrap">
        <Popup
          trigger={<button className="button"> Trailer</button>}
          position="top center"
        >
          <div className="trailer">
            <iframe
              className="trailer__window"
              src={singleMovie.trailer}
              title={singleMovie.title}
              allowFullScreen
            ></iframe>
          </div>
        </Popup>
      </div>
      <h3 className="single-movie__description">{singleMovie.synopsis}</h3>
      <div className="single-movie__reviews-wrap">
        <Reviews singleMovie={singleMovie} />
      </div>
    </main>
  );
}

export default SingleMovie;
