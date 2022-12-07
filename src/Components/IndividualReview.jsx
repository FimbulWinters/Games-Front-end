import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualReview, patchVotes } from "../Utils/api";

import { Comments } from "./Comments";
import { Loading } from "./Loading";

export const IndividualReview = () => {
  const { review_id } = useParams();

  const [indReview, setIndReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIndividualReview(review_id).then(({ review }) => {
      setIndReview(review);
      setIsLoading(false);
    });
  }, []);

  const HandleUpvotes = () => {
    const newReview = [...indReview];
    newReview[0].votes++;
    setIndReview(newReview);
    patchVotes(review_id).catch((err) => {
      setIndReview(newReview[0]--);
      return <p>Request failed, please try again later</p>;
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <section>
      <section>
        <header>
          <img src={indReview[0].review_img_url} alt="" />
          <h2>{indReview[0].title}</h2>
          <h4>{`reviewed by ${indReview[0].owner}`}</h4>
        </header>
        <section>
          <p>votes: {indReview[0].votes}</p>
          <button type="button" onClick={HandleUpvotes}>
            upVote
          </button>
        </section>
        <article>
          <p>{indReview[0].review_body}</p>
        </article>
      </section>
      <section>
        <Comments
          review_id={review_id}
          indReview={indReview}
          setIndReview={setIndReview}
          HandleUpvotes={HandleUpvotes}
        />
      </section>
    </section>
  );
};
