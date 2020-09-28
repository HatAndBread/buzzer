import React from 'react';
import styles from './GenericButton.module.css';

export default function GenericButton(props) {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <button className={styles.genericButt} onClick={handleClick}>
      {props.text}
    </button>
  );
}
