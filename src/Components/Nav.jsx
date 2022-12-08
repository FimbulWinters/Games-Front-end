import { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";
import { Link } from "react-router-dom";
import downIcon from "../images/menu.svg";

export const Nav = ({ setCategories, categories }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed top-0 h-12 p-2 w-screen flex flex-row bg-gray-800 text-white space-x-5">
      <p className="mr-24 ml-4 p-0 text-lg">
        <Link to={"/"}>home</Link>
      </p>

      <span className="menu-button pb-1">
        <button onClick={handleOpen} className="dropdown">
          <img src={downIcon} alt="dropdown" />
        </button>
        {open ? (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={handleOpen}>
                <Link to={"/reviews"}> All reviews</Link>
              </button>
            </li>
            {categories.map((category) => {
              return (
                <li key={category.slug} className="menu-item">
                  <button onClick={handleOpen}>
                    <Link to={`/reviews/category/${category.slug}`}>
                      {category.slug}
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </span>
    </div>
  );
};
