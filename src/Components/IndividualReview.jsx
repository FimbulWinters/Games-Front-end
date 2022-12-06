import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualReview } from "../Utils/api";
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
          <button type="button">upVote</button>
        </section>
        <article>
          <p>{indReview[0].review_body}</p>
        </article>
      </section>
      <section>
        <Comments review_id={review_id} />
      </section>
    </section>
  );
};
