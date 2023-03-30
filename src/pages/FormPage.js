import { useContext, useState } from 'react';
import axios from 'axios';
import CartContext from '../context/CartContext';
import SummaryItem from '../components/SummaryItem';
import Button from '../components/Button';
import Form from '../components/Form';
import ProductSummary from '../components/ProductsSummary';
function FormPage() {
  const { cart, setCart } = useContext(CartContext);

  const defaultFormFields = {
    name: '',
    adress: '',
    phoneNumber: '',
    emailAdress: '',
    city: '',
    notes: '',
  };

  const [formField, setFormField] = useState(defaultFormFields);
  const { adress, city, notes, emailAdress, name, phoneNumber } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async () => {
    if (cart.length < 1) return;
    const { data } = await axios.post('http://localhost:3005/orders', {
      data: { formField },
    });
    if (data) {
      setFormField(defaultFormFields);
      setCart();
    }
    console.log(data);
  };

  const renderedItems = cart.map((item) => <SummaryItem item={item} />);
  const inputClassName =
    'border-[2px] border-zinc-500 outline-none w-80% shrink rounded-[2px]';
  const inputParentClassName = 'flex justify-between items-center px-1 py-3';
  return (
    <div>
      <div>
        <form className="m-3" onSubmit={handleSubmit}>
          <div className={inputParentClassName}>
            <label>Names*</label>
            <input
              required
              name="name"
              pattern="A-Za-z"
              value={name}
              onChange={handleChange}
              type="text"
              className={inputClassName}
            />
          </div>
          <div className={inputParentClassName}>
            <label>Adress*</label>
            <input
              required
              name="adress"
              value={adress}
              onChange={handleChange}
              type={'text'}
              className={inputClassName}
            />
          </div>
          <div className={inputParentClassName}>
            <label>Number*</label>
            <input
              required
              name="phoneNumber"
              value={phoneNumber}
              type={'number'}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
          <div className={inputParentClassName}>
            <label>Email*</label>
            <input
              name="emailAdress"
              value={emailAdress}
              onChange={handleChange}
              type={'email'}
              className={inputClassName}
            />
          </div>
          <div className={inputParentClassName}>
            <label>City*</label>
            <input
              required
              name="city"
              value={city}
              onChange={handleChange}
              type={'text'}
              className={inputClassName}
            />
          </div>
          <div className={inputParentClassName}>
            <label className="text-black">NOTES</label>
            <input
              name="notes"
              value={notes}
              onChange={handleChange}
              type={'text'}
              className={inputClassName}
            />
          </div>
        </form>
        <ProductSummary />
        <h1 className="text-center font-bold text-black text-sm">
          **the shipping fees will be added according to your address
        </h1>
        <h1 className="text-center font-bold text-black text-sm">
          **we will contact you to confirm your order
        </h1>
        <Button onClick={handleSubmit} product>
          Order Confirm
        </Button>
      </div>
    </div>
  );
}
export default FormPage;
