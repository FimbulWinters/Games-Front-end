import { useEffect } from "react";
import { useState } from "react";
import { getCategories } from "../Utils/api";
import { Link } from "react-router-dom";

export const Nav = ({ setCategories, categories }) => {
  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);
  return (
    <ul>
      {categories.map((category) => {
        return (
          <li key={category.slug}>
            <Link to={`/${category.slug}`}>{category.slug}</Link>
          </li>
        );
      })}
    </ul>
  );
};
