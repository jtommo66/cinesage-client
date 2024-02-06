import "./Home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function Home() {
  const [singleMovie, setSingleMovie] = useState(null);
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const randomMovieId = Math.floor(Math.random() * 100) + 1;

    const fetchMovie = async () => {
      try {
        const movie = await axios.get(`${API_URL}/movies/${randomMovieId}`);
        setSingleMovie(movie.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMovieList = async () => {
      try {
        const movies = await axios.get(`${API_URL}/movies`);
        setMovieList(movies.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
    fetchMovieList();
  }, []);

  if (!singleMovie) {
    return <p>Loading...</p>;
  }

  if (!movieList) {
    return <p>Loading Movies...</p>;
  }
  const chooseRandom = (arr, num = 1) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }
      res.push(arr[random]);
      i++;
    }
    return res;
  };

  let scrollList = chooseRandom(movieList, 10);
  return (
    <main className="home">
      <div className="home__text-wrap">
        <h1 className="home__header">Welcome to CineSage!</h1>
        <h2 className="home__text">Struggling to pick a movie? Let us help!</h2>
      </div>
      <div className="home__wrap">
        <div className="home__image-wrap">
          <img
            className="home__image"
            src={singleMovie.image}
            alt="movie poster"
          />
        </div>
        <div className="home__info-wrap">
          <h2 className="home__title">{singleMovie.title} </h2>
          <div className="home__inner-wrap">
            <div className="home__director-wrap">
              {singleMovie.director.map((director, i) => {
                return (
                  <h3 key={i} className="home__director">
                    {director}
                  </h3>
                );
              })}
            </div>
            <div className="home__genre-wrap">
              {singleMovie.genre.map((genre, i) => {
                return (
                  <h3 key={i} className="home__genre">
                    {genre}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="home__trailer-wrap">
        <Popup
          trigger={<button className="button"> Trailer</button>}
          position="top center"
        >
          <div className="trailer">
            <iframe
              className="trailer__window trailer__window-large"
              src={singleMovie.trailer}
              title={singleMovie.title}
              allowFullScreen
            ></iframe>
          </div>
        </Popup>
      </div>
      <h3 className="home__description">{singleMovie.synopsis}</h3>
      <div className="movie-scroller">
        {scrollList.map((movie, i) => {
          return (
            <Link to={`/movies/${movie.id}`}>
              <div key={movie.id} className="movie-scroller__item-wrap">
                <article className="movie-scroller__item">
                  <img className="movie-scroller__image" src={movie.image} />
                </article>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Home;
