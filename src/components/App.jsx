import { Statistics } from './Statistics';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import './App.css';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });
  const { good, bad, neutral } = feedback;

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) return 0;
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export default App;
