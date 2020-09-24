import React, { useState, useEffect } from 'react';
import JoinScreen from './components/JoinScreen';
import HostScreen from './components/HostScreen';
import StartScreen from './components/StartScreen';
import { apiGet, apiPost } from './logic/api.js';
import './App.css';
import io from 'socket.io-client';

export const UserContext = React.createContext();

function App() {
  const [message, setMessage] = useState('');
  const [gameCode, setGameCode] = useState(null);
  const [startScreen, setStartScreen] = useState(true);
  const [joinScreen, setJoinScreen] = useState(false);
  const [hostScreen, setHostScreen] = useState(false);
  const [joinedGame, setJoinedGame] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const sock = io();
    setSocket(sock);
    sock.on('yoyo', (msg) => {
      setMessage(msg);
    });
    sock.on('new', (msg) => {
      console.log(msg);
    });
    sock.on('buzz', (msg) => {
      console.log(`buzz from ${msg}`);
    });
  }, []);
  const joinRoom = (num) => {
    socket.emit('join', `/${num}`);
  };
  const buzz = () => {
    socket.emit('buzz', playerName, gameCode);
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
    const res = await apiPost('/create', { code: code });
    if (res) {
      console.log(res);
    } else {
      console.log('error!');
    }
  };
  return (
    <div className="App">
      <button onClick={buzz}>emit!</button>
      <p>{message}</p>
      <button
        onClick={() => {
          endGame(gameCode);
        }}
      >
        End game
      </button>
      <UserContext.Provider value={{ player: playerName, gameCode: gameCode }}>
        {startScreen && <StartScreen goBack={goBack} createGame={createGame} join={join} />}

        {hostScreen && <HostScreen goBack={goBack} gameCode={gameCode} />}
        {joinScreen && (
          <JoinScreen
            goBack={goBack}
            setJoinedGame={setJoinedGame}
            setGameCode={setGameCode}
            setPlayerName={setPlayerName}
            joinRoom={joinRoom}
          />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
