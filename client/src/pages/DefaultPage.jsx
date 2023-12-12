import PageHeader from "../components/PageHeader";

function DefaultPage() {
  return (
    <div className="page">
      <PageHeader
        headerText="404 Page Not Found"
        linkTo="viewing"
        linkText="Go Home"
      />
    </div>
  );
}

export default DefaultPage;
