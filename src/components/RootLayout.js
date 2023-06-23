import React from 'react';
import Navigation from './nav/Navigation';

import { Outlet } from 'react-router-dom';
import CartState from '../context/Cart/CartState';

const RootLayout = () => {
  return (
    <CartState>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </CartState>
  );
};

export default RootLayout;
