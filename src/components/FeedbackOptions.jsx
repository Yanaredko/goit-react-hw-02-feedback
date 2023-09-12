import React from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from './FeedbackButton.jsx';

function FeedbackOptions({ options, onLeaveFeedback }) {
//   const { good, neutral, bad } = options;

  return (
    <div>
      <FeedbackButton label="Good" onClick={() => onLeaveFeedback('good')} />
      <FeedbackButton label="Neutral" onClick={() => onLeaveFeedback('neutral')} />
      <FeedbackButton label="Bad" onClick={() => onLeaveFeedback('bad')} />
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
