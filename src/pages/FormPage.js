import { useContext, useState } from 'react';
import axios from 'axios';
import CartContext from '../context/CartContext';
import SummaryItem from '../components/SummaryItem';
import Button from '../components/Button';
function FormPage() {
  const { cart, setCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [adress, setAdress] = useState('');
  const handleAdressChange = (event) => {
    setAdress(event.target.value);
  };
  const [phone, setPhone] = useState('');
  const handlePhoneChnage = (event) => {
    setPhone(event.target.value);
  };
  const [email, setEmail] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [city, setCity] = useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const [notes, setNotes] = useState('');
  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };
  let renderedItems;
  if (cart.length > 1) {
    renderedItems = cart.map((item) => <SummaryItem item={item} />);
  } else {
    renderedItems = <div>You havenot chosen yet</div>;
  }
  const handleSubmit = async () => {
    const { data } = await axios.post('http://localhost:3005/orders', {
      data: { name, adress, phone, email, city, notes, cart },
    });
    if (data) {
      setName('');
      setAdress('');
      setPhone('');
      setEmail('');
      setCity('');
      setNotes('');
      content = <h1>your product has been placed</h1>;
      setCart();
    }

    console.log(data);
  };
  let content = (
    <div>
      <form className="m-3" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center px-2 py-6">
          <label>Names*</label>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            className="border-2 border-zinc-500 outline-none w-[80%] shrink rounded-[4px]"
          />
        </div>
        <div className="flex justify-between items-center px-2 py-6">
          <label>Street Adress*</label>
          <input
            value={adress}
            onChange={handleAdressChange}
            type={'text'}
            className="border-2 border-zinc-500 outline-none w-[80%] shrink rounded-[4px] "
          />
        </div>
        <div className="flex justify-between items-center px-2 py-6">
          <label>Phone number*</label>
          <input
            value={phone}
            type={'number'}
            onChange={handlePhoneChnage}
            className="border-2 border-zinc-500 outline-none w-[80%] shrink rounded-[4px]"
          />
        </div>
        <div className="flex justify-between items-center px-2 py-6">
          <label>Email adress*</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type={'email'}
            className="border-2 border-zinc-500 outline-none w-[80%] shrink rounded-[4px]"
          />
        </div>
        <div className="flex justify-between items-center px-2 py-6">
          <label>City*</label>
          <input
            value={city}
            onChange={handleCityChange}
            type={'text'}
            className="border-2 border-zinc-500 outline-none w-[80%] shrink rounded-[4px]"
          />
        </div>
        <div className="flex justify-between items-center px-2 py-6">
          <label className="text-black">NOTES</label>
          <input
            value={notes}
            onChange={handleNotesChange}
            type={'text'}
            className="border-2 border-zinc-500 outline-none w-[80%] shrink rounded-[4px]"
          />
        </div>
      </form>
      <figure className="mx-auto bg-zinc-300 border-[3px] border-zinc-500 h-[40vh] w-[60%] overflow-auto scroll-m-2 scrollbar rounded-md">
        <h1 className="text-center text-3xl">Order Summary</h1>
        <div className="flex flex-col gap-4 p-3">{renderedItems}</div>
      </figure>
      <h1 className="text-center font-bold text-black text-2xl">
        **the shipping fees will be added according to your address
      </h1>
      <h1 className="text-center font-bold text-black text-2xl">
        **we will contact you to confirm your order
      </h1>
      <Button onClick={handleSubmit} product>
        Order Confirm
      </Button>
    </div>
  );
  return <div>{content}</div>;
}
export default FormPage;
