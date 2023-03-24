function ProductsType({ children, products }) {
  const renderedProducts = products.map((pro) => (
    <h3 className="font-bold uppercase text-3xl">{pro}</h3>
  ));
  return (
    <section className="flex justify-around border-4 mx-3 my-3 py-5 border-cyan-500 relative">
      <span className="absolute -top-4 bg-white text-red-400 font-bold text-xl">
        OUR PRODUCTS
      </span>
      {renderedProducts}
    </section>
  );
}

export default ProductsType;
