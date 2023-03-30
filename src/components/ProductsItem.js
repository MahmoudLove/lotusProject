import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
function ProductItem({ product }) {
  return (
    <Link className="cursor-pointer" to={`/store/${product.id}`}>
      <div className='className="justify-self-center shadow-md shadow-black/.05 rounded-lg relative'>
        {product.discount && (
          <span className="absolute top-[5%] px-[2px] py-[2px] inline-block text-xs text-white bg-black">
            -{product.discount}%
          </span>
        )}
        <img
          src={faker.image.business()}
          className="inline-block w-[100%] text-center"
        />

        <div className="flex justify-between">
          <span className="text-zinc-500 uppercase text-xs">
            {product.bestOrNew}
          </span>
          <span className="text-zinc-500 uppercase mx-1 text-xs">
            {product.type}
          </span>
        </div>
        <p className="text-sm font-bold tracking-wide">
          {product.discount
            ? product.price * ((100 - product.discount) / 100)
            : product.price}
          ,00 EGP
        </p>
      </div>
    </Link>
  );
}
export default ProductItem;
