import { APIError } from '../../api/types';
import styles from './ErrorDisplay.module.css';

function ErrorDisplay({ message, resolution, title }: APIError) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.emoji} role="img" aria-label="" aria-hidden="true">
        😕
      </span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{`${message} ${resolution}`}</p>
    </div>
  );
}

export default ErrorDisplay;
