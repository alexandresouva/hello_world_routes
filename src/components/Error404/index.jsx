import MainButton from 'components/MainButton';
import styles from './Error404.module.css';
import error404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.content}>
        <span className={styles.error}>404</span>
        <h1 className={styles.error__title}>Ops! Página não encontrada.</h1>
        <p className={styles.error__paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam qui
          impedit ducimus, tenetur at dignissimos.
        </p>
        <div
          className={styles.error__btnContainer}
          onClick={() => navigate(-1)}
        >
          <MainButton>Voltar</MainButton>
        </div>

        <img
          className={styles.error__img}
          src={error404}
          alt="Cachorro de óculos e vestido como humanos."
        />
      </div>
      <div className={styles.empty__space}></div>
    </>
  );
};

export default Error404;
