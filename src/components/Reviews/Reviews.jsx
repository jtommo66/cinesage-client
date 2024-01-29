import "./Reviews.scss";

function Reviews() {
  return (
    <div className="review-form__wrap">
      <form className="review-form">
        <label className="review-form__title">Add Your Review</label>
        <textarea
          className="review-form__input"
          name="Review"
          id="Review"
          placeholder="Add a review"
        ></textarea>

        <button className="review-form__button">Post</button>
      </form>
    </div>
  );
}

export default Reviews;
