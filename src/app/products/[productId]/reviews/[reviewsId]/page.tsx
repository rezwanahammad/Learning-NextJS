export default async function productreview({
    params, 
}:{
     params: Promise<{ productId: string; reviewsId: string }>;
}){
    const { productId, reviewsId } = await params;
    return <h1>Details about {productId} and review {reviewsId}</h1>;
}