import PageBody from "../components/PageBody.jsx";
import PageHeader from "../components/PageHeader";
import RegistrationForm from "../components/RegistrationForm.jsx";

function RegistrationPage() {
  return (
    <div className="page">
      <PageHeader
        headerText="Registration Page"
        linkTo="viewing"
        linkText="View Registrations"
      />
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
