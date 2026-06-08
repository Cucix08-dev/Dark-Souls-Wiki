import { useState } from 'react';
import InitialPage from './InitialPage';

function App() {
  const [page, setPage] = useState("initial");

  return (
    <>
      {page === "initial" && <InitialPage setPage={setPage} />}
      {page === "main" && <div>Qui ci sarà la tua MainPage</div>}
    </>
  );
}

export default App;
