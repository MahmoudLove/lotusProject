import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductItem from '../components/ProductsItem';

function MainPageProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchMainPro'],
    queryFn: () => axios.get('http://localhost:3005/products'),
  });

  if (error) return <h1>Error</h1>;
  else if (isLoading) return <h1>Loading</h1>;
  const renderedProducts = data.data.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return <div className="grid-parent grid p-1 gap-6">{renderedProducts}</div>;
}

export default MainPageProducts;
