import PropTypes from "prop-types";

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
  person: PropTypes.object.isRequired,
};

export default PersonElement;
