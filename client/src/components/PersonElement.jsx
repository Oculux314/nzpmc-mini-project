import propTypes from "prop-types";

function PersonElement({ person }) {
  return (
    <div className="person-element">
      <p>
        <strong>{person.name}</strong>
      </p>
      <p>
        <em>DOB: {new Date(person.birthdate).toLocaleDateString()}</em>
      </p>
    </div>
  );
}

PersonElement.propTypes = {
  person: propTypes.object.isRequired,
};

export default PersonElement;
