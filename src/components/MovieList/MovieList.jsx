import "./MovieList.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function MovieList() {
  const [movieList, setMovieList] = useState(null);
  const [genreList, setGenreList] = useState(null);
  const [keywordList, setKeywordList] = useState(null);
  const [selectedGenreList, setSelectedGenreList] = useState(null);
  const [selectedKeywordList, setSelectedKeywordList] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await axios.get(`${API_URL}/movies`);
        setMovieList(movies.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchGenres = async () => {
      try {
        const genres = await axios.get(`${API_URL}/genres`);
        setGenreList(genres.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchKeywords = async () => {
      try {
        const keywords = await axios.get(`${API_URL}/keywords`);
        setKeywordList(keywords.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKeywords();
    fetchGenres();
    fetchMovies();
  }, []);

  if (!movieList) {
    return <main>Finding Movies...</main>;
  }

  if (!genreList) {
    return <main>Finding Genres...</main>;
  }

  if (!keywordList) {
    return <main>Finding Keywords...</main>;
  }

  const changeGenre = (event) => {
    setSelectedGenreList(event.target.value);
  };

  let genreSelected;

  if (!selectedGenreList) {
    genreSelected = movieList;
  } else {
    genreSelected = movieList.filter((movie) => {
      return movie.genre.includes(selectedGenreList);
    });
  }

  const changeKeyword = (event) => {
    setSelectedKeywordList(event.target.value);
  };

  let keywordSelected;

  if (!selectedKeywordList) {
    keywordSelected = movieList;
  } else {
    keywordSelected = movieList.filter((movie) => {
      return movie.keyword.includes(selectedKeywordList);
    });
  }

  return (
    <main className="movie-list">
      <div className="movie-list__filter-wrap">
        <select
          className="movie-list__filter-option"
          onChange={changeGenre}
          id="genres"
          name="genres"
        >
          <option key="blank-select" value="Select Genre">
            Select Genre
          </option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.genre}>
              {genre.genre}
            </option>
          ))}
        </select>
        <select
          className="movie-list__filter-option"
          onChange={changeKeyword}
          id="keywords"
          name="keywords"
        >
          <option key="blank-select" value="Select Keyword">
            Select Keyword
          </option>
          {keywordList.map((keyword) => (
            <option key={keyword.id} value={keyword.keyword}>
              {keyword.keyword}
            </option>
          ))}
        </select>
      </div>
      {movieList.map((movie) => {
        if (movie.genre.includes(selectedGenreList)) {
          return (
            <article key={movie.id} className="movie-list__movie">
              <div>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="movie-list__movie-image"
                    src={movie.image}
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="movie-list__movie-title-wrap">
                <h2 className="movie-list__movie-title">{movie.title}</h2>
              </div>
            </article>
          );
        }
        if (movie.keyword.includes(selectedKeywordList)) {
          return (
            <article key={movie.id} className="movie-list__movie">
              <div>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="movie-list__movie-image"
                    src={movie.image}
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="movie-list__movie-title-wrap">
                <h2 className="movie-list__movie-title">{movie.title}</h2>
              </div>
            </article>
          );
        } else if (!selectedGenreList && !selectedKeywordList) {
          return (
            <article key={movie.id} className="movie-list__movie">
              <div>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="movie-list__movie-image"
                    src={movie.image}
                    alt={movie.title}
                  />
                </Link>
              </div>
              <div className="movie-list__movie-title-wrap">
                <h2 className="movie-list__movie-title">{movie.title}</h2>
              </div>
            </article>
          );
        }
      })}
    </main>
  );
}

export default MovieList;
