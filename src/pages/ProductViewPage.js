import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import axios from 'axios';
import QuantityAndPrice from '../components/QuantityAndPrice';
import Button from '../components/Button';
import CartContext from '../context/CartContext';
import Modal from '../components/Modal';
import { RxCross1 } from 'react-icons/rx';

function ProductsViewPage() {
  //data fetching

  // const idNumber = parseInt(id.charAt(id.length - 1));
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchMainPro'],
    queryFn: () => axios.get('http://localhost:3005/products'),
  });
  // item number
  const [itemCount, setItemCount] = useState(1);
  const increaseCount = () => {
    if (itemCount >= 15) return;
    setItemCount(itemCount + 1);
  };
  const decreaseCount = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };
  // using cart context
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const modal = (
    <Modal>
      <div className="flex justify-between">
        <h2>Lotus Store</h2>
        <RxCross1
          className="cursor-pointer"
          onClick={() => setShowModal(!showModal)}
        />
      </div>
      <div>
        Your Product Has been added to Cart Go to
        <Link to={'/'} className="text-cyan-500 hover:scale-105">
          home Page
        </Link>
        <Link to={'/cart'} className="text-cyan-500 hover:scale-105">
          Cart
        </Link>
      </div>
    </Modal>
  );
  //page content
  let content;
  if (error) content = <div>error</div>;
  else if (isLoading) content = <div>loading</div>;
  else {
    const [productToShow] = data.data.filter((pro) => pro.id == id);
    console.log(productToShow);
    console.log(id);
    console.log(data.data);
    content = (
      <div className="p-2 text-center">
        {showModal && modal}
        <div className="h-[70vh] flex items-center justify-center p-2">
          <img
            src={faker.image.business()}
            alt="just"
            className="inline-block w-[90%] h-[80%]"
          />
        </div>
        <h1>{productToShow.title}</h1>
        <h2>{productToShow.type}</h2>
        <h3 className="pb-1 border-b-[1px] border-black mb-1 uppercase text-start">
          DETAILS
        </h3>
        <p className="text-start">{productToShow.details}</p>
        <QuantityAndPrice
          itemCount={itemCount}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
          price={productToShow.price}
        />
        <Link to={'/form'}>
          <Button product> place all your orders</Button>
        </Link>
        <Button
          cart
          onClick={() => {
            addToCart(productToShow, itemCount, 'storeProduct');
            setShowModal(!showModal);
          }}
        >
          Add Product to Cart
        </Button>
      </div>
    );
  }
  return <div>{content}</div>;
}
export default ProductsViewPage;
