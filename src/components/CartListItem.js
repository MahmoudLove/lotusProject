import { faker } from '@faker-js/faker';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import Button from './Button';
function CartListItem({ product }) {
  const { removeFromCart, cart } = useContext(CartContext);
  return (
    <div className="shadow-md shadow-black/.05 rounded-lg p-1">
      <div className="flex items-center justify-center ">
        <img
          src={faker.image.business()}
          alt="just"
          className="inline-block w-[90%] h-[80%]"
        />
      </div>
      <div className="flex justify-around gap-2">
        <h2>{product.name}</h2>
        {product.itemCount ? (
          <h2>
            {product.itemCount} X
            {product.discount
              ? product.price * ((100 - product.discount) / 100)
              : product.price}
            ,00 EGP
          </h2>
        ) : (
          <h2>
            {product.bottleSize} ML X {product.price}
          </h2>
        )}
      </div>
      <Button
        remove
        onClick={() => {
          console.log('remove');
          console.log(cart);
          removeFromCart(product);
        }}
      >
        Remove Item
      </Button>
    </div>
  );
}
export default CartListItem;
