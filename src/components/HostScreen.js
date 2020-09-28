import React from 'react';
import GenericButton from './GenericButton';
import StartButton from './StartButton';
import styles from './HostScreen.module.css';

export default function HostScreen(props) {
  const playersList = props.playersList.map((el) => {
    return (
      <span key={el} style={{ marginRight: '16px' }}>
        &nbsp;⭐️{el}
      </span>
    );
  });

  return (
    <div>
      <GenericButton text={'⏪Back'} handleClick={props.goBack} />
      <div className={styles.HostScreen}>
        <div className={styles.CodeDisplay}>{props.gameCode}</div>
        <div className={styles.PlayersList}>{playersList}</div>
        <StartButton handleClick={props.beginHost} text={'✨START GAME✨'} />
      </div>
    </div>
  );
}
