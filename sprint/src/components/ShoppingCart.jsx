import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
