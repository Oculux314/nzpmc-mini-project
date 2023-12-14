import { useState } from "react";
import PageContext from "./contexts/PageContext";
import getAllPersonsService from "./services/getAllPersonsService.js";
import RegistrationPage from "./pages/RegistrationPage";
import ViewingPage from "./pages/ViewingPage";
import DefaultPage from "./pages/DefaultPage";
import DataContext from "./contexts/DataContext";

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

function updatePersons(setPersons) {
  getAllPersonsService().then((persons) => setPersons(persons)).catch((err) => alert(err));
}

function App() {
  const [page, setPage] = useState("viewing");
  const [persons, setPersons] = useState([]);

  const data = {
    persons: { get: persons, set: setPersons, update: updatePersons },
  };

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <DataContext.Provider value={data}>
        {renderPage(page)}
      </DataContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
