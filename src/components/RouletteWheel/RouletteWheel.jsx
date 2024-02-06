import "./RouletteWheel.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const API_URL = process.env.REACT_APP_API_URL;

const RouletteWheel = () => {
  const [movieList, setMovieList] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [selectedGenreList, setSelectedGenreList] = useState(null);
  const [selectedKeywordList, setSelectedKeywordList] = useState(null);
  const [start, setStart] = useState(false);

  const [offset, setOffset] = useState(0);

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

  const changeGenre = (event) => {
    console.log(event.target.value);
    setStart(false);
    setSelectedGenreList(event.target.value);
  };

  const changeKeyword = (event) => {
    setSelectedKeywordList(event.target.value);
  };

  if (!movieList || !keywordList) {
    return <p>Loading</p>;
  }

  let newList = movieList;

  if (selectedGenreList) {
    newList = newList.filter((movie) => {
      return movie.genre.includes(selectedGenreList);
    });
  }
  if (selectedKeywordList) {
    newList = newList.filter((movie) => {
      return movie.keyword.includes(selectedKeywordList);
    });
  }

  if (selectedGenreList === null && selectedKeywordList === null) {
    newList = chooseRandom(movieList, 10);
  }

  newList = [
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
    ...newList,
  ];

  newList = newList.map((prize, index) => {
    return {
      ...prize,
      id: index,
    };
  });

  if (newList.length % 2 !== 0) {
    newList.pop();
  }

  const winPrizeIndex = 0;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log("🥳 Enjoy your movie! 🥳");
  };

  return (
    <main className="roulette">
      <div className="roulette__filter-wrap">
        <select
          className="roulette__filter-option"
          onChange={changeGenre}
          id="genres"
          name="genres"
        >
          <option key="blank-select" value="null">
            Select Genre
          </option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.genre}>
              {genre.genre}
            </option>
          ))}
        </select>
        <select
          className="roulette__filter-option"
          onChange={changeKeyword}
          id="keywords"
          name="keywords"
        >
          <option key="blank-select">Select Keyword</option>
          {keywordList.map((keyword) => (
            <option key={keyword.id} value={keyword.keyword}>
              {keyword.keyword}
            </option>
          ))}
        </select>
      </div>
      <div className="roulette">
        <div className="roulette__slider">
          <div
            className="roulette__image-container"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {newList.map((movie) => (
              <img
                className="roulette__image"
                key={movie.id}
                src={movie.image}
                alt={movie.title}
              />
            ))}
          </div>
        </div>
        <div className="roulette__button-wrap">
          <button
            className="roulette__button"
            onClick={() => setOffset((prevOffset) => prevOffset + 9895)}
          >
            Next
          </button>
        </div>
      </div>

      {/* <div className="roulette__wheel-wrap">
        <>
          {movieList && (
            <>
              <RoulettePro
                start={start}
                prizes={newList}
                prizeIndex={Math.floor(Math.random() * newList.length - 1)}
                spinningTime={3}
              />
              <button className="roulette__button" onClick={handleStart}>
                Start
              </button>
            </>
          )}
        </>
      </div> */}
    </main>
  );
};

export default RouletteWheel;
