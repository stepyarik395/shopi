import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import data from './data.json'


const App = () => {
  const store = useSelector(state => state);
  const [products, setProducts] = useState(data.products)

  useEffect(() => {
    window.localStorage.setItem('count', store.ordercount)
  });

  return (
    <div className="App">
      <Header
        products={products}
        setProducts={setProducts}
      />
      <Main
        products={products}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
