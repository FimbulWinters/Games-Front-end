import { useState } from "react";

import { ReviewsList } from "./ReviewsList";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "react-responsive";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";

export const Main = () => {
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 768 });

  return (
    <div>
      <main>
        {/* {isLargeScreen ? <Pagination /> : null} */}
        {/* too add in properly lateer */}
      </main>
    </div>
  );
};
