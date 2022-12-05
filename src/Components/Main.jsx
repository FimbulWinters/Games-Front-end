import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { ReviewsList } from "./ReviewsList";

export const Main = () => {
  const [categories, setCategories] = useState([{}]);
  return (
    <div>
      <Header />
      <nav>
        <Nav setCategories={setCategories} categories={categories} />
      </nav>
      <main>
        <ReviewsList />
        <Routes>
          <Route path="/:category" element={<ReviewsList />} />
        </Routes>
      </main>
    </div>
  );
};
