import { useState } from "react";
import PageContext from "./contexts/PageContext";
import RegistrationPage from "./pages/RegistrationPage";
import ViewingPage from "./pages/ViewingPage";
import DefaultPage from "./pages/DefaultPage";

import getAllPersonsService from "./services/getAllPersonsService.js";

getAllPersonsService().then((persons) => {
  console.log(persons);
});

function renderPage(page) {
  switch (page) {
    case "registration":
      return <RegistrationPage />;
    case "viewing":
      return <ViewingPage />;
    default:
      return <DefaultPage />;
  }
}

function App() {
  const [page, setPage] = useState("404");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {renderPage(page)}
    </PageContext.Provider>
  );
}

export default App;
