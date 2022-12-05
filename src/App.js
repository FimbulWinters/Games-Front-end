import "./App.css";

import { Splash } from "./Components/Splash";
import { useState } from "react";
import { Main } from "./Components/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  return (
    <main>
      {initialLoad ? <Splash setInitialLoad={setInitialLoad} /> : <Main />}
    </main>
  );
}

export default App;
