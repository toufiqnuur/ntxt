import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { allBlogs } from "contentlayer/generated";

export const metadata = {
  title: "Blog - ntxt",
  description:
    "Sebuah laman yang berisi dokumentasi pemrograman dan internet yang dibuat dalam bentuk blog",
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-screen-md">
      <Header />
      <main className="mt-10 px-4">
        <h3 className="text-2xl font-semibold">Blog</h3>
        {allBlogs
          .sort((a, b) =>
            new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
          )
          .map((post) => (
            <PostCard post={post} />
          ))}
      </main>
    </div>
  );
}
