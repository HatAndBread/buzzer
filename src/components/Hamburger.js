import React from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger(props) {
  return (
    <div className={styles.Burger} onClick={props.handleClick}>
      <div className={styles.Slice}></div>
      <div className={styles.Slice}></div>
      <div className={styles.Slice}></div>
    </div>
  );
}
