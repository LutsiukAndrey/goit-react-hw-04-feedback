import s from './Counter.module.css';
import PropTypes from 'prop-types';

export const CounterButtons = ({ onBtnClick }) => {
  const btns = [
    {
      name: 'good',
      title: 'Good',
    },
    {
      name: 'bad',
      title: 'Bad',
    },
    {
      name: 'neutral',
      title: 'Neutral',
    },
  ];
  return (
    <div className="controls">
      {btns.map(btn => (
        <button
          className={s.button}
          name={btn.name}
          key={btn.name}
          type="button"
          onClick={onBtnClick}
        >
          {btn.name}
        </button>
      ))}
    </div>
  );
};

CounterButtons.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
