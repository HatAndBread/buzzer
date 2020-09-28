import React from 'react';
import styles from './JoinScreen.module.css';

export default function NumberDisplay(props) {
  return (
    <div className={styles.NumberDisplay}>
      <span>{props.enteredCode[0] ? `${props.enteredCode[0]} ` : '_ '}</span>
      <span>{props.enteredCode[1] ? `${props.enteredCode[1]} ` : '_ '}</span>
      <span>{props.enteredCode[2] ? `${props.enteredCode[2]} ` : '_ '}</span>
      <span>{props.enteredCode[3] ? `${props.enteredCode[3]} ` : '_ '}</span>
      <span>{props.enteredCode[4] ? `${props.enteredCode[4]} ` : '_ '}</span>
      <span>{props.enteredCode[5] ? `${props.enteredCode[5]} ` : '_ '}</span>
    </div>
  );
}
