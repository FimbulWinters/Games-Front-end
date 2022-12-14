import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory, getSortedReviews } from "../Utils/api";
import { Link } from "react-router-dom";
import thumbsIcon from "../images/thumbs-up.svg";

export const ReviewsByCategory = () => {
  const [categoryReviews, setCategoryReviews] = useState([]);

  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("created at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [orderOpen, setOrderOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const category = useParams();

  useEffect(() => {
    getReviewsByCategory(category.category)
      .then(({ reviews }) => {
        setCategoryReviews(reviews);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [category]);

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
      getReviewsByCategory(category.category)
        .then(({ reviews }) => {
          setCategoryReviews(reviews);
        })
        .catch(() => {
          setIsError(true);
        });
    } else if (sortBy === "created at" && orderBy === "ASC") {
      getSortedReviews("created_at", orderBy)
        .then(({ reviews }) => {
          setCategoryReviews(reviews);
        })
        .catch(() => {
          setIsError(true);
        });
    } else {
      getSortedReviews(sortBy, orderBy)
        .then(({ reviews }) => {
          setCategoryReviews(reviews);
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
      <header>
        <h2 className="text-center pt-4 font-bold text-3xl underline ">
          {category.category}
        </h2>
      </header>
      <section className="h-16 grid grid-cols-2 gap-4 grid-rows-1">
        <span className=" col-start-1 bg-gray-500 text-white rounded-lg ml-4 mt-2">
          <button
            onClick={handleOrderOpen}
            className=" p-1  text-sm text-center"
          >
            {orderBy === "DESC"
              ? "ordered by: Descending"
              : "ordered by: Ascending"}
          </button>
          {orderOpen ? (
            <ul className="bg-gray-500 menu p-1 rounded-2xl mt-4">
              <li className="menu-item text-sm" onClick={handleOrderSelection}>
                DESC
              </li>
              <li className="menu-item text-sm" onClick={handleOrderSelection}>
                ASC
              </li>
            </ul>
          ) : null}
        </span>
        <span className=" col-start-2 bg-gray-500 rounded-lg mr-4 mt-2 text-white">
          <button
            onClick={handleOpen}
            className="p-1 text-sm text-white text-center"
          >
            {sortBy === "created at" ? "sort by..." : `sorted by: ${sortBy}`}
          </button>
          {open ? (
            <ul className="bg-gray-500 menu p-1 rounded-2xl mt-8">
              <li className="menu-item text-sm" onClick={handleSelection}>
                owner
              </li>
              <li className="menu-item text-sm" onClick={handleSelection}>
                title
              </li>
              <li className="menu-item text-sm" onClick={handleSelection}>
                created at
              </li>

              <li className="menu-item text-sm" onClick={handleSelection}>
                votes
              </li>
              <li className="menu-item text-sm" onClick={handleSelection}>
                designer
              </li>
              <li className="menu-item text-sm" onClick={handleSelection}>
                comment_count
              </li>
            </ul>
          ) : null}
        </span>
      </section>

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
