import { useEffect } from "react";
import { useState } from "react";
import { postComment } from "../Utils/api";

export const CommentForm = ({ user, review_id }) => {
  const [comment, setComment] = useState("");
  const [validInput, setValidInput] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentToPost = {
      body: comment,
      username: `${user.username}`,
    };

    if (comment) {
      if (isError) {
        setIsError(false);
      }
      postComment(review_id, commentToPost)
        .then(() => {
          setComment("");
          setValidInput(true);
          refreshPage();
        })
        .catch((err) => {
          setIsError(true);
        });
    } else {
      setValidInput(false);
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="comment"
          >
            What would you like to say?
          </label>
          <input
            className={
              validInput
                ? "appearance-none block w-70 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                : "block w-70 bg-gray-200 text-gray-700 border-2 border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
            }
            id="comment"
            type="text"
            placeholder="comment..."
            value={comment}
            onChange={handleChange}
          />
          {validInput ? null : <p>Comment cannot be blank</p>}
          <p></p>
        </div>
      </div>
      <button type="submit">Submit</button>
      {isError ? <p>oops!! somethinng went wrong</p> : null}
    </form>
  );
};
