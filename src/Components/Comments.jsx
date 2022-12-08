import { useState } from "react";
import { useEffect } from "react";
import { getReviewComments } from "../Utils/api";
import { CommentForm } from "./CommentForm";
import { Loading } from "./Loading";

export const Comments = ({ review_id, user }) => {
  const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addComment, setAddComment] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    getReviewComments(review_id).then(({ comments }) => {
      setReviewComments(comments);
      setIsLoading(false);
    });
  }, []);
  let commentsExist = reviewComments.length ? true : false;

  const handleCommentForm = () => {
    if (!formOpen) {
      setAddComment(true);
      setFormOpen(true);
    } else {
      setAddComment(false);
      setFormOpen(false);
    }
  };

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
    return (
      <section>
        <section>
          <p>No comments yet</p>
          <button onClick={handleCommentForm}>Add Comment +</button>
        </section>
        {addComment ? <CommentForm user={user} review_id={review_id} /> : null}
      </section>
    );
  }
};
