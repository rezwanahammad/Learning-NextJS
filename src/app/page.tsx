import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/about">About</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in Franch</Link>
    </>
  );
}
