import "./Main.css";

export const Main = (props) => {
  const { posts, isModalOpen = false } = props;

  return (
    <main>
      {isModalOpen && <div className="modal">Ciao</div>}
      <div class="container">
        <div class="main-grid">
          <aside onClick={() => console.log()}></aside>
          <div role="list">
            {posts.slice(0, 6).map((post) => (
              <Article key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export function Article(props) {
  const { post = {} } = props;

  return (
    <article role="listitem">
      <div className="content">
        <h3>{post.title}</h3>
        <div>
          <small>by User {post.userId}</small>
        </div>
        <p>{post.body}</p>
      </div>
    </article>
  );
}

export default Main;
