import { useEffect, useContext } from "react";
import DataContext from "./../contexts/DataContext";
import PageHeader from "../components/PageHeader";
import PersonList from "../components/PersonList";
import PageBody from "../components/PageBody";

function ViewingPage() {
  const { persons } = useContext(DataContext);

  useEffect(() => {
    persons.update(persons.set);
  }, []);

  return (
    <div className="page">
      <PageHeader
        headerText="Viewing Page"
        linkTo="registration"
        linkText="Register Here"
      />
      <PageBody>
        <PersonList />
      </PageBody>
    </div>
  );
}

export default ViewingPage;
