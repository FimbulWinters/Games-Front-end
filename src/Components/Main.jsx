import { useState } from "react";

import { ReviewsList } from "./ReviewsList";

import { useMediaQuery } from "react-responsive";

import { Route, Routes } from "react-router-dom";
import { Gallery } from "./Gallery";

export const Main = () => {
  const isLargeScreen = useMediaQuery({ minDeviceWidth: 768 });

  return (
    <div>
      <main>
        {/* {isLargeScreen ? <Pagination /> : null} */}
        {/* too add in properly lateer */}
        <Gallery />
      </main>
    </div>
  );
};
