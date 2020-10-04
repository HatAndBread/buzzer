import React, { useState, useEffect } from 'react';
import AnswerCheck from './AnswerCheck';
import HostAskQuestion from './HostAskQuestion';
import Timer from './Timer';
import LeaderBoard from './LeaderBoard';
import styles from './HostsGame.module.css';
import HostNav from './HostNav';
import Hamburger from './Hamburger';
import { sock } from '../App';

let exit = 0;
export default function HostsGame(props) {
  const [answer, setAnswer] = useState(null);
  const [playerUnderReview, setPlayerUnderReview] = useState(null);
  const [questionTime, setQuestionTime] = useState(true);
  const [timeLimit, setTimeLimit] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showTimer, setShowTimer] = useState(false);
  const [showSadFace, setShowSadFace] = useState(false);
  const [timerStartTime, setTimerStartTime] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showAnswerCheck, setShowAnswerCheck] = useState(false);
  const [goodJob, setGoodJob] = useState(false);
  const [ohNo, setOhNo] = useState(false);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [navOut, setNavOut] = useState(0);
  const [pointsAvailable, setPointsAvailable] = useState(props.playersList.length);
  const [pointsText, setPointsText] = useState('points');
  const [showPoints, setShowpoints] = useState(false);

  useEffect(() => {
    showTimer && loopy();
  }, [timerStartTime]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(timeLimit);
    }
  }, [timeLeft]);
  useEffect(() => {
    if (showAnswerCheck && props.buzzes.length === 0) {
      setShowSadFace(true);
    }
  }, [showAnswerCheck]);

  useEffect(() => {
    if (props.buzzes.length === props.playersList.length && showTimer) {
      exit = 1;
      setShowAnswerCheck(true);
      setTimeLeft(0);
      setShowTimer(false);
      setQuestionTime(false);
      toPlayersCheckingAnswers();
    }
  }, [props.buzzes, props.playersList, showTimer]);

  useEffect(() => {
    console.log(pointsAvailable);
    if (pointsAvailable === 0) {
      setPointsAvailable(props.playersList.length);
    }
    if (pointsAvailable === 1) {
      setPointsText('point');
    } else {
      setPointsText('points');
    }
  }, [pointsAvailable, props.playersList.length]);

  function loopy() {
    if (Date.now() - timerStartTime + 900 < timeLimit * 1000 && !exit) {
      let secs = Math.floor((timeLimit * 1000 - (Date.now() - timerStartTime)) * 0.001);
      setTimeLeft(secs);
      requestAnimationFrame(loopy);
    } else {
      setShowTimer(false);
      setShowAnswerCheck(true);
      toPlayersCheckingAnswers();
      exit = 0;
    }
  }
  const startTimer = () => {
    setShowTimer(true);
    setTimerStartTime(Date.now());
  };

  const handleNameClick = (playersAnswer, name) => {
    setAnswer(playersAnswer);
    setPlayerUnderReview(name);
    console.log(playersAnswer);
    if (showTimer) {
      exit = 1;
      setShowAnswerCheck(true);
      setTimeLeft(0);
      setShowTimer(false);
      setQuestionTime(false);
      toPlayersCheckingAnswers();
    }
  };

  const handleHamburgerClick = () => {
    console.log('hamburger clicked');
    navOut ? setNavOut(0) : setNavOut(1);
  };

  const handleAnswer = (points) => {
    const removeArr = [...props.buzzes];
    const plyer = removeArr.shift();
    props.setBuzzes(removeArr);
    setAnswer(null);
    sock.emit('givePoints', props.gameCode, plyer, points);
    if (points < 0) {
      showOhNo();
      props.failSound.play();
    } else {
      showGoodJob();
      props.successSound.play();
    }
  };

  const allowAnswers = () => {
    exit = 0;
    setQuestionTime(false);
    props.allowAnswers();
    props.beginHost();
    setTimeLeft(timeLimit);
    startTimer();
  };
  const goToNext = () => {
    exit = 1;
    setQuestionNumber(questionNumber + 1);
    props.setBuzzes([]);
    setTimeLeft(0);
    setShowTimer(false);
    setQuestionTime(true);
    setShowAnswerCheck(false);
    setAnswer(null);
    setShowSadFace(false);
    sock.emit('goToNext', props.gameCode);
  };
  const skipQuestion = () => {
    exit = 1;
    setShowAnswerCheck(true);
    setTimeLeft(0);
    setShowTimer(false);
    setQuestionTime(false);
    toPlayersCheckingAnswers();
  };
  const toPlayersCheckingAnswers = () => {
    sock.emit('checkingAnswers', props.gameCode);
  };
  const showGoodJob = () => {
    setGoodJob(true);
    setTimeout(() => {
      setGoodJob(false);
    }, 1500);
  };
  const showOhNo = () => {
    setOhNo(true);
    setTimeout(() => {
      setOhNo(false);
    }, 1500);
  };
  const buzzes = props.buzzes.map((buzz) => {
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
  const closeBoard = () => {
    setShowLeaderBoard(false);
  };

  return (
    <div className={styles.HostsGame}>
      <Hamburger handleClick={handleHamburgerClick} />
      <HostNav
        endGame={props.endGame}
        goToNext={goToNext}
        setShowLeaderBoard={setShowLeaderBoard}
        skipQuestion={skipQuestion}
        questionTime={questionTime}
        showAnswerCheck={showAnswerCheck}
        showTimer={showTimer}
        out={navOut}
      />
      {questionTime && (
        <HostAskQuestion
          questionNumber={questionNumber}
          allowAnswers={allowAnswers}
          timeLimit={timeLimit}
          setTimeLeft={setTimeLeft}
          setTimeLimit={setTimeLimit}
        />
      )}
      {showTimer && <Timer timeLeft={timeLeft} buzzes={buzzes} />}
      {answer && (
        <AnswerCheck
          answer={answer}
          handleAnswer={handleAnswer}
          pointsAvailable={pointsAvailable}
          setPointsAvailable={setPointsAvailable}
        />
      )}
      {answer === '' && (
        <AnswerCheck
          answer={answer}
          handleAnswer={handleAnswer}
          pointsAvailable={pointsAvailable}
          setPointsAvailable={setPointsAvailable}
        />
      )}
      {showAnswerCheck && props.buzzes.length > 0 && <ol>{buzzes}</ol>}
      {showAnswerCheck && showSadFace && (
        <div>
          <h1>
            Nobody answered!
            <span role="img" aria-label="">
              😭
            </span>
          </h1>
        </div>
      )}
      {goodJob && (
        <div className={styles.GoodJob}>
          <img style={{ borderRadius: '10px' }} alt="Good job!" src="images/goodjob.gif"></img>
        </div>
      )}
      {ohNo && (
        <div className={styles.GoodJob}>
          <img style={{ borderRadius: '10px' }} alt="Oh no!" src="images/ohno.gif"></img>
        </div>
      )}
      {showLeaderBoard && <LeaderBoard leaderBoard={props.leaderBoard} close={closeBoard} />}
      <div className={styles.GamePin}>Game pin: {props.gameCode}</div>
      {showPoints && (
        <div className={styles.PositivePointsNotifier}>
          + {pointsAvailable} {pointsText}!!!
        </div>
      )}
      <div className={styles.NegativePointsNotifier}></div>
    </div>
  );
}
