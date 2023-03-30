import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import SummaryItem from './SummaryItem';
function ProductSummary() {
  const { cart } = useContext(CartContext);
  const renderedItems = cart.map((item) => <SummaryItem item={item} />);
  return (
    <figure className="mx-auto bg-zinc-300 border-[3px] border-zinc-500 h-[40vh] w-[60%] overflow-auto scroll-m-2 scrollbar rounded-md">
      <h1 className="text-center text-[8px]">Order Summary</h1>
      <div className="flex flex-col gap-2 p-3">{renderedItems}</div>
    </figure>
  );
}
export default ProductSummary;
