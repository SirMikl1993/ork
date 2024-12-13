import {Metadata} from "next";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetada = async ({params}: Props):Promise <Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(()=>{
            resolve(`IPhone ${params.productId}`);
        }, 100)
    })
    return {
        title: `Product ${title}`,
    };
};

export default function ProductDetails({params}:Props) {
    return (
        <h1>This is details of product {params.productId}!</h1>
    );
}