import { useState } from "react";
import { useEffect } from "react";
import { getReviewComments } from "../Utils/api";

export const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getReviewComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <ul>
      {comments.map((comment) => {
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
};
