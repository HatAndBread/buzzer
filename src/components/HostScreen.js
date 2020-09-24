import React from 'react';
import GenericButton from './GenericButton';

export default function HostScreen(props) {
  return (
    <div>
      <GenericButton text={'⏪Back'} handleClick={props.goBack} />
      <div>{props.gameCode}</div>
    </div>
  );
}
