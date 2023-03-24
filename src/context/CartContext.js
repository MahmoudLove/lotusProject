import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (p, itemCount, itemType) => {
    p.itemCount = itemCount;
    p.itemType = itemType;
    setCart([...cart, p]);
    console.log(cart);
  };
  const removeFromCart = (p) => {
    const elements = cart.filter((prod) => prod.name !== p.name);
    setCart(elements);
  };
  const resetCart = () => setCart([]);
  const sharedContext = {
    cart,
    addToCart,
    removeFromCart,
    resetCart,
  };
  return (
    <CartContext.Provider value={sharedContext}>
      {children}
    </CartContext.Provider>
  );
}
export { CartProvider };
export default CartContext;
