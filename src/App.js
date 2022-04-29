import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductsGrid from './components/Products/ProductsGrid';
import ProductSlip from './components/ProductSlip/ProductSlip';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='flex md:flex-row mx-4'>
        <ProductsGrid />
        <ProductSlip />
      </main>
    </div>
  );
}

export default App;
