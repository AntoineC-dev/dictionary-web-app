import { FontSelectMenu } from '../../components/intex';
import styles from './Navbar.module.css';
import logo from '/images/logo.svg';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Dictionnary web app logo" />
      </div>
      <div>
        <FontSelectMenu />
        {/* Separator */}
        {/* theme switch */}
      </div>
    </div>
  );
}

export default Navbar;
