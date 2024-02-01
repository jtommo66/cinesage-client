import "./RouletteWheel.scss";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import axios from "axios";
import { useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function RouletteWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const [movieList, setMovieList] = useState(null);
  const [genreList, setGenreList] = useState(null);
  const [selectedGenreList, setSelectedGenreList] = useState(null);
  const [selectedKeywordList, setSelectedKeywordList] = useState(null);
  const [keywordList, setKeywordList] = useState(null);

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

  const randomMovies = chooseRandom(movieList, 10);
  const randomGenres = chooseRandom(genreList, 10);
  const randomKeywords = chooseRandom(keywordList, 10);

  const rouletteDataAll = randomMovies.map((movie, i) => {
    return {
      option: movie.title,
      style: { backgroundColor: "maroon", textColor: "white", fontSize: 15 },
    };
  });

  const rouletteDataGenre = randomGenres.map((movie, i) => {
    return {
      option: movie.title,
      style: { backgroundColor: "maroon", textColor: "white", fontSize: 15 },
    };
  });

  const rouletteDataKeyword = randomKeywords.map((movie, i) => {
    return {
      option: movie.title,
      style: { backgroundColor: "maroon", textColor: "white", fontSize: 15 },
    };
  });

  const handleSpinClickAll = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * rouletteDataAll.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const handleSpinClickGenre = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(
        Math.random() * rouletteDataGenre.length
      );
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const handleSpinClickKeyword = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(
        Math.random() * rouletteDataKeyword.length
      );
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
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
          <option key="blank-select" value="null">
            Select Keyword
          </option>
          {keywordList.map((keyword) => (
            <option key={keyword.id} value={keyword.keyword}>
              {keyword.keyword}
            </option>
          ))}
        </select>
      </div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={rouletteDataAll}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className="roulette__button" onClick={handleSpinClickAll}>
        SPIN
      </button>
    </main>
  );
}

export default RouletteWheel;
