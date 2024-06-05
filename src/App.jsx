import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import './index.css';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/Carrinho-de-Compras" element={<Products />} />
        <Route path="/Carrinho-de-Compras/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;

