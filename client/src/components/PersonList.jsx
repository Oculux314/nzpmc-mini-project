import DataContext from "../contexts/DataContext";
import { useContext } from "react";
import PersonElement from "./PersonElement";

function PersonList() {
  const { persons } = useContext(DataContext);

  return (
    <div className="person-list">
      {persons.get.map((person) => (
        <PersonElement key={person.id} person={person} />
      ))}
    </div>
  );
}

export default PersonList;
