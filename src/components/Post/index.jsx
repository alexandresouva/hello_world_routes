import { Route, Routes, useParams } from 'react-router-dom';
import styles from './Post.module.css';
import posts from 'json/posts.json';
import PostTemplate from 'components/PostTemplate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Error404 from 'components/Error404';
import PageTemplate from 'components/PageTemplate';
import PostCard from 'components/PostCard';

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <Error404 />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <PageTemplate>
      <PostTemplate
        postCover={`/assets/posts/${post.id}/capa.png`}
        title={post.titulo}
      >
        <div className={styles.markdown}>
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>

        <div className={styles.recommended}>
          <h2 className={styles['recommended--title']}>
            Outros posts que você pode gostar:
          </h2>
          <ul className={styles['recommended--posts']}>
            {recommendedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </PostTemplate>
    </PageTemplate>
  );
};

export default Post;
