import React, {useState} from 'react';
import './App.css';
import ProductGrid from './components/product-grid/ProductGrid';
import ShoppingCart from './components/shopping-cart/ShoppingCart';


const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      setCartItems((prevCart) => {
        return [...prevCart, { ...product}];
      });
    };

  const toggleView = () => {
    setIsCartVisible((prev) => !prev);
  };
  
  return (
    <div className='app-container'>
       <button className="view-cart" onClick={toggleView}>
        {isCartVisible ? "Back to Products" : `View Cart ${cartItems.length > 0 ? ` (${cartItems.length})` : ""}`}
      </button>
      {isCartVisible ? <ShoppingCart cartItems={cartItems} removeFromCart={(id) =>
      setCartItems(cartItems.filter((item) => item.id !== id))
      }/> : <ProductGrid cartItems={cartItems} addToCart={addToCart}/>}
    </div>
  )
}

export default App