import React from "react";
import PropTypes from "prop-types";

export const Greet = ({ message, backgroundColor }) => {
  return <div style={{ backgroundColor }}>{message}</div>;
};

Greet.propTypes = {
  message: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Greet.defaultProps = {
  message: "hello",
  backgroundColor: "#fff",
};
