import React, { useContext, useRef } from 'react';
import useOutsideAlerter from '../logic/ClickOutside';
import UserContext from '../App';
import styles from './HostNav.module.css';
import GenericButton from './GenericButton';

export default function HostNav(props) {
  const gameCode = useContext(UserContext);
  const navRef = useRef(null);
  useOutsideAlerter(navRef, props.setNavOut);
  return (
    <div>
      <div className={styles.TopNav}>
        {props.showAnswerCheck && <GenericButton text={'Next question✨'} handleClick={props.goToNext} />}
        {props.showTimer && <GenericButton text={'Skip✨'} handleClick={props.skipQuestion} />}
      </div>
      <div className={styles.HostNav} out={props.out} ref={navRef}>
        <GenericButton
          text={'Show leader board🥊'}
          handleClick={() => {
            props.setShowLeaderBoard(true);
          }}
        />
        {props.questionTime && <GenericButton text={'Next question✨'} handleClick={props.goToNext} />}
        {props.showAnswerCheck && <GenericButton text={'Next question✨'} handleClick={props.goToNext} />}
        {props.showTimer && <GenericButton text={'Skip✨'} handleClick={props.skipQuestion} />}
        <button
          className={styles.EndButton}
          onClick={() => {
            props.endGame(gameCode);
            window.location.reload();
          }}
        >
          END GAME
        </button>
      </div>
    </div>
  );
}
