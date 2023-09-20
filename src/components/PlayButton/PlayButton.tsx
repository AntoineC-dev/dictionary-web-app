import * as React from 'react';
import styles from './PlayButton.module.css';
import { APIData } from '../../types';

type PlayButtonProps = Pick<APIData, 'word' | 'phonetic'>;

function PlayButton(props: PlayButtonProps) {
  const playMp3 = React.useCallback(() => {
    return props.phonetic.audio ? new Audio(props.phonetic.audio).play() : null;
  }, [props.phonetic.audio]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{props.word}</h2>
        {!!props.phonetic.text && <span className={styles.phonetic}>{props.phonetic.text}</span>}
      </div>
      <button
        className={styles.btn}
        aria-label="Read the audio of the current word"
        aria-disabled={props.phonetic.audio ? 'false' : 'true'}
        onClick={playMp3}>
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
