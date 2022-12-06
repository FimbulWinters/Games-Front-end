import "./App.css";

import { Splash } from "./Components/Splash";
import { useState } from "react";
import { Main } from "./Components/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { ReviewsList } from "./Components/ReviewsList";
import { IndividualReview } from "./Components/IndividualReview";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <Header />

      <nav>
        <Nav setCategories={setCategories} categories={categories} />
      </nav>
      {initialLoad ? (
        <Splash setInitialLoad={setInitialLoad} />
      ) : (
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/reviews/*" element={<ReviewsList />} />
          <Route path="/reviews/:review_id" element={<IndividualReview />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
