import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { getReviews, getSortedReviews } from "../Utils/api";
import { Link } from "react-router-dom";
import thumbsIcon from "../images/thumbs-up.svg";

export const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("created at");

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelection = (e) => {
    setSortBy(e.target.textContent);
    setOpen(!open);
  };

  useEffect(() => {
    if (sortBy === "created at") {
      getReviews().then(({ reviews }) => {
        setReviews(reviews);
      });
    } else {
      getSortedReviews(sortBy).then(({ reviews }) => {
        setReviews(reviews);
      });
    }
  }, [sortBy]);

  return (
    <section className="bg-gray-300">
      <h2 className="text-center pt-4 font-bold text-3xl underline ">
        Reviews
      </h2>
      <section className="h-10">
        <span className=" inset-y-40 right-0 inline-flex">
          <button
            onClick={handleOpen}
            className="bg-gray-700 ml-60  p-1 rounded-lg w-20 mr-10"
          >
            {sortBy === "created at" ? "sort by..." : `sorted by: ${sortBy}`}
          </button>
          {open ? (
            <ul className="bg-gray-500 menu p-1 rounded-2xl">
              <li className="menu-item" onClick={handleSelection}>
                owner
              </li>
              <li className="menu-item" onClick={handleSelection}>
                title
              </li>
              <li className="menu-item" onClick={handleSelection}>
                created at
              </li>
              <li className="menu-item" onClick={handleSelection}>
                category
              </li>
              <li className="menu-item" onClick={handleSelection}>
                votes
              </li>
              <li className="menu-item" onClick={handleSelection}>
                designer
              </li>
              <li className="menu-item" onClick={handleSelection}>
                comment count
              </li>
            </ul>
          ) : null}
        </span>
      </section>

      <section>
        <ul>
          {reviews.map((review) => {
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
      </section>
    </section>
  );
};
