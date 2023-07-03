import Header from "@/components/Header";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { IoChevronForward } from "react-icons/io5";
import PostCard from "@/components/PostCard";
import TweetCard from "@/components/TweetCard";
import { getRecentTweets } from "@/constant";
import { ReactNode } from "react";

export default async function Home() {
  const {res} = await getRecentTweets(1);

  function SeeMore({ path, children }: { path: string; children: ReactNode }) {
    return (
      <Link
        href={path}
        className="inline-flex items-center font-medium text-blue-500"
      >
        {children} <IoChevronForward />
      </Link>
    );
  }

  return (
    <div className="mx-auto max-w-screen-md">
      <Header />
      <main className="mt-10 space-y-8 px-4">
        <section>
          <h3 className="mb-2 text-2xl font-semibold">Cuitan baru</h3>
          <TweetCard data={res.documents[0]} />
          <SeeMore path="/tweet">Lihat lebih banyak</SeeMore>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Tulisan terbaru</h3>
          {allBlogs
            .sort((a, b) =>
              new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
            )
            .slice(0, 10)
            .map((post, idx) => (
              <PostCard post={post} key={idx} />
            ))}
          {JSON.stringify(allBlogs)}
          <SeeMore path="/blog">Lihat lebih banyak</SeeMore>
        </section>
      </main>
    </div>
  );
}
