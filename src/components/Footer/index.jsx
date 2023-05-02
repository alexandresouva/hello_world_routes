import styles from './Footer.module.css';
import { ReactComponent as Copyright } from 'assets/marca_registrada.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright />
      <p className={styles.footer__credits}>
        Desenvolvido por{' '}
        <a
          href="https://github.com/alexandresouva"
          target="_blank"
          className={styles.credits__author}
        >
          Alexandre Souva
        </a>
      </p>
    </footer>
  );
};

export default Footer;
