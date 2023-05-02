import styles from './Home.module.css';
import PostCard from 'components/PostCard';
import posts from 'json/posts.json';

const Home = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Home;
