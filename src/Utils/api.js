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
    return res.data;
  });
};

export const getReviewComments = (reviewId) => {
  return boardGames.get(`reviews/${reviewId}/comments`).then((res) => {
    return res.data;
  });
};

export const getUser = () => {
  return boardGames.get("/users").then((res) => {
    return res.data.users;
  });
};
