import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';
import { ShoppingCartProvider, useShoppingCart } from '../context/ShoppingCartContext';

// Mock useShoppingCart hook
jest.mock('../context/ShoppingCartContext', () => ({
  __esModule: true,
  useShoppingCart: jest.fn(),
  ShoppingCartProvider: ({ children }) => <div>{children}</div>,
}));

describe('Home Component', () => {
  test('renders loading state', () => {
    // Mock the useShoppingCart hook with necessary values
    const mockUseShoppingCart = {
      addToCart: jest.fn(),
      updateQuantity: jest.fn(),
      cartItems: [],
    };

    useShoppingCart.mockReturnValue(mockUseShoppingCart);

    render(
      <ShoppingCartProvider>
        <Home loading={true} />
      </ShoppingCartProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders loading state when loading is true', async () => {
    // Mock the useShoppingCart hook with necessary values
    const mockUseShoppingCart = {
      addToCart: jest.fn(),
      updateQuantity: jest.fn(),
      cartItems: [],
    };
  
    useShoppingCart.mockReturnValue(mockUseShoppingCart);
  
    render(
      <ShoppingCartProvider>
        <Home loading={true} />
      </ShoppingCartProvider>
    );
  
    // Wait for the loading state to be rendered
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  test('renders error message when loading is false and fetch fails', async () => {
    // Mock the useShoppingCart hook with necessary values
    const mockUseShoppingCart = {
      addToCart: jest.fn(),
      updateQuantity: jest.fn(),
      cartItems: [],
    };
  
    useShoppingCart.mockReturnValue(mockUseShoppingCart);
  
    // Mock the useFetch hook to simulate a failed fetch
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch data'));
  
    render(
      <ShoppingCartProvider>
        <Home loading={false} />
      </ShoppingCartProvider>
    );
  
    // Wait for the error message to be rendered
    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
    });
  });
});
