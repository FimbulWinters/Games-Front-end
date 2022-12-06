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
