import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    const calculateSubtotal = () => {
        return cartItems.reduce(
            (total, item) => total + parseFloat(item.price),
            0
        );
    };

    return (
        <div className="shopping-cart-container">
            <div className='shopping-cart'>
                <h2 className="cart-title">Shopping Cart ( {cartItems.length} item in your cart)</h2>
                <hr />

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty!</p>
                    </div>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />

                                <div className="cart-item-details">
                                    <p className="item-title">{item.title}</p>
                                    <p className="item-stock">In stock</p>
                                    <div className="quantity-container">
                                        <span>Quantity: {item.quantity}</span>
                                        <button onClick={() => removeFromCart(item.id)} className="delete-btn">
                                            Remove item
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-item-price">
                                    <p className="price">{item.price} INR</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}

                <div className="cart-subtotal">
                    <p>
                        Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):{" "}
                        <strong>{calculateSubtotal().toFixed(2)} INR</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart