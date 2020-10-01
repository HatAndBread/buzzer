import React, { useRef, useEffect } from 'react';
import GenericButton from './GenericButton';
import styles from './JoinScreen.module.css';

export default function CreateNameScreen(props) {
  const theInput = useRef();
  useEffect(() => {
    theInput.current.focus();
  }, [theInput]);
  return (
    <div style={{ display: 'flex' }}>
      <form onSubmit={props.joinWithName}>
        <input ref={theInput} onChange={props.updateName} className={styles.NameInput} maxLength="15"></input>
      </form>
      <GenericButton text={'Join'} handleClick={props.joinWithName} />
    </div>
  );
}
