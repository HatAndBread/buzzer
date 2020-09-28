import React, { useState } from 'react';
import GenericButton from './GenericButton';
import CreateNameScreen from './CreateNameScreen';
import { apiPost } from '../logic/api';
import NumberPad from './NumberPad';
import NumberDisplay from './NumberDisplay';
import styles from './JoinScreen.module.css';

export default function JoinScreen(props) {
  const [enteredCode, setEnteredCode] = useState('');
  const [userName, setUserName] = useState(null);
  const [createNameScreen, setCreateNameScreen] = useState(false);
  const [waitScreen, setWaitScreen] = useState(false);

  const updateName = (e) => {
    setUserName(e.target.value);
  };
  const join = async (code) => {
    const res = await apiPost('/join', { code: code });
    if (res.ok) {
      props.setJoinedGame(enteredCode);
      setCreateNameScreen(true);
    } else {
      alert('That game is not currently available 😭');
    }
  };
  const joinWithName = async (e) => {
    e && e.preventDefault();
    const res = await apiPost('/add-player', { player: userName, code: enteredCode });
    console.log(res);
    if (res.ok) {
      console.log('It worked!');
      props.setPlayerName(userName);
      props.setGameCode(enteredCode);
      props.joinRoom(enteredCode, userName);
      setCreateNameScreen(false);
      setWaitScreen(true);
    } else {
      if ((res.msg = 'used')) {
        alert('Sorry, that name is already used. Please choose a new one❣️✨');
      } else {
        alert('Sorry, the game you are trying to play no longer seems to be available. Please try again.✨');
      }
    }
  };
  return (
    <div>
      <GenericButton text={'⏪Back'} handleClick={props.goBack} />
      <div className={styles.JoinScreen}>
        <NumberDisplay enteredCode={enteredCode} />
        {!createNameScreen && !waitScreen && (
          <NumberPad enteredCode={enteredCode} setEnteredCode={setEnteredCode} join={join} />
        )}
        {createNameScreen && <CreateNameScreen updateName={updateName} joinWithName={joinWithName} />}
        {waitScreen && <WaitForGameAfterJoin />}
      </div>
    </div>
  );
}

function WaitForGameAfterJoin() {
  return (
    <div>
      <img alt="Please wait for the game to begin...✨" src="/images/waiting.gif" style={{ width: '50vh' }}></img>
    </div>
  );
}
