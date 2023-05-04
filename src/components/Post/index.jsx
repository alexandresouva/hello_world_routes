import { json, useParams } from 'react-router-dom';
import styles from './Post.module.css';
import posts from 'json/posts.json';
import PostTemplate from 'components/PostTemplate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h1>Post não encontrado...</h1>;
  }

  return (
    <PostTemplate
      postCover={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
      <div className={styles.markdown}>
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostTemplate>
  );
};

export default Post;
