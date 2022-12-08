import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualReview, patchVotes } from "../Utils/api";
import thumbsIcon from "../images/thumbs-up.svg";

import { Comments } from "./Comments";
import { Loading } from "./Loading";

export const IndividualReview = ({ user }) => {
  const { review_id } = useParams();

  const [indReview, setIndReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIndividualReview(review_id).then((review) => {
      console.log(review);
      setIndReview(review);
    });
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [indReview]);

  const HandleUpvotes = () => {
    const newReview = { ...indReview };
    newReview.votes++;
    setIndReview(newReview);
    patchVotes(review_id).catch((err) => {
      setIndReview(newReview.votes--);
      return <p>Request failed, please try again later</p>;
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <section className="bg-gray-300 pt-2">
      <section className="max-w-sm rounded overflow-hidden bg-slate-800 border-4 border-slate-800 clo shadow-2xl m-2 text-zinc-300">
        <header>
          <img src={indReview.review_img_url} alt="" />
          <h2 className="font-bold text-xl ml-2 mr-2 mb-1 mt-2">
            {indReview.title}
          </h2>
          <h3 className="text-m ml-2 mr-2 mb-1 -mt-1">{`reviewed by ${indReview.owner}`}</h3>
        </header>
        <button
          onClick={HandleUpvotes}
          className="text-sm max-w-sm rounded overflow-hidden shadow-lg m-2 "
        >
          <img className="inline-block mr-1" src={thumbsIcon} alt="thumbs up" />
          <p className="inline-block">{indReview.votes}</p>
        </button>
        <article className="m-2">
          <p>{indReview.review_body}</p>
        </article>
      </section>
      <section>
        <Comments
          review_id={review_id}
          indReview={indReview}
          setIndReview={setIndReview}
          user={user}
        />
      </section>
    </section>
  );
};
