import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory } from "../Utils/api";
import { Link } from "react-router-dom";
import thumbsIcon from "../images/thumbs-up.svg";

export const ReviewsByCategory = () => {
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = useParams();

  useEffect(() => {
    getReviewsByCategory(category.category).then(({ reviews }) => {
      setCategoryReviews(reviews);
    });
  });

  return (
    <section className="bg-gray-300">
      <header>
        <h2 className="text-center pt-4 font-bold text-3xl underline ">
          {category.category}
        </h2>
      </header>

      <main>
        <ul>
          {categoryReviews.map((review) => {
            return (
              <li
                key={review.review_id}
                className="max-w-sm rounded overflow-hidden bg-slate-800 border-4 border-slate-800 clo shadow-2xl m-5 text-zinc-300"
              >
                <img
                  src={review.review_img_url}
                  alt="Review"
                  className="w-full"
                />
                <Link to={`/reviews/${review.review_id}`}>
                  <h3 className="font-bold text-xl m-2 ">{review.title}</h3>
                </Link>
                <p className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2 bg-slate-700">
                  {" "}
                  Game designed by: {review.designer}
                </p>
                <p className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2">
                  Review by: {review.owner}
                </p>
                <p className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2  bg-slate-700">
                  Category: {review.category}
                </p>
                <div>
                  <span className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2">
                    <img
                      className="inline-block mr-1"
                      src={thumbsIcon}
                      alt="thumbs up"
                    />
                    <p className="inline-block">{review.votes}</p>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
