import Header from "@/components/Header";
import TweetCard from "@/components/TweetCard";
import { REST_URL } from "@/constant";

// cloudflare runtime conf for server side route
export const runtime = 'edge';

export const metadata = {
  title: "Tweet - ntxt",
  description:
    "Sebuah cuitan hal-hal random seputar pemrograman, cheatsheet dan TIL",
};

async function getTweets() {
  let tweets, error;
  try {
    tweets = await (
      await fetch(`${REST_URL}/tweets.json?orderBy=\"$key"\&print=pretty`, {
        cache: "no-store",
      })
    ).json();
    tweets = Object.entries(tweets);
  } catch (err) {
    error = err;
  }

  return { tweets, error };
}

export default async function Tweet() {
  const { tweets } = await getTweets();

  return (
    <div className="mx-auto max-w-screen-md">
      <Header />
      <main className="mt-10 px-4">
        <h3 className="text-2xl font-semibold">Cuitan baru</h3>
        <div className="mt-2 divide-y divide-zinc-500/50">
          {tweets.map(
            (tweet: [string, { uploadedAt: number; body: string }]) => (
              <TweetCard data={tweet[1]} key={tweet[0]} />
            )
          )}
        </div>
      </main>
    </div>
  );
}
