import type { Metadata } from "next";
import Header from "@/components/Header";
import { Mdx } from "@/components/Mdx";
import { allBlogs } from "contentlayer/generated";
import dayjs from "dayjs";

interface IParams {
  params: { slug: string };
}

export function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: IParams): Metadata | undefined {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) return;

  const { title, publishedAt: publishedTime, summary: description } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      authors: "toufiqnuur",
    },
  };
}

export default function BlogPost({ params }: IParams) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) return null;

  return (
    <div className="mx-auto max-w-screen-md">
      <Header />
      <article className="mx-4 my-10 md:p-4">
        <div className="text-sm font-semibold text-zinc-400">
          {dayjs(post.publishedAt).format("ddd, DD MMMM YYYY")} — Blog
        </div>
        <h1 className="mb-10 mt-4 text-4xl font-bold">
          {post.emoji} {post.title}
        </h1>
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
