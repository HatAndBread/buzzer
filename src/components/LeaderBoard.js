import React, { useRef, useState } from 'react';
import styles from './HostsGame.module.css';

export default function LeaderBoard(props) {
  const [pos, setPos] = useState({ x: null, y: null });
  const boardRef = useRef();
  const leaders = props.leaderBoard.map((player) => {
    return <li key={`${player}${Math.floor(Math.random())}`}>{player}</li>;
  });
  const handleDragEnd = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      ref={boardRef}
      draggable
      className={styles.LeaderBoard}
      onDragEnd={handleDragEnd}
      style={{ top: `${pos.y}px`, left: `${pos.x}px` }}
    >
      <button className={styles.closer} onClick={props.close}>
        ×
      </button>
      <h2>Leaders</h2>
      <ul>{leaders}</ul>
    </div>
  );
}
