import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import FormPage from './pages/FormPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsViewPage from './pages/ProductViewPage';
import StorePage from './pages/StorePage';
import PerfumesPage from './pages/PerfumesPage';
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/store">
            <Route index element={<StorePage />} />
            <Route path=":id" element={<ProductsViewPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/perfumes" element={<PerfumesPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
