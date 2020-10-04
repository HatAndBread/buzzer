import React from 'react';
import styles from './HostsGame.module.css';

export default function AnswerCheck(props) {
  return (
    <div>
      <div className={styles.AnswerCheck}>
        <h1>{props.answer}</h1>
        <div className={styles.RightWrongButtons}>
          <button
            onClick={() => {
              props.setPointsAvailable(props.pointsAvailable - 1);
              props.handleAnswer(props.pointsAvailable);
            }}
          >
            <span role="img" aria-label="CORRECT">
              🙆‍♀️
            </span>
          </button>
          <button
            onClick={() => {
              props.setPointsAvailable(props.pointsAvailable - 1);
              props.handleAnswer(props.pointsAvailable * -1);
            }}
          >
            <span role="img" aria-label="WRONG">
              🙅‍♀️
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
