import styles from './SuccessDisplay.module.css';
import { APIData } from '../../types';
import { Meaning, PlayButton } from '../../components';

function SuccessDisplay(props: APIData) {
  return (
    <div className={styles.wrapper}>
      <PlayButton word={props.word} phonetic={props.phonetic} />
      {props.meanings.map((meaning, i) => (
        <Meaning key={i} {...meaning} />
      ))}
      <div role="separator" aria-orientation="horizontal" className={styles.separator} />
      <div className={styles.sourceWrapper}>
        <span className={styles.sourceLabel}>Source</span>
        <a href={props.sourceUrl} target="_blank" rel="noreferrer" className={styles.sourceUrl}>
          {props.sourceUrl}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default SuccessDisplay;
