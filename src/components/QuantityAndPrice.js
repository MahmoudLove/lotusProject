function QuantityAndPrice({ itemCount, increaseCount, decreaseCount, price }) {
  return (
    <div className="flex justify-around mb-5">
      <div className="inline-flex flex-col items-center">
        <h3 className="mb-4 text-2xl">Quantity</h3>
        <div className="flex border-zinc-500 border-2">
          <button
            className="py-3 px-5 text-3xl text-zinc-500"
            onClick={decreaseCount}
          >
            -
          </button>
          <p className="py-3 px-5 text-3xl">{itemCount}</p>
          <button
            className="py-3 px-5 text-3xl text-zinc-500"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
      </div>
      <div className="inline-flex flex-col items-center">
        <h3 className="mb-4 text-2xl uppercase">price total</h3>
        <p className="text-5xl uppercase">{price * itemCount} EGP</p>
      </div>
    </div>
  );
}

export default QuantityAndPrice;
