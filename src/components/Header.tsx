import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between border-b border-zinc-500/50 p-4 backdrop-blur-lg">
      <Link href="/" className="text-lg font-semibold uppercase">
        ntxt
      </Link>
      <div className="space-x-4">
        <Link href="/blog">/blog</Link>
        <Link href="/tweet">/tweet</Link>
      </div>
    </header>
  );
}
