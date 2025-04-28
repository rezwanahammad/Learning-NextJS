export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about {productId}</h1>;
}
