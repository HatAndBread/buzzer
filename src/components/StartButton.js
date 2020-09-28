import React from 'react';
import styles from './StartButton.module.css';

export default function StartButton(props) {
  return (
    <button className={styles.StartButton} onClick={props.handleClick}>
      {props.text}
    </button>
  );
}
