import Navbar from "../../components/navbar";
import { auth } from "../../api/auth/[...auth]/route";
import axios from "axios";

export default async function MainPage() {
  const session = await auth().getSession();

  if (!session) {
    return (
      <html>
        <body>
          <script>window.location.href = "/signin"</script>
        </body>
      </html>
    );
  }

  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  return (
    <div>
      <Navbar session={session} />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Server-Fetched Posts</h1>
        <ul className="space-y-2">
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} className="border p-2 rounded">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
