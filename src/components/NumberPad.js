import React from 'react';
import styles from './JoinScreen.module.css';

export default function NumberPad(props) {
  const buttonClick = (e) => {
    let num = e.target.value;
    if (num && props.enteredCode.length < 6) {
      props.setEnteredCode(`${props.enteredCode}${num}`);
    } else if (num && props.enteredCode >= 6) {
    } else if (e.target.name === 'back') {
      let rm = props.enteredCode.slice(0, -1);
      props.setEnteredCode(rm);
    } else {
      props.enteredCode.length === 6 ? props.join(props.enteredCode) : alert('You must enter at least 6 numbers❣️✨');
    }
  };
  return (
    <div className={styles.NumberPad}>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={buttonClick} value={1}>
                1
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={2}>
                2
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={3}>
                3
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={buttonClick} value={4}>
                4
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={5}>
                5
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={6}>
                6
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={buttonClick} value={7}>
                7
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={8}>
                8
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={9}>
                9
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={buttonClick} name={'back'} style={{ fontSize: '5vh', padding: '0px' }}>
                ⬅
              </button>
            </td>
            <td>
              <button onClick={buttonClick} value={0}>
                0
              </button>
            </td>
            <td onClick={buttonClick} style={{ fontSize: '4vh' }}>
              OK
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
