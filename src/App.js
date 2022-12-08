import "./App.css";

import { Splash } from "./Components/Splash";
import { useEffect, useState } from "react";
import { Main } from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { ReviewsList } from "./Components/ReviewsList";
import { IndividualReview } from "./Components/IndividualReview";
import { Profile } from "./Components/Profile";
import { getUser } from "./Utils/api";

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
        <Route path="/*" element={<Main />} />
        <Route path="/reviews/*" element={<ReviewsList />} />
        <Route
          path="/reviews/:review_id"
          element={<IndividualReview user={user} />}
        />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </main>
  );
}

export default App;
