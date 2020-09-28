import React from 'react';
import StartButton from './StartButton';
import styles from './StartScreen.module.css';

export default function StartScreen(props) {
  return (
    <div className={styles.StartScreen}>
      <StartButton text={'✨Host game ✨'} handleClick={props.createGame} />
      <StartButton text={'✨Join game ✨'} handleClick={props.join} />
    </div>
  );
}
