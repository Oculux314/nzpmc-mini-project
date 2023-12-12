import { useState, createContext } from "react";
import RegistrationPage from "./pages/RegistrationPage";
import ViewingPage from "./pages/ViewingPage";
import DefaultPage from "./pages/DefaultPage";

const PageContext = createContext();

function renderPage(page) {
  console.log("renderPage", page);
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
  const [page, changePage] = useState("viewing");

  return (
    <PageContext.Provider value={{ page, changePage }}>
      {renderPage(page)}
    </PageContext.Provider>
  );
}

export default App;
