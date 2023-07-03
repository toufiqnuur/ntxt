"use client";

import { useEffect, useRef, useState } from "react";
import { getTweets } from "@/constant";
import TweetCard from "./TweetCard";
import Spinner from "./spinner";

export default function TweetList() {
  const [offset, setOffset] = useState(0);
  const [tweets, setTweets] = useState([]);
  const [isLast, setIsLast] = useState(false);

  const spinner = useRef();

  async function loadTweets(offset: number) {
    console.log("fetch")
    const { res } = await getTweets({ limit: 1, offset });
    if (res.documents.length) {
      setTweets((prev) => [...prev, ...res.documents]);
    } else {
      setIsLast(true);
    }
    setOffset(offset + 1);
  }

  useEffect(() => {
    if (!spinner.current) return;

    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        loadTweets(offset);
        observer.unobserve(entry.target);
      }
    });
    observer.observe(spinner.current);
  }, [tweets]);

  return (
    <>
      <div className="mt-2 divide-y divide-zinc-500/50">
        {tweets.map((tweet) => (
          <TweetCard key={tweet.$id} data={tweet} />
        ))}
      </div>{" "}
      <div role="status" ref={spinner} className="text-center mt-4">
        {isLast ? (
          <span className="text-zinc-700">No more tweets</span>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
