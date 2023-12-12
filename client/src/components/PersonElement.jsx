import { propTypes } from "prop-types";

function PersonElement({ person }) {
  return <div className="person-element">{person.toString()}</div>;
}

PersonElement.propTypes = {
  person: propTypes.object,
};

export default PersonElement;
