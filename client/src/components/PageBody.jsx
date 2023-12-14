import PropTypes from "prop-types";

function PageBody({ children }) {
  return <div className="page-body">{children}</div>;
}

PageBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageBody;
