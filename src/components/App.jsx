import { useEffect, useState } from 'react';
import { Container } from './Container/Container';
import { CounterButtons } from './Counter/CounterButtons';
import { Statistics } from './Statictics/Statictics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [nautral, setNautral] = useState(0);
  const [total, setTotal] = useState(0);
  const [pisitiveFeedback, setPisitiveFeedback] = useState(0);
  const hadleChange = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNautral(nautral + 1);
        break;

      default:
        return;
    }
  };
  useEffect(() => {
    setTotal(good + nautral + bad);

    setPisitiveFeedback(Math.round((good / total) * 100));
  }, [good, bad, nautral, total]);

  return (
    <Container>
      <CounterButtons onBtnClick={hadleChange} />

      <Statistics
        good={good}
        neutral={nautral}
        bad={bad}
        countTotalFeedback={total}
        countPositiveFeedbackPercentage={pisitiveFeedback}
      />
    </Container>
  );
};
