import Header from "@/components/Header";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { IoChevronForward } from "react-icons/io5";
import PostCard from "@/components/PostCard";
import TweetCard from "@/components/TweetCard";
import { REST_URL } from "@/constant";

// cloudflare runtime conf for server side route
export const runtime = 'edge';

async function getRecentTweet() {
  let tweet, error;
  try {
    tweet = await (
      await fetch(
        `${REST_URL}/tweets.json?orderBy=\"$key"\&limitToLast=1&print=pretty`,
        { cache: "no-store" }
      )
    ).json();
    tweet = Object.entries(tweet)[0][1];
  } catch (err) {
    error = err;
  }

  return { tweet, error };
}

export default async function Home() {
  const { tweet } = await getRecentTweet();

  return (
    <div className="mx-auto max-w-screen-md">
      <Header />
      <main className="mt-10 space-y-8 px-4">
        <section>
          <h3 className="mb-2 text-2xl font-semibold">Cuitan baru</h3>
          <TweetCard data={tweet} />
          <Link
            href="/tweet"
            className="inline-flex items-center font-medium text-blue-500"
          >
            Lihat lebih banyak <IoChevronForward />
          </Link>
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
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center font-medium text-blue-500"
          >
            Lihat lebih banyak <IoChevronForward />
          </Link>
        </section>
      </main>
    </div>
  );
}
