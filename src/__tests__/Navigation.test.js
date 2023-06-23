import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/nav/Navigation';
import CartState from '../context/Cart/CartState';

describe('Home component', () => {
  it('Navigate to another page when link is clicked', async () => {
    const user = userEvent.setup();

    render(
      <CartState>
        <Navigation />
      </CartState>,
      { wrapper: BrowserRouter }
    );

    const link = screen.getByRole('link', { name: 'Products' });
    await user.click(link);
    expect(link).toHaveClass('active');
  });
});
