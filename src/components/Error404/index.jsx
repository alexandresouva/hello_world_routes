import styles from './Error404.module.css';
import error404 from 'assets/erro_404.png';

const Error404 = () => {
  return (
    <>
      <div className={styles.content}>
        <span className={styles.error}>404</span>
        <h1 className={styles.error__title}>Ops! Página não encontrada.</h1>
        <p className={styles.error__paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam qui
          impedit ducimus, tenetur at dignissimos.
        </p>
        <p className={styles.error__paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          quis alias tempora quod corrupti aperiam repudiandae ab repellendus
          eum, in eligendi. Odio omnis beatae perspiciatis odit cumque itaque
          nemo facere!
        </p>
        <div>
          <button className={styles.error__btn}>Voltar</button>
        </div>

        <img src={error404} alt="Cachorro de óculos e vestido como humanos." />
      </div>
      <div className={styles.empty__space}></div>
    </>
  );
};

export default Error404;
