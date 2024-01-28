import "./SingleMovie.scss";
import Reviews from "../Reviews/Reviews";

function SingleMovie() {
  return (
    <main className="single-movie">
      <div className="single-movie__wrap">
        <div className="single-movie__image-wrap">
          <img
            className="single-movie__image"
            src="https://placehold.co/150x200"
            alt="movie poster"
          />
        </div>
        <div className="single-movie__info-wrap">
          <h2 className="single-movie__title">Shaun of the Dead</h2>
          <h3 className="single-movie__director">Directed by Edgar Wright</h3>
          <h3 className="single-movie__genre">Horror, Comedy</h3>
        </div>
      </div>
      <h3 className="single-movie__description">
        The uneventful, aimless lives of a London electronics salesman and his
        layabout roommate are disrupted by the zombie apocalypse.
      </h3>
      <Reviews />
    </main>
  );
}

export default SingleMovie;
