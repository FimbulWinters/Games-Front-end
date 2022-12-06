import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { getReviews } from "../Utils/api";

export const ReviewsList = () => {
  const [reviews, setReviews] = useState([{}]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, [reviews]);
  return (
    <section>
      <h2>Reviews</h2>
      <section>
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.title}>
                <h3>{review.title}</h3>
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
