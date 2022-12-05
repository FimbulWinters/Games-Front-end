import "./App.css";

import { Splash } from "./Components/Splash";
import { useState } from "react";
import { Main } from "./Components/Main";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);
  return (
    <main>
      {initialLoad ? <Splash setInitialLoad={setInitialLoad} /> : <Main />}

      <p>main page body</p>
    </main>
  );
}

export default App;
