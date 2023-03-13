import React, { Component } from 'react';
import { Notification } from 'Notification/Notification';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    if (!this.props.countTotalFeedback) {
      return <Notification message="There is no feedback" />;
    }
    return (
      <ul className="statistics__conainer">
        <h2> Statistics</h2>

        <li>
          Good : <span className="statistic__value">{this.props.good}</span>{' '}
        </li>
        <li>
          Neutral :{' '}
          <span className="statistic__value">{this.props.neutral}</span>{' '}
        </li>
        <li>
          Bad : <span className="statistic__value">{this.props.bad}</span>{' '}
        </li>
        <li>
          Total :{' '}
          <span className="statistic__value">
            {this.props.countTotalFeedback}
          </span>{' '}
        </li>
        <li>
          Positive feedback:{' '}
          <span className="statistic__value">
            {this.props.countPositiveFeedbackPercentage}%
          </span>{' '}
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
