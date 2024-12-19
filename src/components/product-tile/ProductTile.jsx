import React from 'react';
import './ProductTile.css';
import StarRating from '../star-rating/StarRating';

const ProductTile = ({ product, addToCart, isInCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt="product image" className="product-image" />
            <div className="product-details">
                <div className="product-title">
                    {product.title}
                </div>
                <div className='product-description'>
                    {product.description}
                </div>
            </div>
            <div className='product-card-content'>
                <div className="rating">
                    <div className="stars">Rating: {product.rating.rate}</div>
                    <StarRating rating={product.rating.rate} />
                    <div className="rating-count">({product.rating.count})</div>
                </div>
                <div className="product-price">
                    Price: {product.price} INR
                </div>
            </div>
            <button className={`add-to-cart ${isInCart ? 'added' : ''}`} onClick={!isInCart ? addToCart : undefined} disabled={isInCart}>
                {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}

export default ProductTile