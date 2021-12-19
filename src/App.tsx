import React from 'react';
import Main from './pages/Main';
import Products from './pages/Products';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="products" element={<Products />}></Route>
        <Route path="products/:productId" element={<div>Product 123 </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
