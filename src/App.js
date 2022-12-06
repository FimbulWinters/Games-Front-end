import "./App.css";

import { Splash } from "./Components/Splash";
import { useState } from "react";
import { Main } from "./Components/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import { IndividualReview } from "./Components/IndividualReview";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  return (
    <main>
      {initialLoad ? (
        <Splash setInitialLoad={setInitialLoad} />
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/review/:review_id" element={<IndividualReview />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
