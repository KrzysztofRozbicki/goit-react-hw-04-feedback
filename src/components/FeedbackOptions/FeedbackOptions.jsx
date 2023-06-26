import css from './feedbackOptions.module.css';

import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonBox}>
      {options.map((buttonName, index) => (
        <button
          className={css.button}
          key={index}
          onClick={() => onLeaveFeedback(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
