import Link from "next/link";

const listarpost = ({ postList }) => (
  <>
    <h2>Listar Post</h2>
    <ul>
      {postList.map((post) => (
        <Link href={`listarpost/${post.id}`} key={post.id} passHref>
          <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        </Link>
      ))}
    </ul>
  </>
);

export async function getServerSideProps() {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const postList = await response.json();
  return { props: { postList } };
}

export default listarpost;
