import React from 'react';
import { Container } from './Container/Container';
import { Counter } from './Counter/Counter';
import { Statistics } from './Statictics/Statictics';

export class App extends React.Component {
  total = 0;
  percent = 0;
  totalPercent = null;
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  good = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  bad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  neutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return (this.total = good + neutral + bad);
  }
  countPositiveFeedbackPercentage() {
    const { good, bad } = this.state;
    this.totalPercent = good + bad;
    return (this.percent = Math.round((good / this.totalPercent) * 100));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Counter good={this.good} neutral={this.neutral} bad={this.bad} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}
