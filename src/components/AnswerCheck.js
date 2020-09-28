import React from 'react';
import styles from './HostsGame.module.css';

export default function AnswerCheck(props) {
  return (
    <div className={styles.AnswerCheck}>
      <h1>{props.answer}</h1>
      <div className={styles.RightWrongButtons}>
        <button onClick={props.handleRightAnswer}>
          <span role="img" aria-label="CORRECT">
            🙆‍♀️
          </span>
        </button>
        <button onClick={props.handleWrongAnswer}>
          <span role="img" aria-label="WRONG">
            🙅‍♀️
          </span>
        </button>
      </div>
    </div>
  );
}
