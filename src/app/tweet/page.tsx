import Header from "@/components/Header";
import TweetList from "@/components/TweetList";

export const metadata = {
  title: "Tweet - ntxt",
  description:
    "Sebuah cuitan hal-hal random seputar pemrograman, cheatsheet dan TIL",
};

export default function Tweet() {
  return (
    <div className="mx-auto max-w-screen-md">
      <Header />
      <main className="mt-10 px-4">
        <h3 className="text-2xl font-semibold">Cuitan baru</h3>
        <TweetList />
      </main>
    </div>
  );
}
