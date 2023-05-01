import styles from './Header.module.css';
import MenuItem from '../MenuItem';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <MenuItem pathname="/">Início</MenuItem>
        <MenuItem pathname="/sobremim">Sobre mim</MenuItem>
      </nav>
    </header>
  );
};

export default Header;
