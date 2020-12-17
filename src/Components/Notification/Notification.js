import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ message }) {
  return <div>{message}</div>;
}

Statistics.defaultProps = {
  message: '',
};

Statistics.propTypes = {
  message: PropTypes.string,
};

export default Statistics;
