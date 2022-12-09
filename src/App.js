import "./App.css";

import { Splash } from "./Components/Splash";
import { useEffect, useState } from "react";
import { Main } from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { ReviewsList } from "./Components/ReviewsList";
import { IndividualReview } from "./Components/IndividualReview";
import { ReviewsByCategory } from "./Components/ReviewsByCategory";
import { Profile } from "./Components/Profile";

import { getUser } from "./Utils/api";
import { RouteNotFound } from "./Components/RouteNotFound";

function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then((users) => {
      // hardcoded for the purposes of this

      setUser(users[0]);
      // setIsLoading(false);
    });
  }, []);

  return (
    <main className="h-screen">
      <nav className="flex">
        <Nav setCategories={setCategories} categories={categories} />
      </nav>

      <Header />

      <Routes>
        <Route
          path="/home"
          element={<Main />}
          errorElement={<RouteNotFound />}
        />
        <Route
          path="/reviews/*"
          element={<ReviewsList />}
          errorElement={<RouteNotFound />}
        />
        <Route
          path="/reviews/:review_id"
          element={
            <IndividualReview user={user} errorElement={<RouteNotFound />} />
          }
        />
        <Route
          path="/profile"
          element={<Profile user={user} errorElement={<RouteNotFound />} />}
        />

        <Route
          path="/reviews/category/:category/*"
          element={<ReviewsByCategory />}
          errorElement={<RouteNotFound />}
        />
        <Route
          path="/reviews/:review_id"
          element={<IndividualReview />}
          errorElement={<RouteNotFound />}
        />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
