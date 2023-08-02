import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products, { loader as loaderProduct } from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import ProductDetail, {
  loader as loaderProductDetails,
} from './components/product/ProductDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} loader={loaderProduct} />
      <Route
        path="products/:id"
        element={<ProductDetail />}
        loader={loaderProductDetails}
      />
      <Route path="cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function Main() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default Main;
