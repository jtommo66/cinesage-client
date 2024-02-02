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
    setSelectedGenreList(event.target.value);
  };

  const changeKeyword = (event) => {
    setSelectedKeywordList(event.target.value);
  };

  let randomMovies = [];

  if (movieList) {
    randomMovies = chooseRandom(movieList, 20);
  }

  const prizes = randomMovies.map((movie) => {
    return { image: movie.image };
  });

  const winPrizeIndex = 0;

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id:
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : generateId(),
  }));

  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length;
  // const prizeIndex = prizes.length + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log("🥳 Prize defined! 🥳");
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
      <div className="roulette__wheel-wrap">
        {prizes && (
          <RoulettePro
            prizes={prizeList}
            prizeIndex={prizeIndex}
            start={start}
            onPrizeDefined={handlePrizeDefined}
          />
        )}
        <button className="roulette__button" onClick={handleStart}>
          Start
        </button>
      </div>
    </main>
  );
};

export default RouletteWheel;
