import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  if (!countTotalFeedback) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <ul className="statistics__conainer">
      <h2> Statistics</h2>

      <li>
        Good : <span className="statistic__value">{good}</span>{' '}
      </li>
      <li>
        Neutral : <span className="statistic__value">{neutral}</span>{' '}
      </li>
      <li>
        Bad : <span className="statistic__value">{bad}</span>{' '}
      </li>
      <li>
        Total :<span className="statistic__value">{countTotalFeedback}</span>
      </li>
      <li>
        Positive feedback:
        <span className="statistic__value">
          {countPositiveFeedbackPercentage}%
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
