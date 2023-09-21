import styles from './SuccessDisplay.module.css';
import { APIData } from '../../types';
import { Meaning, PlayButton, SourceLink } from '../../components';

function SuccessDisplay(props: APIData) {
  return (
    <div className={styles.wrapper}>
      <PlayButton word={props.word} phonetic={props.phonetic} />
      {props.meanings.map((meaning, i) => (
        <Meaning key={i} {...meaning} />
      ))}
      <div role="separator" aria-orientation="horizontal" className={styles.separator} />
      <div className={styles.sources}>
        <span className={styles.sourcesLabel}>Source(s)</span>
        <ul className={styles.sourcesList}>
          {props.sourceUrls.map((source, index) => (
            <SourceLink key={index} source={source} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SuccessDisplay;
