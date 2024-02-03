import "./Reviews.scss";
import ReactStars from "react-stars";
import React from "react";

function Reviews({ singleMovie }) {
  return (
    <div>
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
      <div>
        {singleMovie.review.map((review, i) => {
          return (
            <article className="review" key={i}>
              <div className="review__wrap">
                <p className="review__by">Reviewed By:</p>
                <div className="review__user-wrap">
                  <p className="review__user-name">{review.userName}</p>
                  <ReactStars
                    count={review.rating}
                    size={18}
                    color1={"#ffd700"}
                  />
                </div>
                <p className="review__text">{review.review}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
