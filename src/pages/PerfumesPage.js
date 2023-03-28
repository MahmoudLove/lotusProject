import { useState, useContext } from 'react';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/CartContext';
import QuantityAndPrice from '../components/QuantityAndPrice';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { RxCross1 } from 'react-icons/rx';
function PerfumesPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchMainPro'],
    queryFn: () => axios.get('http://localhost:3005/bottlesData'),
  });
  let bottlesData;
  const [currentSize, setCurrentSize] = useState();
  const [currentPrice, setCurrentprice] = useState(0);
  if (!isLoading && !error) {
    bottlesData = data.data;
  }
  const [itemCount, setItemCount] = useState(1);
  const increaseCount = () => {
    if (itemCount >= 15) return;
    setItemCount(itemCount + 1);
  };
  const decreaseCount = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };

  const { addToCart } = useContext(CartContext);

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentSize || !inputValue) return;
    addToCart(
      { name: inputValue, bottleSize: currentSize, price: currentPrice },
      itemCount,
      'perfumeProduct'
    );
    setCurrentSize();
    setCurrentprice(0);
    setItemCount(1);
    setInputValue('');
    setShowModal(!showModal);
  };
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
  return (
    <div className="p-2 text-center">
      {showModal && modal}
      <div className="h-[70vh] flex items-center justify-center p-2">
        <img
          src={faker.image.business()}
          alt="just"
          className="inline-block w-[90%] h-[80%]"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-b-[2px] border-black flex gap-2 pb-4 uppercase"
      >
        <label className="text-xl">fragnace type</label>
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="EX COCA CHANEL"
          className="grow outline-none text-xl"
        />
      </form>
      <div className="flex justify-center gap-5  my-7">
        {bottlesData?.map((bottle) => {
          return (
            <p
              onClick={() => {
                setCurrentSize(bottle.size);
                setCurrentprice(bottle.price);
              }}
              className={`perfume-para py-4 px-2 border-[2px] border-zinc-500 font-bold text-zinc-500 text-2xl ${
                bottle.size === currentSize &&
                'text-black border-black border-[3px]'
              }`}
            >
              {bottle.size}
            </p>
          );
        })}
      </div>
      <QuantityAndPrice
        itemCount={itemCount}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        price={currentPrice}
      />
      <Link to={'/form'}>
        <Button product> place all your orders</Button>
      </Link>
      <Button cart onClick={handleSubmit}>
        Add Product to Cart
      </Button>
    </div>
  );
}
export default PerfumesPage;
