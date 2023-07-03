import { Blog } from "contentlayer/generated";
import Link from "next/link";

export default function PostCard({ post }: { post: Blog }) {
  return (
    <Link href={`blog/${post.slug}`}>
      <div className="group mt-4 flex cursor-pointer space-x-4" key={post.slug}>
        <span className="mt-0.5 text-2xl">{post.emoji}</span>
        <div>
          <h5 className="font-medium leading-tight text-zinc-200 group-hover:underline">
            {post.title}
          </h5>
          <span className="text-sm text-zinc-400">{post.publishedAt}</span>
        </div>
      </div>
    </Link>
  );
}
