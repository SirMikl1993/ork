export default function ProductDetails({params}: {params: {productId: string}}) {
    return (
        <h1>This is details of product {params.productId}!</h1>
    );
}