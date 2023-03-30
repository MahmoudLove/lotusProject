import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductsType from '../components/ProductsType';
import ProductItem from '../components/ProductsItem';
import Slider from '../components/Slider';
import MainPageProducts from '../components/MainPageProducts';
function MainPage() {
  return (
    <main className="p-3">
      <ProductsType />
      {/* <Slider /> */}
      <MainPageProducts />
    </main>
  );
}
export default MainPage;
