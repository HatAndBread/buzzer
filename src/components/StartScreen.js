import React from 'react';
import StartButton from './StartButton';

export default function StartScreen(props) {
  return (
    <div>
      <StartButton text={'Host game ✨'} handleClick={props.createGame} />
      <StartButton text={'Join game　🎮'} handleClick={props.join} />
    </div>
  );
}
