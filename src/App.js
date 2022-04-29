import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductsGrid from './components/Products/ProductsGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsGrid />
    </div>
  );
}

export default App;
