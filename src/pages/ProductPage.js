import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/singleProduct/ProductDetails';

function ProductPage() {
    const api = JSON.parse(localStorage.getItem("api"));
    const { id } = useParams();

  return (
    <>
      {api ? (
        <ProductDetails product={api?.find((prod) => prod.id == id)} />
      ) : (
        <div style={{margin:"20vh"}}>
        </div>
      )}
    </>
  );
}

export default ProductPage