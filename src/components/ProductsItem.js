import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
function ProductItem({ product }) {
  return (
    <Link className="cursor-pointer" to={`/store/:${product.id}`}>
      <div className="justify-self-center shadow-md shadow-black/.05 rounded-lg relative">
        {product.discount && (
          <span className="absolute top-[5%] px-2 py-1 font-bold inline-block text-white bg-black">
            -{product.discount}%
          </span>
        )}

        <div className="w-full">
          <img src={faker.image.business()} alt="just " />
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500 uppercase font-bold">
            {product.bestOrNew}
          </span>
          <span className="text-zinc-500 uppercase font-bold text-xl">
            {product.type}
          </span>
        </div>
        <p className="text-2xl font-bold tracking-wide">
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
