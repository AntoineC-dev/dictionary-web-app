import { FontSelectMenu, ThemeSwitch } from '../../components/intex';
import styles from './Navbar.module.css';
import logo from '/images/logo.svg';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Dictionnary web app logo" />
      </div>
      <div className={styles.actions}>
        <FontSelectMenu />
        {/* Separator */}
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Navbar;
