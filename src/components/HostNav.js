import React, { useContext } from 'react';
import UserContext from '../App';
import styles from './HostNav.module.css';
import GenericButton from './GenericButton';

export default function HostNav(props) {
  const gameCode = useContext(UserContext);
  return (
    <nav className={styles.HostNav}>
      <button
        className={styles.EndButton}
        onClick={() => {
          props.endGame(gameCode);
        }}
      >
        END GAME
      </button>
      <GenericButton
        text={'Show leader board🥊'}
        handleClick={() => {
          props.setShowLeaderBoard(true);
        }}
      />
      {props.questionTime && <GenericButton text={'Next question✨'} handleClick={props.goToNext} />}
      {props.showAnswerCheck && <GenericButton text={'Next question✨'} handleClick={props.goToNext} />}
      {props.showTimer && <GenericButton text={'Skip✨'} handleClick={props.skipQuestion} />}
    </nav>
  );
}
