import "./App.css";

import { Splash } from "./Components/Splash";
import { useState } from "react";
import { Main } from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { ReviewsList } from "./Components/ReviewsList";
import { IndividualReview } from "./Components/IndividualReview";

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <main className="h-screen">
      <nav className="flex">
        <Nav setCategories={setCategories} categories={categories} />
      </nav>

      <Header />

      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/reviews/*" element={<ReviewsList />} />
        <Route path="/reviews/:review_id" element={<IndividualReview />} />
      </Routes>
    </main>
  );
}

export default App;
