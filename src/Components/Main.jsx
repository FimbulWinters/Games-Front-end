import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { ReviewsList } from "./ReviewsList";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "react-responsive";
import Stack from "@mui/material/Stack";
import { IndividualReview } from "./IndividualReview";

export const Main = () => {
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 768 });
  const [categories, setCategories] = useState([{}]);
  return (
    <div>
      <Header />

      <nav>
        <Nav setCategories={setCategories} categories={categories} />
      </nav>
      <main>
        <ReviewsList />

        {/* {isLargeScreen ? <Pagination /> : null} */}
        {/* too add in properly lateer */}
      </main>
    </div>
  );
};
