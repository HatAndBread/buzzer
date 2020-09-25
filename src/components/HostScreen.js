import React from 'react';
import GenericButton from './GenericButton';
import StartButton from './StartButton';

export default function HostScreen(props) {
  const playersList = props.playersList.map((el) => {
    return <li key={el}>{el}</li>;
  });

  return (
    <div>
      <GenericButton text={'⏪Back'} handleClick={props.goBack} />
      <div>{props.gameCode}</div>
      <ul>{playersList}</ul>
      <StartButton handleClick={props.beginHost} text={'START GAME✨'} />
    </div>
  );
}
