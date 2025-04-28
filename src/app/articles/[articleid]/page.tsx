import Link from "next/link";

export default function Newsarticle() {
  return (
    <div>
      <h1>News Article</h1>
      <p>Reading in language</p>
      <div>
        <Link href="/articles/id?lang=en">English</Link>
        <Link href="/articles/id?lang=es">Spanish</Link>
        <Link href="/articles/id?lang=fr">Franch</Link>
      </div>
    </div>
  );
}
