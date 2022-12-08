import { useState } from "react";
import { postComment } from "../Utils/api";

export const CommentForm = ({ user, review_id }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    const commentToPost = {
      author: user.username,
      body: comment,
    };
    e.preventDefault();
    postComment(review_id, commentToPost);
  };

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="comment"
          >
            What would you like to say?
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="comment"
            type="text"
            placeholder="comment..."
            value={comment}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
