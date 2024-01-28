import "./Reviews.scss";

function Reviews() {
  return (
    <div className="review-form__wrap">
      <form className="review-form">
        <label>Add Your Review</label>
        <textarea name="Review" id="Review" placeholder="Review"></textarea>

        <button>Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
