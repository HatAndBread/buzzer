import React from 'react';

export default function StartButton(props) {
  return <button onClick={props.handleClick}>{props.text}</button>;
}
