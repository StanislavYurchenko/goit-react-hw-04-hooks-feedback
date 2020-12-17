import React, { useReducer } from 'react';
import Statistics from '../../Statistics/Statistics.js';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.js';
import Section from '../../Section/Section.js';
import Notification from '../../Notification/Notification.js';
import { Container } from './FeedbackStyles';

const initialState = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    case 'good':
      return { ...state, good: state.good + 1 };
    default:
      throw new Error();
  }
}

function Feedback() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = event => {
    const { name } = event.target;
    dispatch({ type: name });
  };

  const { good, neutral, bad } = state;
  const total = Object.values(state).reduce((acc, el) => (acc += el));
  const positivePercentage = Math.round((100 * state.good) / total);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={clickHandler}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}

export default Feedback;
