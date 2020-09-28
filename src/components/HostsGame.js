import React, { useState, useEffect } from 'react';
import AnswerCheck from './AnswerCheck';
import HostAskQuestion from './HostAskQuestion';
import Timer from './Timer';
import styles from './HostsGame.module.css';
import HostNav from './HostNav';

let exit = 0;
export default function HostsGame(props) {
  const [answer, setAnswer] = useState(null);
  const [playerUnderReview, setPlayerUnderReview] = useState(null);
  const [questionTime, setQuestionTime] = useState(true);
  const [timeLimit, setTimeLimit] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showTimer, setShowTimer] = useState(false);
  const [timerStartTime, setTimerStartTime] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  useEffect(() => {
    console.log(props.buzzes);
    console.log(timeLimit);
    console.log(timeLeft);
  });
  useEffect(() => {
    showTimer && loopy();
  }, [timerStartTime]);

  function loopy() {
    console.log(showTimer);
    if (Date.now() - timerStartTime + 900 < timeLimit * 1000 && !exit) {
      let secs = Math.floor((timeLimit * 1000 - (Date.now() - timerStartTime)) * 0.001);
      setTimeLeft(secs);
      requestAnimationFrame(loopy);
    } else {
      setShowTimer(false);
      console.log('finished');
      exit = 0;
    }
  }
  const startTimer = () => {
    setShowTimer(true);
    setTimerStartTime(Date.now());
  };
  const showLeaderBoard = () => {
    console.log('showin leader board');
  };
  const handleNameClick = (playersAnswer, name) => {
    setAnswer(playersAnswer);
    setPlayerUnderReview(name);
  };
  const handleWrongAnswer = () => {
    console.log(`${playerUnderReview} answered wrong`);
    const removeArr = [...props.buzzes];
    const wrongAnswerPlayer = removeArr.shift();
    console.log(wrongAnswerPlayer, 'answered wrong');
    console.log(removeArr, 'new array');
    props.setBuzzes(removeArr);
    setAnswer(null);
  };
  const handleRightAnswer = () => {
    console.log(`${playerUnderReview} answered right`);
  };
  const allowAnswers = () => {
    setQuestionTime(false);
    props.allowAnswers();
    startTimer();
  };
  const goToNext = () => {
    exit = 1;
    setQuestionNumber(questionNumber + 1);
    props.setBuzzes([]);
    setTimeLeft(0);
    setShowTimer(false);
    setQuestionTime(true);
    console.log('going to next question');
  };
  const buzzes = props.buzzes.map((buzz) => {
    console.log(buzz);
    return (
      <li key={buzz.name}>
        <button
          className={styles.NameButton}
          onClick={() => {
            handleNameClick(buzz.answer, buzz.name);
          }}
        >
          {buzz.name}
        </button>
      </li>
    );
  });
  return (
    <div className={styles.HostsGame}>
      <HostNav endGame={props.endGame} goToNext={goToNext} showLeaderBoard={showLeaderBoard} />
      {questionTime && (
        <HostAskQuestion
          questionNumber={questionNumber}
          allowAnswers={allowAnswers}
          timeLimit={timeLimit}
          setTimeLeft={setTimeLeft}
          setTimeLimit={setTimeLimit}
        />
      )}
      {showTimer && <Timer timeLeft={timeLeft} />}
      {answer && (
        <AnswerCheck answer={answer} handleRightAnswer={handleRightAnswer} handleWrongAnswer={handleWrongAnswer} />
      )}
      <ol>{buzzes}</ol>
    </div>
  );
}
