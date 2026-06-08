import { useState } from 'react';
import InitialPage from './InitialPage';
import MainPage from './MainPage';

function App() {
  const [page, setPage] = useState("initial");

  return (
    <>
      {page === "initial" && <InitialPage setPage={setPage} />}

      {page === "main" && (
        <MainPage setPage={setPage} />
      )}
    </>
  );
}

export default App;
