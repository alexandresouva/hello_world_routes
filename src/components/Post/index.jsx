import styles from './Post.module.css';

const Post = ({ post }) => {
  return (
    <li key={post.id} className={styles.post}>
      <div>
        <img
          src={`/assets/posts/${post.id}/capa.png`}
          alt={post.title}
          className={styles.post__cover}
        />
        <h2 className={styles.post__title}>{post.titulo}</h2>
        <button className={styles['btn-read']}>Ler</button>
      </div>
    </li>
  );
};

export default Post;
