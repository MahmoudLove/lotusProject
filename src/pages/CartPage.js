import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';
import Modal from '../components/Modal';
function CartPage() {
  const { cart } = useContext(CartContext);
  let content;
  if (cart.length > 1) {
    const renderedProducts = cart.map((product) => {
      return <CartListItem product={product} />;
    });
    content = (
      <>
        <div className="grid-parent grid p-2 gap-8 m">{renderedProducts}</div>
        <Link to={'/form'}>
          <Button product> place all your orders</Button>
        </Link>
      </>
    );
  } else
    content = (
      <>
        <div>Your Cart is Empty you ignorent Mother Fucker</div>;
      </>
    );
  return content;
}

export default CartPage;
