import { Route, Routes, useParams } from 'react-router-dom';
import styles from './Post.module.css';
import posts from 'json/posts.json';
import PostTemplate from 'components/PostTemplate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Error404 from 'components/Error404';
import PageTemplate from 'components/PageTemplate';

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <Error404 />;
  }

  return (
    <Routes>
      <Route element={<PageTemplate />}>
        <Route
          index
          element={
            <PostTemplate
              postCover={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
            >
              <div className={styles.markdown}>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostTemplate>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
