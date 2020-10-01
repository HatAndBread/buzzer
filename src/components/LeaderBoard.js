import React from 'react';
import styles from './HostsGame.module.css';

export default function LeaderBoard(props) {
  const leaders = props.leaderBoard.map((player) => {
    return <li key={`${player}${Math.floor(Math.random())}`}>{player}</li>;
  });
  return (
    <div draggable className={styles.LeaderBoard}>
      <ul>{leaders}</ul>
    </div>
  );
}
