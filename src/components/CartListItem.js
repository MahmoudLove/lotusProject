import { faker } from '@faker-js/faker';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
function CartListItem({ product }) {
  const { removeFromCart, cart } = useContext(CartContext);
  return (
    <div className="shadow-md shadow-black/.05 rounded-lg p-2">
      <div className="flex items-center justify-center ">
        <img
          src={faker.image.business()}
          alt="just"
          className="inline-block w-[90%] h-[80%]"
        />
      </div>
      <h2>{product.name}</h2>
      <h2>
        {product.itemCount} X
        {product.discount
          ? product.price * ((100 - product.discount) / 100)
          : product.price}
        ,00 EGP
      </h2>
      <button
        className="bg-red-500 text-white px-3 py-2"
        onClick={() => {
          console.log('remove');
          console.log(cart);
          removeFromCart(product);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}
export default CartListItem;
