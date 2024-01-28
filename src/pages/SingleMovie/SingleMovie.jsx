import "./SingleMovie.scss";
import SingleMovie from "../../components/SingleMovie/SingleMovie";

const SingleMoviePage = () => {
  return (
    <main className="single-movie-page">
      <div className="single-movie-page__container">
        <SingleMovie />
      </div>
    </main>
  );
};

export default SingleMoviePage;
