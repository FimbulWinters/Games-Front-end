import { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";
import { Link } from "react-router-dom";
import profile from "../images/profile-circled.svg";
import downIcon from "../images/menu.svg";

export const Nav = ({ setCategories, categories }) => {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCategories()
      .then(({ categories }) => {
        setCategories(categories);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed top-0 h-12 p-2 w-screen grid grid-cols-4 content-center bg-gray-800 text-white space-x-5">
      <p className="col-span-2 text-lg mt-2">
        <Link to={"/home"}>home</Link>
      </p>
      <button className="col-start-3">
        <Link to={"/profile"}>
          <img src={profile} alt="profile" />
        </Link>
      </button>

      <span className=" pb-1">
        <button onClick={handleOpen} className="dropdown">
          <img src={downIcon} alt="dropdown" />
        </button>
        {open ? (
          !isError ? (
            <ul className="menu -ml-24 bg-gray-900">
              <li className="menu-item">
                <Link to={"/reviews"}> All reviews</Link>
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
          ) : (
            <section>
              <p>Oops something went wrong, please try again</p>
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                try again
              </button>
            </section>
          )
        ) : null}
      </span>
    </div>
  );
};
