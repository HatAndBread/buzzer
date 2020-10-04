import React from 'react';
import StartButton from './StartButton';
import styles from './HostsGame.module.css';

export default function HostAskQuestion(props) {
  const handleChange = (e) => {
    props.setTimeLimit(e.target.value);
    props.setTimeLeft(e.target.value);
  };
  return (
    <div className={styles.AskQuestion}>
      <h1 style={{ userSelect: 'none' }}>Question number: {props.questionNumber}</h1>
      <div>
        <label htmlFor="time-limit-input" style={{ fontSize: '22px', userSelect: 'none' }}>
          Time limit: &nbsp;
        </label>
        <input
          className={styles.TimeLimitInput}
          name="time-limit-input"
          type="number"
          min="5"
          onChange={handleChange}
          defaultValue={props.timeLimit}
        ></input>
      </div>
      <StartButton handleClick={props.allowAnswers} text={'✨Get Answers✨'} />
    </div>
  );
}
