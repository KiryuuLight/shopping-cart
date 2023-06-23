import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/product/ProductCard';
import { BrowserRouter } from 'react-router-dom';
import CartState from '../components/cart/CartState';

const dummyData = {
  id: 1,
  title: 'Product',
  img: 'some-img',
  price: 3000,
  quantity: 1,
};

describe('Product component', () => {
  it('change the text of the button when is clicked', async () => {
    const user = userEvent.setup();

    render(
      <CartState>
        <ProductCard props={dummyData} />
      </CartState>,
      { wrapper: BrowserRouter }
    );

    const button = screen.getByRole('button', { name: 'Add to cart' });

    await user.click(button);

    expect(screen.getByRole('button', { name: '✓ Added' })).toBeInTheDocument();
  });
});
