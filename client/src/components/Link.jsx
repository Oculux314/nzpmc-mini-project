import PropTypes from "prop-types";
import PageContext from "./../contexts/PageContext";
import { useContext } from "react";

function handleClick(event, to, setPage) {
  event.preventDefault();
  setPage(to);
}

function Link({ children, to }) {
  const { setPage } = useContext(PageContext);
  return (
    <a href="" onClick={(event) => handleClick(event, to, setPage)}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
