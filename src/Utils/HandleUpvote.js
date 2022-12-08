import { patchVotes } from "./api";

export const HandleUpvotes = (indReview, setIndReview, review_id) => {
  const newReview = [...indReview];
  newReview[0].votes++;
  setIndReview(newReview);
  patchVotes(review_id).catch((err) => {
    setIndReview(newReview[0]--);
    return <p>Request failed, please try again later</p>;
  });
};
