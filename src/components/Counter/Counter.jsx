import React, { Component } from 'react';
import s from './Counter.module.css';
import PropTypes from 'prop-types';

export class Counter extends Component {
  render() {
    return (
      <div className="controls">
        <button className={s.button} type="button" onClick={this.props.good}>
          Good
        </button>
        <button className={s.button} type="button" onClick={this.props.neutral}>
          Neutral
        </button>
        <button className={s.button} type="button" onClick={this.props.bad}>
          Bad
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
