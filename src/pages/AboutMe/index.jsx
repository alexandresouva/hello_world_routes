import PostTemplate from 'components/PostTemplate';
import styles from './AboutMe.module.css';
import postCover from 'assets/sobre_mim_capa.png';
import photoAboutMe from 'assets/goku-dragon-ball-super-1200x900.webp';

const AboutMe = () => {
  return (
    <PostTemplate postCover={postCover} title="Sobre mim">
      <h3 className={styles.post__subtitle}>Olá, eu sou o Goku!</h3>
      <img
        src={photoAboutMe}
        alt="Foto do Goku sorrindo"
        className={styles.post__photo}
      />

      <p className={styles.post__paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        pariatur ipsum voluptatem numquam veniam, nostrum dicta id est debitis
        error laboriosam enim fuga assumenda facere dolore ipsam voluptatibus
        ratione quos?
      </p>
      <p className={styles.post__paragraph}>
        A itaque enim unde eveniet. Maxime voluptatem iste, magnam deserunt
        veniam fugit neque nobis illum odit cumque ipsa temporibus sit voluptate
        corporis. Vel, quo? Fuga, nisi? Magni ducimus explicabo saepe.
      </p>
      <p className={styles.post__paragraph}>
        Sit repudiandae necessitatibus molestiae, earum asperiores possimus
        veniam voluptate optio sint repellat amet quod tenetur labore debitis
        accusamus voluptatem culpa tempora velit? Omnis consequatur eligendi,
        nesciunt cum iusto ex doloremque!
      </p>
      <p className={styles.post__paragraph}>
        Nisi expedita, modi pariatur aut vel tempore facilis. Rerum voluptate
        mollitia accusantium temporibus laudantium cupiditate commodi velit,
        adipisci, aliquam, qui facere. Eos aut sapiente eaque inventore, soluta
        sit voluptatibus aliquid.
      </p>
      <p className={styles.post__paragraph}>
        Eaque ipsam repudiandae quo odio voluptatum corrupti amet quidem sequi
        ea nihil nostrum itaque vel exercitationem cupiditate dicta voluptatibus
        ex delectus optio explicabo commodi, asperiores neque quas aliquam
        adipisci? Possimus?
      </p>
      <p className={styles.post__paragraph}>
        Amet in minus, veritatis nam excepturi expedita id, ad dolores labore
        quisquam optio vitae esse adipisci consequuntur officia itaque numquam
        tempore nobis ipsum explicabo at voluptatibus accusantium maiores
        assumenda! Eius.
      </p>
    </PostTemplate>
  );
};

export default AboutMe;
