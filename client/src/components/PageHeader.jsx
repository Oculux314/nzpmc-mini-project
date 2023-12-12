import PropTypes from "prop-types";
import Link from "./Link";

function PageHeader({ headerText, linkText, linkTo }) {
  return (
    <div className="page-header">
      <h1>{headerText}</h1>
      <Link className="header-link" to={linkTo}>{linkText}</Link>
    </div>
  );
}

PageHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkTo: PropTypes.string,
};

export default PageHeader;
