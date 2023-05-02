import styles from './Banner.module.css';
import coloredCircle from 'assets/circulo_colorido.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.banner__title}>Hello world!</h1>
        <p className={styles.banner__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          cum quod ipsam aut nisi libero saepe maiores labore illum pariatur
          totam odit voluptatibus, consectetur ea blanditiis ad eum adipisci
          molestias?
        </p>
      </div>
      <div className={styles.banner__images}>
        <img
          src={coloredCircle}
          aria-hidden={true}
          className={styles.images__coloredCircle}
        />
        <img
          src="https://github.com/alexandresouva.png"
          alt="Foto do Alexandre Souva no parque"
          className={styles.images__myPhoto}
        />
      </div>
    </div>
  );
};

export default Banner;
