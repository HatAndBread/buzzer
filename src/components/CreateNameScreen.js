import React from 'react';
import GenericButton from './GenericButton';
import styles from './JoinScreen.module.css';

export default function CreateNameScreen(props) {
  return (
    <div>
      <form onSubmit={props.joinWithName}>
        <input onChange={props.updateName} className={styles.NameInput} maxLength="15"></input>
      </form>
      <GenericButton text={'Join'} handleClick={props.joinWithName} />
    </div>
  );
}
