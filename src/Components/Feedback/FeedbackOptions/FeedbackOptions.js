import React from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from '../FeedBackButton/FeedbackButton';
import { Container } from './FeedbackOptionsStyles';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(option => (
        <FeedbackButton name={option} callback={onLeaveFeedback} />
      ))}
    </Container>
  );
}

FeedbackOptions.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
