import { useState } from "react";
import { useEffect } from "react";
import { getReviewComments } from "../Utils/api";
import { Loading } from "./Loading";

export const Comments = ({ review_id }) => {
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
      <ul>
        {reviewComments.map((comment) => {
          return (
            <li key={comment.comment_id} className="card">
              <p className="author">{comment.author}</p>
              <p className="comment">{comment.body}</p>
              <div>
                <p className="votes">votes: {comment.votes}</p>
                <button>Upvote</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>No comments yet</p>;
  }
};
