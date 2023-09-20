import styles from './Meaning.module.css';
import { Meaning as MeaningProps } from '../../types';

function renderBottomElems(title: string, elems: string[]) {
  return (
    <div className={styles.bottom}>
      <span className={styles.bottomLabel}>{title}</span>
      <div className={styles.bottomList}>
        {elems.map((elem, i) => (
          <span key={i}>{(i ? ', ' : '') + elem}</span>
        ))}
      </div>
    </div>
  );
}

function Meaning(props: MeaningProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.posWrapper}>
        <p className={styles.pos}>{props.partOfSpeech}</p>
        <div role="separator" className={styles.separator} />
      </div>
      <p className={styles.title}>Meaning</p>
      <ul className={styles.list}>
        {props.definitions.map((def, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.definition}>{def.definition}</span>
            {def.example && <span className={styles.example}>{`"${def.example}"`}</span>}
          </li>
        ))}
      </ul>
      {props.synonyms.length !== 0 && renderBottomElems('Synonyms', props.synonyms)}
      {props.antonyms.length !== 0 && renderBottomElems('Antonyms', props.antonyms)}
    </div>
  );
}

export default Meaning;
