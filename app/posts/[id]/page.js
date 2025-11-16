import Navbar from "../../../components/navbar";
import { getServerSession } from '../../lib/auth';

import axios from "axios";

export default async function PostPage({ params }) {
  const session = await getServerSession();


  if (!session) {
    return (
      <html>
        <body>
          <script>window.location.href = "/signin"</script>
        </body>
      </html>
    );
  }

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = res.data;

  return (
    <div>
      <Navbar session={session} />
      <main className="p-6">
        <div className="card">
          <h1 className="text-2xl font-bold mb-4 text-[#5b21b6]">{post.title}</h1>
          <p className="text-gray-800">{post.body}</p>
        </div>
      </main>
    </div>
  );
}
