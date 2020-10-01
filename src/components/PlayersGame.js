import React, { useState, useEffect, useRef } from 'react';
import { sock } from '../App';
import styles from './PlayersGame.module.css';
export default function PlayersGame(props) {
  const [waitForQuestion, setWaitForQuestion] = useState(true);
  const [playersAnswer, setPlayersAnswer] = useState('');
  const [allowingAnswers, setAllowingAnswers] = useState(false);
  const [afterAnswer, setAfterAnswer] = useState(false);
  const [whileCheckingAnswers, setWhileCheckingAnswers] = useState(false);

  const answerInput = useRef(null);

  useEffect(() => {
    sock.on('goToNext', () => {
      console.log('go to next');
      setWaitForQuestion(true);
      setAfterAnswer(false);
      setAllowingAnswers(false);
      setWhileCheckingAnswers(false);
    });
    sock.on('allowAnswers', () => {
      console.log('allow answers');
      setAllowingAnswers(true);
      setAfterAnswer(false);
      setWhileCheckingAnswers(false);
      console.log('You may answer now');
      setWaitForQuestion(false);
    });
    sock.on('checkingAnswers', () => {
      console.log('check answers');
      setWhileCheckingAnswers(true);
      setAfterAnswer(false);
      setAllowingAnswers(false);
      setWaitForQuestion(false);
    });
  }, []);
  useEffect(() => {
    allowingAnswers && !afterAnswer && answerInput.current.focus();
  });

  const handleChange = (e) => {
    setPlayersAnswer(e.target.value);
  };

  return (
    <div className={styles.PlayersGame}>
      {allowingAnswers && !afterAnswer && (
        <div className={styles.Answering}>
          <textarea ref={answerInput} placeholder="Type your answer here. ✨" onChange={handleChange}></textarea>
          <BuzzButton
            buzz={() => {
              props.buzz(playersAnswer);
              setAfterAnswer(true);
            }}
          />
        </div>
      )}
      {waitForQuestion && (
        <div className={styles.WaitForQuestion}>
          <h1>
            Listen carefully to the question!{' '}
            <span role="img" aria-label="LISTEN!">
              👂
            </span>
          </h1>
          <img alt="👂👂👂👂👂👂👂👂👂👂" src="/images/listen.gif"></img>
        </div>
      )}
      {afterAnswer && <img alt="One moment please...✨" src="/images/waiting.gif" style={{ width: '50vh' }}></img>}
      {whileCheckingAnswers && (
        <img style={{ width: '50vw' }} src="/images/anticipation.gif" alt="Checking the answers...💖🌈"></img>
      )}
    </div>
  );
}

function BuzzButton(props) {
  return (
    <button onClick={props.buzz} className={styles.BuzzButton}>
      BUZZ
    </button>
  );
}
