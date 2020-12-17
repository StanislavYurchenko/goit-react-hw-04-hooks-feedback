import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackButtonStyles';

function FeedbackButton({ name, callback }) {
  return (
    <Button name={name} onClick={callback} type="button">
      {name}
    </Button>
  );
}

FeedbackButton.propTypes = {
  name: PropTypes.string,
  callback: PropTypes.func,
};

export default FeedbackButton;
