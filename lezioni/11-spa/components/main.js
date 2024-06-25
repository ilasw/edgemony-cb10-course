const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getMainHTML() {
  const sidebarHTML = getSidebarHTML();

  const posts = await fetch(POST_API_URL)
    .then((r) => r.json())
    .catch((e) => {
      console.error(e);
      return [];
    });

  const postsHTML = getPostsHTML({ posts });

  return `
        <main>
           <div class="container">
                <div class="main-grid">
                ${sidebarHTML}
                ${postsHTML}
                </div>
           </div>
        </main>
    `;
}

function getSidebarHTML() {
  return `<aside>Sidebar</aside>`;
}

function getPostsHTML(props) {
  const { posts = [] } = props;

  const postsHTML = posts
    .slice(0, 10)
    .map(function (post) {
      return `
        <article role="listitem">
            <h3>${post.title}</h3>
            <div><small>by User ${post.userId}</small></div>
            <p>${post.body}</p>
        </article>
      `;
    })
    .join("");

  console.log({ posts, postsHTML });

  return `
  <section>
    <h2>Lista post</h2>
    <div role="list">
    ${postsHTML}
    </div>
  </section>`;
}

export { getMainHTML };
