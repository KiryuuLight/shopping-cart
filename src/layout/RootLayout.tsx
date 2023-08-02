import { Outlet } from 'react-router-dom';
import Header from './Header';
import Drawer from '../components/Drawer';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Drawer />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
