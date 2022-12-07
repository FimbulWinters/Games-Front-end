import { useEffect } from "react";
import { getCategories } from "../Utils/api";
import { Link } from "react-router-dom";

export const Nav = ({ setCategories, categories }) => {
  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);
  return (
    <ul className="fixed top-0 w-screen flex flex-row bg-gray-800 text-white space-x-5">
      <li className="m-2  p-1 text-center align-middle bg-gray-700 hover:bg-red-800 rounded-xl hover:rounded-xl hover:shadow-2xl hover:scale-125 transition-all duration-300">
        <Link to={"/"}>home</Link>
      </li>
      <li className="m-2 text-center align-middle break-words bg-gray-700 hover:bg-red-800 rounded-xl hover:rounded-xl hover:shadow-2xl hover:scale-125 transition-all duration-300">
        <Link to={"/reviews"}> All reviews</Link>
      </li>
      {categories.map((category) => {
        return (
          <li
            key={category.slug}
            className="m-2 text-center align-middle bg-gray-700 hover:bg-red-800 rounded-xl hover:rounded-xl hover:shadow-2xl hover:scale-125 transition-all duration-300"
          >
            <Link to={`/${category.slug}`}>{category.slug}</Link>
          </li>
        );
      })}
    </ul>
  );
};
