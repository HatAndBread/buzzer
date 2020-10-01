import React from 'react';
import styles from './JoinScreen.module.css';

export default function NumberPad(props) {
  const numClick = (e) => {
    let num = parseInt(e.target.innerText);
    if (props.enteredCode.length < 6) {
      props.setEnteredCode(`${props.enteredCode}${num}`);
    }
  };
  const nanClick = (e) => {
    if (e.target.innerText === 'OK') {
      props.enteredCode.length === 6 ? props.join(props.enteredCode) : alert('You must enter at least 6 numbers❣️✨');
    } else {
      let rm = props.enteredCode.slice(0, -1);
      props.setEnteredCode(rm);
    }
  };
  return (
    <div className={styles.NumberPad}>
      <table>
        <tbody>
          <tr>
            <td onClick={numClick}>1</td>
            <td onClick={numClick}>2</td>
            <td onClick={numClick}>3</td>
          </tr>
          <tr>
            <td onClick={numClick}>4</td>
            <td onClick={numClick}>5</td>
            <td onClick={numClick}>6</td>
          </tr>
          <tr>
            <td onClick={numClick}>7</td>
            <td onClick={numClick}>8</td>
            <td onClick={numClick}>9</td>
          </tr>
          <tr>
            <td onClick={nanClick} style={{ fontSize: '4vh' }}>
              ⬅
            </td>
            <td onClick={numClick}>0</td>
            <td onClick={nanClick} style={{ fontSize: '4vh' }}>
              OK
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
