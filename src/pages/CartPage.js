import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';
import Modal from '../components/Modal';
function CartPage() {
  const { cart } = useContext(CartContext);
  if (cart.length < 1)
    return <div>Your Cart is Empty you ignorent Mother Fucker</div>;

  const renderedProducts = cart.map((product) => {
    return <CartListItem product={product} />;
  });

  return (
    <>
      <div className="grid-parent grid p-2 gap-4 m">{renderedProducts}</div>
      <Link to={'/form'}>
        <Button product> place all your orders</Button>
      </Link>
    </>
  );
}

export default CartPage;
