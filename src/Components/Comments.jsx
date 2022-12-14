import { useState } from "react";
import { useEffect } from "react";
import { deleteComment, getReviewComments } from "../Utils/api";
import { CommentForm } from "./CommentForm";
import { Loading } from "./Loading";
import thumbsIcon from "../images/thumbs-up.svg";
import { format } from "date-fns";
import deleteIcon from "../images/bin-minus.svg";

export const Comments = ({ review_id, user, setIndReview, indReview }) => {
  const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    getReviewComments(review_id)
      .then(({ comments }) => {
        setReviewComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  let commentsExist = reviewComments.length ? true : false;

  const handleCommentForm = () => {
    if (!formOpen) {
      setAddComment(true);
    } else {
      setAddComment(false);
    }
  };

  const handleDelete = (comment_id) => {
    console.log(comment_id);
    setDeleting(true);
    deleteComment(comment_id).then(() => {
      setDeleting(false);
      window.location.reload();
    });
  };

  if (commentsExist) {
    return isLoading ? (
      <Loading />
    ) : (
      <section>
        <h3 className="text-center underline font-bold">Comments</h3>
        <section>
          <button onClick={handleCommentForm}>Add Comment +</button>
        </section>
        {addComment ? <CommentForm user={user} review_id={review_id} /> : null}
        <ul>
          {reviewComments.map((comment) => {
            const date = new Date(comment.created_at);
            const datePosted = format(date, "dd/mm/yyy");
            return (
              <li
                key={comment.comment_id}
                className="max-w-sm text-zinc-300 bg-slate-800 rounded overflow-hidden shadow-lg m-2 p-2"
              >
                <p className="underline font-bold">{comment.author}</p>
                <p>{datePosted}</p>
                <p className="mt-2">{comment.body}</p>
                {!error ? (
                  <button className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2">
                    <img
                      className="inline-block mr-1"
                      src={thumbsIcon}
                      alt="thumbs up"
                    />
                    <p className="inline-block">{comment.votes}</p>
                  </button>
                ) : (
                  <div>
                    <button className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2 bg-red-600">
                      <img
                        className="inline-block mr-1"
                        src={thumbsIcon}
                        alt="thumbs up"
                      />
                      <p className="inline-block">{comment.votes}</p>
                    </button>
                    <p>Sorry, that didnt work, please try again</p>
                    <button
                      onClick={() => {
                        window.location.reload();
                      }}
                    >
                      Retry
                    </button>
                  </div>
                )}
                {comment.author === user.username ? (
                  <button
                    onClick={() => {
                      handleDelete(comment.comment_id);
                    }}
                  >
                    {!deleting ? (
                      <img src={deleteIcon} alt="delete comment" />
                    ) : (
                      <Loading />
                    )}
                  </button>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section>
        <section>
          <button onClick={handleCommentForm}>Add Comment</button>
        </section>
        {addComment ? <CommentForm user={user} review_id={review_id} /> : null}
        <p>No comments yet</p>
      </section>
    );
  }
};
