import PageHeader from "../components/PageHeader";
import PersonList from "../components/PersonList";

function ViewingPage() {
  return (
    <div className="page">
      <PageHeader
        headerText="Viewing Page"
        linkTo="registration"
        linkText="Register Here"
      />
      <PersonList />
    </div>
  );
}

export default ViewingPage;
