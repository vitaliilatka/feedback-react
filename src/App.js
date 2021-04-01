import { useState } from "react";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = stats;

  const handleIncrementStat = ({ target: { textContent } }) =>
    setStats((prState) => ({
      ...prState,
      [textContent]: stats[textContent] + 1,
    }));

  const countTotalFeedback = () => {
    const values = [...Object.values(stats)];
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round(((good * 100) / countTotalFeedback()) * 10) / 10;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(stats)}
          onLeaveFeedback={handleIncrementStat}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </Container>
  );
};

export default App;
