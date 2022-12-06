import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { getReviews } from "../Utils/api";
import { Link, Route, Routes } from "react-router-dom";
import { IndividualReview } from "./IndividualReview";

export const ReviewsList = () => {
  const [reviews, setReviews] = useState([{}]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);
  return (
    <section>
      <h2>Reviews</h2>
      <section>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <Link to={`/review/${review.review_id}`}>
                  <h3>{review.title}</h3>
                </Link>
                <p> Game designed by: {review.designer}</p>
                <img src={review.review_img_url} alt="Review" />
                <p>Review by: {review.owner}</p>
                <p>Category: {review.category}</p>
                <p>Votes: {review.votes}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
