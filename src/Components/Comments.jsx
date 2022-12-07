import { useState } from "react";
import { useEffect } from "react";
import { getReviewComments } from "../Utils/api";
import { Loading } from "./Loading";
import thumbsIcon from "../images/thumbs-up.svg";

export const Comments = ({ review_id, HandleUpvotes }) => {
  const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getReviewComments(review_id).then(({ comments }) => {
      setReviewComments(comments);
      setIsLoading(false);
    });
  }, []);
  let commentsExist = reviewComments.length ? true : false;

  if (commentsExist) {
    return isLoading ? (
      <Loading />
    ) : (
      <section>
        <h3 className="text-center underline font-bold">Comments</h3>
        <ul>
          {reviewComments.map((comment) => {
            return (
              <li
                key={comment.comment_id}
                className="max-w-sm text-zinc-300 bg-slate-800 rounded overflow-hidden shadow-lg m-2 p-2"
              >
                <p className="underline font-bold">{comment.author}</p>
                <p className="mt-2">{comment.body}</p>

                <button
                  onClick={HandleUpvotes}
                  className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2"
                >
                  <img
                    className="inline-block mr-1"
                    src={thumbsIcon}
                    alt="thumbs up"
                  />
                  <p className="inline-block">{comment.votes}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return <p>No comments yet</p>;
  }
};
