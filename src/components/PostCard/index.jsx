import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <li key={post.id} className={styles.card}>
      <div>
        <img
          src={`/assets/posts/${post.id}/capa.png`}
          alt={post.title}
          className={styles.card__cover}
        />
        <h2 className={styles.card__title}>{post.titulo}</h2>
        <button className={styles['btn-read']}>Ler</button>
      </div>
    </li>
  );
};

export default PostCard;
