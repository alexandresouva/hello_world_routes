import styles from './PostTemplate.module.css';

const PostTemplate = ({ postCover, title, children }) => {
  return (
    <article className={styles.post}>
      <div
        className={styles.post__cover}
        style={{ backgroundImage: `url(${postCover})` }}
      ></div>

      <h2 className={styles.post__title}>{title}</h2>

      <div className={styles.post__content}>{children}</div>
    </article>
  );
};

export default PostTemplate;
