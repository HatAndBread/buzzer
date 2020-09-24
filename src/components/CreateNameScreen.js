import React from 'react';
import GenericButton from './GenericButton';

export default function CreateNameScreen(props) {
  return (
    <div>
      <input onChange={props.updateName}></input>
      <GenericButton text={'Join'} handleClick={props.joinWithName} />
    </div>
  );
}
