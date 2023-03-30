function ProductsType({ children }) {
  const productsTypes = [
    'lip gloss',
    'perfumes',
    'bath bomb',
    'makhmarya',
    ' essential oil',
  ];
  const renderedProducts = productsTypes.map((pro) => (
    <h3 className="uppercase text-[8px] xs:text-[12px] sm:text-[14px] md:text-[17px] xl:text-[20px]">
      {pro}
    </h3>
  ));
  return (
    <section className="flex justify-around border-2 mx-1 my-1 py-1 border-cyan-500 relative">
      <span className="absolute top-[-63%] bg-white text-red-400 text-xs sm:text-[16px]">
        OUR PRODUCTS
      </span>
      {renderedProducts}
    </section>
  );
}

export default ProductsType;
