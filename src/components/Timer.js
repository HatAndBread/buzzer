import React from 'react';
import styles from './HostsGame.module.css';

export default function Timer(props) {
  return (
    <div>
      <div className={styles.Timer}>
        <h1>Time remaining:&nbsp;</h1>
        <span>{props.timeLeft}</span>
      </div>
      <ol className={styles.NameList}>{props.buzzes}</ol>
    </div>
  );
}
