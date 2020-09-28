import React, { useState, useEffect } from 'react';
import styles from './PlayersGame.module.css';
export default function PlayersGame(props) {
  const [waitForQuestion, setWaitForQuestion] = useState(true);
  const [afterAnswer, setAfterAnswer] = useState(false);
  const [playersAnswer, setPlayersAnswer] = useState();
  const handleChange = (e) => {
    setPlayersAnswer(e.target.value);
  };
  useEffect(() => {
    console.log(playersAnswer);
  }, [playersAnswer]);
  useEffect(() => {
    props.allowingAnswers ? setWaitForQuestion(false) : setWaitForQuestion(true);
  }, [props.allowingAnswers]);
  return (
    <div className={styles.PlayersGame}>
      {props.allowingAnswers && !afterAnswer && (
        <div>
          <textarea placeholder="Type your answer here. ✨" onChange={handleChange}></textarea>
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
