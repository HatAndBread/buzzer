import React, { useState, useEffect, useRef } from 'react';
import HostsGame from './components/HostsGame';
import PlayersGame from './components/PlayersGame';
import JoinScreen from './components/JoinScreen';
import HostScreen from './components/HostScreen';
import StartScreen from './components/StartScreen';
import { apiGet, apiPost } from './logic/api.js';
import './App.css';
import s from 's2pd';
import io from 'socket.io-client';

const sock = io('/games');

export { sock };

export const UserContext = React.createContext();

function App() {
  const [gameCode, setGameCode] = useState(null);
  const [gameObject, setGameObject] = useState(null);
  const [startScreen, setStartScreen] = useState(true);
  const [joinScreen, setJoinScreen] = useState(false);
  const [hostScreen, setHostScreen] = useState(false);
  const [joinedGame, setJoinedGame] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [hostGamePlayers, setHostGamePlayers] = useState([]); //all player data
  const [playersList, setPlayersList] = useState([]); // just usernames
  const [showHostsGame, setShowHostsGame] = useState(false);
  const [showPlayersGame, setShowPlayersGame] = useState(false);
  const [buzzName, setBuzzName] = useState(null); // player who most recently buzzed
  const [buzzes, setBuzzes] = useState([]);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [bgm, setBgm] = useState(null);
  const [successSound, setSuccessSound] = useState(null);
  const [failSound, setFailSound] = useState(null);
  const [timeUpSound, setTimeUpSound] = useState(null);

  const canvas = useRef();

  useEffect(() => {
    sock.on('newPlayer', (obj) => {
      const arr = [];
      for (let i = 0; i < obj.players.length; i++) {
        arr.push(obj.players[i].name);
      }
      setPlayersList(arr);
      setHostGamePlayers(obj.players);
    });
    sock.on('buzz', (name, answer) => {
      setBuzzName({ name: name, answer: answer });
      console.log(answer);
    });
    sock.on('start', () => {
      //what to do when host starts a game
      setShowPlayersGame(true);
      setStartScreen(false);
      setHostScreen(false);
      setJoinScreen(false);
    });
    sock.on('gameObjectUpdated', (game) => {
      setGameObject(game);
    });
    s.addCanvas(canvas.current, `${window.innerWidth}`, `${window.innerHeight}`);
    s.onResize(() => {
      s.resize(window.innerWidth, window.innerHeight);
    });
    s.listenForKeyboard();
    s.listenForMouse();
    s.listenForTouch();
    s.stillCanvas();
    setBgm(new s.Sound('/sound/bgm.mp3', 0.2, true, 1));
    setSuccessSound(new s.Sound('/sound/cheer.mp3', 0.4, false, 1));
    setFailSound(new s.Sound('/sound/failure.mp3', 0.4, false, 1));
    setTimeUpSound(new s.Sound('/sound/Buzzer-sound.mp3', 0.2, false, 1.3));
    s.whileLoading(() => {});
    s.loop(() => {});
  }, []);

  useEffect(() => {
    if (gameObject) {
      const players = [...gameObject.players];
      players.sort((a, b) => {
        return a.points - b.points;
      });
      players.reverse();
      let leaders = [];
      console.log(players);
      for (let i = 0; i < players.length; i++) {
        players[i].points === 1
          ? leaders.push(`⭐️${players[i].name}: ${players[i].points} point`)
          : leaders.push(`⭐️${players[i].name}: ${players[i].points} points`);
      }
      setLeaderBoard(leaders);
    }
  }, [gameObject]);

  useEffect(() => {
    console.log('leader board: ', leaderBoard);
  }, [leaderBoard]);

  useEffect(() => {
    if (buzzName) {
      if (!buzzes.includes(buzzName.name)) {
        setBuzzes((buzzes) => [...buzzes, buzzName]); // Push into state!
      }
    }
  }, [buzzName]);

  const joinRoom = (num) => {
    sock.emit('join', `/${num}`);
  };
  const buzz = (answer) => {
    sock.emit('buzz', playerName, gameCode, answer);
  };
  const allowAnswers = () => {
    sock.emit('allowAnswers', gameCode);
  };
  const hostGoToNextQuestion = () => {
    sock.emit('goToNext', gameCode);
  };

  const goBack = () => {
    setStartScreen(true);
    setHostScreen(false);
    setJoinScreen(false);
    if (joinedGame) {
      endGame(joinedGame);
      setJoinedGame(null);
    }
    if (gameCode) {
      endGame(gameCode);
      setGameCode(null);
    }
  };

  const createGame = async () => {
    const res = await apiGet('/create');
    s.loadAudio();
    bgm.play();
    if (res) {
      setGameCode(res.gameNumber);
      setStartScreen(false);
      setJoinScreen(false);
      setHostScreen(true);
      console.log(res.gameNumber);
      joinRoom(res.gameNumber);
    } else {
      console.log('error!');
    }
  };

  const join = () => {
    setJoinScreen(true);
    setHostScreen(false);
    setStartScreen(false);
  };
  const endGame = async (code) => {
    console.log(code);
    const res = await apiPost('/create', { code: code });
    if (res) {
      console.log(res);
    } else {
      console.log('error!');
    }
  };

  const beginHost = () => {
    console.log('HOSTIN');
    setJoinScreen(false);
    setHostScreen(false);
    setStartScreen(false);
    setShowHostsGame(true);
    sock.emit('host', gameCode);
  };
  const cancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className="App" onDragEnter={cancel} onDragOver={cancel}>
      <canvas ref={canvas}></canvas>
      <UserContext.Provider value={{ player: playerName, gameCode: gameCode }}>
        {startScreen && <StartScreen goBack={goBack} createGame={createGame} join={join} />}

        {hostScreen && (
          <HostScreen goBack={goBack} gameCode={gameCode} playersList={playersList} beginHost={beginHost} />
        )}
        {joinScreen && (
          <JoinScreen
            goBack={goBack}
            setJoinedGame={setJoinedGame}
            setGameCode={setGameCode}
            setPlayerName={setPlayerName}
            joinRoom={joinRoom}
          />
        )}
        {showHostsGame && (
          <HostsGame
            buzzes={buzzes}
            setBuzzes={setBuzzes}
            allowAnswers={allowAnswers}
            endGame={endGame}
            beginHost={beginHost}
            gameCode={gameCode}
            hostGoToNextQuestion={hostGoToNextQuestion}
            hostGamePlayers={hostGamePlayers}
            leaderBoard={leaderBoard}
            failSound={failSound}
            successSound={successSound}
            timeUpSound={timeUpSound}
            playersList={playersList}
          />
        )}
        {showPlayersGame && <PlayersGame buzz={buzz} />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
