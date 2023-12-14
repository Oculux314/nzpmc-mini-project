import { useState } from "react";
import createPersonService from "./../services/createPersonService";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const birthdate = date ? new Date(date) : null;

  function updateName(event) {
    setName(event.target.value);
  }

  function updateDate(event) {
    setDate(event.target.value);
  }

  async function submitForm(event) {
    event.preventDefault();
    createPersonService({ name, birthdate })
      .then((res) => {
        alert(
          `User with name ${res.name} and birthdate ${new Date(
            res.birthdate
          ).toLocaleDateString()} created!`
        );
        setName("");
        setDate("");
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  }

  return (
    <div className="registration">
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={updateName}
          />
        </div>
        <div>
          <label htmlFor="birthday">DOB: </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={date}
            onChange={updateDate}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
