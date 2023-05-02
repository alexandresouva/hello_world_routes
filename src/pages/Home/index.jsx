import styles from './Home.module.css';
import Post from 'components/Post';
import posts from 'json/posts.json';

const Home = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Home;
