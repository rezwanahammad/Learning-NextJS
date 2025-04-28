export default async function slug({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Details about {slug[0]} and {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Details about {slug[0]}</h1>;
  }
  return <h1>Return Home page</h1>;
}
