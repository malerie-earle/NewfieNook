import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShoppingCart from '../components/ShoppingCart';
import * as ShoppingCartContext from '../context/ShoppingCartContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component

// Mock context provider for testing purposes
jest.mock('../context/ShoppingCartContext');

describe('ShoppingCart tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders cart items', () => {
    const mockUseShoppingCart = jest.spyOn(ShoppingCartContext, 'useShoppingCart');
    mockUseShoppingCart.mockReturnValue({
      cartItems: [
        {
          id: 1,
          title: 'Product 1',
          description: 'Description 1',
          price: 10,
          quantity: 2,
        },
        {
          id: 2,
          title: 'Product 2',
          description: 'Description 2',
          price: 15,
          quantity: 1,
        },
      ],
      updateQuantity: jest.fn(),
      removeFromCart: jest.fn(),
    });

    render(
      <Router>
        <ShoppingCart />
      </Router>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  test('handle quantity changes', () => {
    const mockUseShoppingCart = jest.spyOn(ShoppingCartContext, 'useShoppingCart');
    const updateQuantity = jest.fn();
    mockUseShoppingCart.mockReturnValue({
      cartItems: [{ id: 1, title: 'Product 1', quantity: 2 }],
      updateQuantity,
    });

    render(
      <Router>
        <ShoppingCart />
      </Router>
    );

    const quantityInput = screen.getByLabelText(/Quantity:/i);

    fireEvent.change(quantityInput, { target: { value: '3' } });
    expect(updateQuantity).toHaveBeenCalledWith(1, 3);
  });

  test('handles item removal', () => {
    const mockUseShoppingCart = jest.spyOn(ShoppingCartContext, 'useShoppingCart');
    const removeFromCart = jest.fn();
    mockUseShoppingCart.mockReturnValue({
      cartItems: [{ id: 1, title: 'Product 1', quantity: 2 }],
      removeFromCart,
    });

    render(
      <Router>
        <ShoppingCart />
      </Router>
    );

    const removeButton = screen.getByRole('button', { name: /Remove from Cart/i });

    fireEvent.click(removeButton);

    expect(removeFromCart).toHaveBeenCalledWith(1);
  });
});
