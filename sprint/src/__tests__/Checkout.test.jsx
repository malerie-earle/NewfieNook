// Checkout.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import Checkout from "../components/Checkout";

// Mock useNavigate
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Setting up mock context provider
jest.mock("../context/ShoppingCartContext", () => ({
  useShoppingCart: () => ({
    cartItems: [
      {
        id: 1,
        title: "Product 1",
        description: "Description of Product 1",
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        title: "Product 2",
        description: "Description of Product 2",
        price: 15,
        quantity: 1,
      },
    ],
  }),
}));

describe("Checkout tests", () => {
  test("renders checkout form and total price", () => {
    render(<MemoryRouter><Checkout onBackToCart={() => {}} /></MemoryRouter>);

    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Payment Info:")).toBeInTheDocument();
    expect(screen.getByText("Total Price: $35.00")).toBeInTheDocument();
  });

  test("updates name and payment info on input change", () => {
    render(<MemoryRouter><Checkout onBackToCart={() => {}} /></MemoryRouter>);

    const nameInput = screen.getByLabelText("Name:");
    const paymentInfoInput = screen.getByLabelText("Payment Info:");

    fireEvent.change(nameInput, { target: { value: "Mclovin" } });
    fireEvent.change(paymentInfoInput, { target: { value: "1234-5678-9012-3456" } });

    expect(nameInput.value).toBe("Mclovin");
    expect(paymentInfoInput.value).toBe("1234-5678-9012-3456");
  });

  test("renders without errors", () => {
    render(
      <MemoryRouter>
        <Checkout onBackToCart={() => {}} />
      </MemoryRouter>
    );
  });
});
