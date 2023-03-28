import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductsType from '../components/ProductsType';
import ProductItem from '../components/ProductsItem';
import Slider from '../components/Slider';
function MainPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchMainPro'],
    queryFn: () => axios.get('http://localhost:3005/products'),
  });
  let content;
  if (error) content = <h1>Error</h1>;
  else if (isLoading) content = <h1>Loading mother ffucker</h1>;
  else {
    const renderedProducts = data.data.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
    content = (
      <div className="grid-parent grid p-2 gap-8 m">{renderedProducts}</div>
    );
  }
  const productsTypes = [
    'lip gloss',
    'perfumes',
    'bath bomb',
    'makhmarya',
    ' essential oil',
  ];
  return (
    <main className="p-3">
      <ProductsType products={productsTypes} />
      <Slider />
      {content}
    </main>
  );
}
export default MainPage;
