import Image from "next/image";
import { formatRelative } from "@/lib/date";

interface TweetCardProps {
  data: {
    $createdAt: string;
    body: string;
  };
}

export default function TweetCard({ data }: TweetCardProps) {
  return (
    <div className="flex space-x-4 py-4">
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-500">
        <Image src="/profile.jpeg" width={64} height={64} alt="User profile" />
      </div>
      <div className="-mt-1">
        <div className="text-zinc-500">
          <span className="font-medium text-zinc-300">root</span> @ntxt •{"  "}
          {formatRelative(data.$createdAt)}
        </div>
        <div className="mt-1">{data.body}</div>
      </div>
    </div>
  );
}
