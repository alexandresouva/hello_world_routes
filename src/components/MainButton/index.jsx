import styles from './MainButton.module.css';

const MainButton = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default MainButton;
