import React, { useState, useEffect } from 'react';
import './ProductGrid.css';
import ProductTile from '../product-tile/ProductTile';

const ProductGrid = ({ addToCart, cartItems }) => {
    const [productsData, setProductsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProductsData = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                setProductsData(result);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setProductsData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProductsData();
    }, [])

    return (
        <div className='products-container'>
            {loading && <p>Loading products...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className='products-grid'>
                {productsData && productsData.map((product) => {
                    const isInCart = cartItems.some((item) => item.id === product.id);
                    return <ProductTile key={product.id} product={product} addToCart={() => addToCart(product)} isInCart={isInCart} />
                })}
            </div>
        </div>
    )
}

export default ProductGrid