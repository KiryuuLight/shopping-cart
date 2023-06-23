import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Cart from './components/cart/Cart';
import Products, {
  loader as productsLoader,
} from './components/product/Products';
import ProductDetail, {
  loader as productLoader,
} from './components/product/ProductDetail';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="products" element={<Products />} loader={productsLoader} />
      <Route
        path="products/:id"
        element={<ProductDetail />}
        loader={productLoader}
      />

      <Route path="cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
