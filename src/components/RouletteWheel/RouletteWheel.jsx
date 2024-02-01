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

  const randomMovies = chooseRandom(movieList, 10);
  const randomGenres = chooseRandom(genreList, 10);
  const randomKeywords = chooseRandom(keywordList, 10);

  const rouletteDataAll = movieList.map((movie, i) => {
    return {
      option: movie.title,
      genre: movie.genre,
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

  const buildWheelSelector = (movie) => {
    console.log(rouletteDataAll);
    if (selectedGenreList) {
      let filteredMovieList = rouletteDataAll.filter((movie) => {
        return movie.genre.includes(selectedGenreList);
      });

      const randomFilteredMovies = chooseRandom(filteredMovieList, 10);
      console.log(filteredMovieList);
      // console.log("Hello");
      return (
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={randomFilteredMovies}
          />
          <button className="roulette__button" onClick={handleSpinClickKeyword}>
            Spin the wheel!
          </button>
        </div>
      );
    }
    // if (movie.genre.includes(selectedGenreList)) {
    //   return (
    //     <div>
    //       <Wheel
    //         mustStartSpinning={mustSpin}
    //         prizeNumber={prizeNumber}
    //         data={rouletteDataAll}
    //       />
    //       <button className="roulette__button" onClick={handleSpinClickAll}>
    //         Spin the wheel!
    //       </button>
    //     </div>
    //   );
    // }
    // if (movie.keyword.includes(selectedKeywordList)) {
    //   return (
    //     <div>
    //       <Wheel
    //         mustStartSpinning={mustSpin}
    //         prizeNumber={prizeNumber}
    //         data={rouletteDataGenre}
    //       />
    //       <button className="roulette__button" onClick={handleSpinClickGenre}>
    //         Spin the wheel!
    //       </button>
    //     </div>
    //   );
    // } else if (selectedGenreList === null && selectedKeywordList === null) {
    //   return (
    //     <div>
    //       <Wheel
    //         mustStartSpinning={mustSpin}
    //         prizeNumber={prizeNumber}
    //         data={rouletteDataKeyword}
    //       />
    //       <button className="roulette__button" onClick={handleSpinClickKeyword}>
    //         Spin the wheel!
    //       </button>
    //     </div>
    //   );
    // }
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
      {selectedGenreList && buildWheelSelector()}
    </main>
  );
}

export default RouletteWheel;
