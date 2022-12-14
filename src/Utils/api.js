import axios from "axios";

const boardGames = axios.create({
  baseURL: "https://embarrassed-calf-lapel.cyclic.app/api",
});

export const getCategories = () => {
  return boardGames.get("/categories").then((res) => {
    return res.data;
  });
};

export const getReviews = () => {
  return boardGames.get("/reviews").then((res) => {
    return res.data;
  });
};

export const getIndividualReview = (review_id) => {
  return boardGames.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review[0];
  });
};

export const getReviewComments = (reviewId) => {
  return boardGames.get(`reviews/${reviewId}/comments`).then((res) => {
    return res.data;
  });
};

export const getReviewsByCategory = (category) => {
  return boardGames.get(`reviews?category=${category}`).then((res) => {
    return res.data;
  });
};

export const getUser = () => {
  return boardGames.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getSortedReviews = (sortBy, orderBy) => {
  console.log(sortBy);
  console.log(orderBy);
  return boardGames
    .get(`/reviews`, {
      params: {
        sort_by: sortBy,
        order: orderBy,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const postComment = (review_id, body) => {
  return boardGames
    .post(`reviews/${review_id}/comments`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};

export const patchVotes = (review_id) => {
  return boardGames
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
  return boardGames.delete(`/comments/${comment_id}`).then((res) => {
    console.log(res);
  });
};
