import "./Reviews.scss";
import ReactStars from "react-stars";
import React from "react";
import UpVote from "../../assets/images/upvote.svg";
import DownVote from "../../assets/images/downvote.svg";

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
          <div className="review-form__submit-wrap">
            <div className="review-form__rating-wrap">
              <label className="review-form__rating-text" for="ratings">
                Select Rating
              </label>
              <select
                className="review-form__rating-dropdown"
                name="rating"
                id="rating"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button className="review-form__button">Post</button>
          </div>
        </form>
      </div>
      <div>
        {singleMovie.review.map((review, i) => {
          return (
            <article className="review" key={i}>
              <div className="review__wrap">
                <div className="review__by-icon-wrap">
                  <p className="review__by">Reviewed By:</p>
                  <div className="review__icon-wrap">
                    <img
                      src={UpVote}
                      alt="up vote icon"
                      className="review__up-vote"
                    />
                    <img
                      src={DownVote}
                      alt="down vote icon"
                      className="review__down-vote"
                    />
                  </div>
                </div>
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
