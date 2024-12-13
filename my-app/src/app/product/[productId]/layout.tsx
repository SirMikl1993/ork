import React from "react";

export default function ProductDetailsLayout (
    {
        children,
    }:{
        children?: React.ReactNode;
    }
){
    return (
        <>
            {children}
            <h2>Features of products</h2>
        </>
    )
}