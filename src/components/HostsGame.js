import React, { useState, useEffect } from 'react';
import { sock } from '../App';

export default function HostsGame(props) {
  useEffect(() => {
    console.log(props.buzzes);
  });
  const buzzes = props.buzzes.map((buzz) => {
    return <li key={buzz}>{buzz}</li>;
  });
  return (
    <div>
      <ol>{buzzes}</ol>
    </div>
  );
}
