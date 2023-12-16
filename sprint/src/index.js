// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>
);

reportWebVitals();
