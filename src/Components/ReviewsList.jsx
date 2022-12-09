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
  const [orderBy, setOrderBy] = useState("DESC");
  const [orderOpen, setOrderOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getReviews()
      .then(({ reviews }) => {
        setReviews(reviews);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOrderOpen = () => {
    setOrderOpen(!orderOpen);
  };

  const handleSelection = (e) => {
    setSortBy(e.target.textContent);
    setOpen(!open);
  };

  const handleOrderSelection = (e) => {
    setOrderBy(e.target.textContent);
    setOrderOpen(!orderOpen);
  };

  useEffect(() => {
    if (sortBy === "created at" && orderBy === "DESC") {
      console.log("if");
      getReviews()
        .then(({ reviews }) => {
          setReviews(reviews);
        })
        .catch(() => {
          setIsError(true);
        });
    } else if (sortBy === "created at" && orderBy === "ASC") {
      console.log("else if");
      getSortedReviews("created_at", orderBy)
        .then(({ reviews }) => {
          setReviews(reviews);
        })
        .catch(() => {
          setIsError(true);
        });
    } else {
      console.log("else");
      getSortedReviews(sortBy, orderBy)
        .then(({ reviews }) => {
          setReviews(reviews);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [sortBy, orderBy]);

  return isError ? (
    <section>
      <p>Oops something went wrong</p>{" "}
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        try again
      </button>
    </section>
  ) : (
    <section className="bg-gray-300">
      <h2 className="text-center pt-4 font-bold text-3xl underline ">
        Reviews
      </h2>
      <section className="h-10">
        <span className=" inset-y-40 right-0 inline-flex">
          <button
            onClick={handleOrderOpen}
            className="bg-gray-700 ml-60  p-1 rounded-lg w-20 mr-10"
          >
            {orderBy === "DESC"
              ? "ordered by: Descending"
              : "sorted by: Ascending"}
          </button>
          {orderOpen ? (
            <ul className="bg-gray-500 menu p-1 rounded-2xl">
              <li className="menu-item" onClick={handleOrderSelection}>
                DESC
              </li>
              <li className="menu-item" onClick={handleOrderSelection}>
                ASC
              </li>
            </ul>
          ) : null}
        </span>
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
