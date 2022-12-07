import { useState } from "react";
import { useEffect } from "react";
import { getReviewComments } from "../Utils/api";
import { Loading } from "./Loading";
import { HandleUpvotes } from "../Utils/HandleUpvote";

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

  // const HandleUpvotes = () => {
  //   const newReview = [...indReview];
  //   newReview[0].votes++;
  //   setIndReview(newReview);
  //   patchVotes(review_id).catch((err) => {
  //     setIndReview(newReview[0]--);
  //     return <p>Request failed, please try again later</p>;
  //   });
  // };

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
                <button onClick={HandleUpvotes}>Upvote</button>
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
