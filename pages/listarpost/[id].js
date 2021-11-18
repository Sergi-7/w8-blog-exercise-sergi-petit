const SSG = ({ post }) => (
  <>
    <h2>Detalle</h2>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </>
);

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const posts = await response.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://isdi-blog-posts-api.herokuapp.com/posts/${params.id}`
  );
  const post = await response.json();
  return {
    props: { post },
  };
};
export default SSG;
