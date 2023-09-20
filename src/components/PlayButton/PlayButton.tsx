import * as React from 'react';
import styles from './PlayButton.module.css';
import { APIData } from '../../types';

type PlayButtonProps = Pick<APIData, 'word' | 'phonetic'>;

function PlayButton(props: PlayButtonProps) {
  const playMp3 = React.useCallback(() => {
    return new Audio(props.phonetic.audio).play();
  }, [props.phonetic.audio]);
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{props.word}</h2>
        <span className={styles.phonetic}>{props.phonetic.text}</span>
      </div>
      <button className={styles.btn} aria-label="Read the audio of the current word" onClick={playMp3}>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default PlayButton;
